import { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';

export default function ProCustomersPage() {
  const [pro_customers, setProCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    company_name: '',
    contact_company_name: '',
    email: '',
    phone: '',
    address: '',
    status: 'active'
  });

  useEffect(() => {
    fetchProCustomers();
  }, []);

  async function fetchProCustomers() {
    try {
      const { data, error } = await supabase
        .from('pro_customers')
        .select('*')
        .order('name');
      
      if (error) throw error;
      setProCustomers(data || []);
    } catch (error) {
      console.error('Error fetching pro_customers:', error);
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (editingId) {
        const { error } = await supabase
          .from('pro_customers')
          .update(formData)
          .eq('id', editingId);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('pro_customers')
          .insert([formData]);
        if (error) throw error;
      }
      
      resetForm();
      fetchProCustomers();
    } catch (error) {
      console.error('Error saving customer:', error);
      alert('Error saving customer: ' + error.message);
    }
  }

  async function handleDelete(id) {
    if (!confirm('Are you sure you want to delete this customer?')) return;
    
    try {
      const { error } = await supabase
        .from('pro_customers')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      fetchProCustomers();
    } catch (error) {
      console.error('Error deleting customer:', error);
      alert('Error deleting customer: ' + error.message);
    }
  }

  function handleEdit(customer) {
    setEditingId(customer.id);
    setFormData({
      company_name: customer.name || '',
      contact_company_name: customer.contact_name || '',
      email: customer.email || '',
      phone: customer.phone || '',
      address: customer.address || '',
      status: customer.status || 'active'
    });
  }

  function resetForm() {
    setEditingId(null);
    setFormData({
      company_name: '',
      contact_company_name: '',
      email: '',
      phone: '',
      address: '',
      status: 'active'
    });
  }

  if (loading) {
    return <div classCompany Name="p-8">Loading pro_customers...</div>;
  }

  return (
    <div classCompany Name="p-8">
      <div classCompany Name="mb-8">
        <h1 classCompany Name="text-3xl font-bold text-gray-900 mb-2">ProCustomers</h1>
        <p classCompany Name="text-gray-600">Manage your customer relationships</p>
      </div>

      {/* Form */}
      <div classCompany Name="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <h2 classCompany Name="text-xl font-semibold mb-4">
          {editingId ? 'Edit Customer' : 'Add New Customer'}
        </h2>
        <form onSubmit={handleSubmit} classCompany Name="space-y-4">
          <div classCompany Name="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label classCompany Name="block text-sm font-medium text-gray-700 mb-1">
                Customer Company Name *
              </label>
              <input
                type="text"
                required
                value={formData.company_name}
                onChange={(e) => setFormData({...formData, company_name: e.target.value})}
                classCompany Name="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label classCompany Name="block text-sm font-medium text-gray-700 mb-1">
                Contact Company Name
              </label>
              <input
                type="text"
                value={formData.contact_name}
                onChange={(e) => setFormData({...formData, contact_company_name: e.target.value})}
                classCompany Name="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label classCompany Name="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                classCompany Name="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label classCompany Name="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                classCompany Name="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label classCompany Name="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
                classCompany Name="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label classCompany Name="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({...formData, status: e.target.value})}
                classCompany Name="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>
          <div classCompany Name="flex gap-2">
            <button
              type="submit"
              classCompany Name="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              {editingId ? 'Update' : 'Add'} Customer
            </button>
            {editingId && (
              <button
                type="button"
                onClick={resetForm}
                classCompany Name="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Table */}
      <div classCompany Name="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div classCompany Name="overflow-x-auto">
          <table classCompany Name="min-w-full divide-y divide-gray-200">
            <thead classCompany Name="bg-gray-50">
              <tr>
                <th classCompany Name="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer Company Name
                </th>
                <th classCompany Name="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th classCompany Name="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th classCompany Name="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Phone
                </th>
                <th classCompany Name="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th classCompany Name="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody classCompany Name="bg-white divide-y divide-gray-200">
              {pro_customers.length === 0 ? (
                <tr>
                  <td colSpan="6" classCompany Name="px-6 py-4 text-center text-gray-500">
                    No pro_customers found. Add your first customer above.
                  </td>
                </tr>
              ) : (
                pro_customers.map((customer) => (
                  <tr key={customer.id} classCompany Name="hover:bg-gray-50">
                    <td classCompany Name="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {customer.name}
                    </td>
                    <td classCompany Name="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {customer.contact_name}
                    </td>
                    <td classCompany Name="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {customer.email}
                    </td>
                    <td classCompany Name="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {customer.phone}
                    </td>
                    <td classCompany Name="px-6 py-4 whitespace-nowrap">
                      <span classCompany Name={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        customer.status === 'active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {customer.status}
                      </span>
                    </td>
                    <td classCompany Name="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => handleEdit(customer)}
                        classCompany Name="text-blue-600 hover:text-blue-900 mr-3"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(customer.id)}
                        classCompany Name="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
