import { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';

function DashboardPage() {
      const [stats, setStats] = useState({
    vendors: 0,
    salesReps: 0,
    proCustomers: 0,
    brands: 0,
    categories: 0,
    services: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch counts from each table
        const { count: vendorCount } = await supabase
          .from('vendors')
          .select('*', { count: 'exact', head: true });
        
        const { count: salesRepCount } = await supabase
          .from('sales_reps')
          .select('*', { count: 'exact', head: true });
        
        const { count: proCustomerCount } = await supabase
          .from('pro_customers')
          .select('*', { count: 'exact', head: true });
        
        const { count: brandCount } = await supabase
          .from('brands')
          .select('*', { count: 'exact', head: true });
        
        const { count: categoryCount } = await supabase
          .from('categories')
          .select('*', { count: 'exact', head: true });
        
        const { count: serviceCount } = await supabase
          .from('services')
          .select('*', { count: 'exact', head: true });

        setStats({
          vendors: vendorCount || 0,
          salesReps: salesRepCount || 0,
          proCustomers: proCustomerCount || 0,
          brands: brandCount || 0,
          categories: categoryCount || 0,
          services: serviceCount || 0
        });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }
    
    fetchData();
  }, []);


  return (
    <div className="page">
      <header className="page-header">
        <h2>Dashboard</h2>
        <p className="subtitle">Welcome to LowesPro Vendor Management</p>
      </header>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">📊</div>
          <div className="stat-content">
            <div className="stat-value">{loading ? '...' : stats.vendors}</div>
            <div className="stat-label">Active Vendors</div>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">👥</div>
          <div className="stat-content">
            <div className="stat-value">{loading ? '...' : stats.salesReps}</div>
            <div className="stat-label">Sales Representatives</div>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">🏢</div>
          <div className="stat-content">
            <div className="stat-value">{loading ? '...' : stats.proCustomers}</div>
            <div className="stat-label">Pro Customers</div>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">⭐</div>
          <div className="stat-content">
            <div className="stat-value">{loading ? '...' : stats.brands}</div>
            <div className="stat-label">Active Brands</div>
          </div>
        </div>
      </div>

      <div className="dashboard-sections">
        <div className="section recent-activity">
          <h3>Recent Activity</h3>
          <div className="activity-list">
            <div className="activity-item">
              <span className="activity-icon">📦</span>
              <div className="activity-details">
                <strong>New vendor added:</strong> Acme Building Supplies
                <span className="activity-time">2 hours ago</span>
              </div>
            </div>
            <div className="activity-item">
              <span className="activity-icon">✅</span>
              <div className="activity-details">
                <strong>Order completed:</strong> Pro Customer #1245
                <span className="activity-time">5 hours ago</span>
              </div>
            </div>
            <div className="activity-item">
              <span className="activity-icon">👤</span>
              <div className="activity-details">
                <strong>Sales rep updated:</strong> John Smith profile
                <span className="activity-time">1 day ago</span>
              </div>
            </div>
          </div>
        </div>

        <div className="section quick-stats">
          <h3>Quick Stats</h3>
          <div className="quick-stats-grid">
            <div className="quick-stat">
              <span className="quick-stat-label">Categories</span>
              <span className="quick-stat-value">{loading ? '...' : stats.categories}</span>
            </div>
            <div className="quick-stat">
              <span className="quick-stat-label">Services</span>
              <span className="quick-stat-value">{loading ? '...' : stats.services}</span>
            </div>
            <div className="quick-stat">
              <span className="quick-stat-label">This Month Orders</span>
              <span className="quick-stat-value">342</span>
            </div>
            <div className="quick-stat">
              <span className="quick-stat-label">Pending Reviews</span>
              <span className="quick-stat-value">12</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
