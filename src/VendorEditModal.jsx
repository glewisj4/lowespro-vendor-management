import { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';

export default function VendorEditModal({ vendor, categories, salesReps, onClose, onSave }) {
  const [formData, setFormData] = useState({
    name: '',
    contact_name: '',
    email: '',
    phone: '',
    address: '',
    status: 'active'
  });
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSalesReps, setSelectedSalesReps] = useState([]);
  const [categorySearch, setCategorySearch] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (vendor) {
      setFormData({
        name: vendor.name || '',
        contact_name: vendor.contact_name || '',
        email: vendor.email || '',
        phone: vendor.phone || '',
        address: vendor.address || '',
        status: vendor.status || 'active'
      });
      // Load existing relationships
      loadVendorRelationships();
    }
  }, [vendor]);

  async function loadVendorRelationships() {
    if (!vendor?.id) return;
    
    try {
      const { data: catData } = await supabase
        .from('vendor_categories')
        .select('category_id')
        .eq('vendor_id', vendor.id);
      
      const { data: repData } = await supabase
        .from('vendor_sales_reps')
        .select('sales_rep_id, is_primary')
        .eq('vendor_id', vendor.id);
      
      if (catData) {
        setSelectedCategories(catData.map(c => c.category_id));
      }
      if (repData) {
        setSelectedSalesReps(repData.map(r => ({
          id: r.sales_rep_id,
          isPrimary: r.is_primary
        })));
      }
    } catch (error) {
      console.error('Error loading relationships:', error);
    }
  }

  const handleCategoryToggle = (categoryId) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleSalesRepToggle = (repId) => {
    setSelectedSalesReps(prev => {
      const exists = prev.find(r => r.id === repId);
      if (exists) {
        return prev.filter(r => r.id !== repId);
      } else {
        return [...prev, { id: repId, isPrimary: prev.length === 0 }];
      }
    });
  };

  const handlePrimaryToggle = (repId) => {
    setSelectedSalesReps(prev => 
      prev.map(r => ({
        ...r,
        isPrimary: r.id === repId
      }))
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Update vendor
      const { error: vendorError } = await supabase
        .from('vendors')
        .update(formData)
        .eq('id', vendor.id);

      if (vendorError) throw vendorError;

      // Delete existing relationships
      await supabase.from('vendor_categories').delete().eq('vendor_id', vendor.id);
      await supabase.from('vendor_sales_reps').delete().eq('vendor_id', vendor.id);

      // Insert new category relationships
      if (selectedCategories.length > 0) {
        const categoryRecords = selectedCategories.map(catId => ({
          vendor_id: vendor.id,
          category_id: catId
        }));
        await supabase.from('vendor_categories').insert(categoryRecords);
      }

      // Insert new sales rep relationships
      if (selectedSalesReps.length > 0) {
        const repRecords = selectedSalesReps.map(rep => ({
          vendor_id: vendor.id,
          sales_rep_id: rep.id,
          is_primary: rep.isPrimary
        }));
        await supabase.from('vendor_sales_reps').insert(repRecords);
      }

      onSave();
      onClose();
    } catch (error) {
      console.error('Error saving vendor:', error);
      alert('Error saving vendor');
    } finally {
      setLoading(false);
    }
  };

  const filteredCategories = categories.filter(cat =>
    cat.name.toLowerCase().includes(categorySearch.toLowerCase())
  );

  if (!vendor) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{vendor.name}</h2>
            <p className="text-sm text-gray-500">Vendor Details and Information</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company Name *</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Contact Name</label>
              <input
                type="text"
                value={formData.contact_name}
                onChange={(e) => setFormData({...formData, contact_name: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({...formData, status: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900"
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Categories</h3>
            <input
              type="text"
              placeholder="Search categories..."
              value={categorySearch}
              onChange={(e) => setCategorySearch(e.target.value)}
              className="w-full px-3 py-2 mb-3 border border-gray-300 rounded-md bg-white text-gray-900"
            />
            <div className="max-h-48 overflow-y-auto border border-gray-200 rounded-md p-3">
              {filteredCategories.map(category => (
                <label key={category.id} className="flex items-center py-2 hover:bg-gray-50 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category.id)}
                    onChange={() => handleCategoryToggle(category.id)}
                    className="mr-3 h-4 w-4"
                  />
                  <span>{category.name}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Sales Representatives</h3>
            <div className="max-h-48 overflow-y-auto border border-gray-200 rounded-md p-3">
              {salesReps.map(rep => {
                const selected = selectedSalesReps.find(r => r.id === rep.id);
                return (
                  <div key={rep.id} className="flex items-center justify-between py-2 hover:bg-gray-50">
                    <label className="flex items-center cursor-pointer flex-1">
                      <input
                        type="checkbox"
                        checked={!!selected}
                        onChange={() => handleSalesRepToggle(rep.id)}
                        className="mr-3 h-4 w-4"
                      />
                      <span>{rep.name}</span>
                    </label>
                    {selected && (
                      <button
                        type="button"
                        onClick={() => handlePrimaryToggle(rep.id)}
                        className={`ml-2 px-2 py-1 text-xs rounded ${selected.isPrimary ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                      >
                        {selected.isPrimary ? '★ Primary' : 'Set Primary'}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
