function DashboardPage() {
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
            <div className="stat-value">89</div>
            <div className="stat-label">Active Vendors</div>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">👥</div>
          <div className="stat-content">
            <div className="stat-value">82</div>
            <div className="stat-label">Sales Representatives</div>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">🏢</div>
          <div className="stat-content">
            <div className="stat-value">26</div>
            <div className="stat-label">Pro Customers</div>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">⭐</div>
          <div className="stat-content">
            <div className="stat-value">98</div>
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
              <span className="quick-stat-value">55</span>
            </div>
            <div className="quick-stat">
              <span className="quick-stat-label">Services</span>
              <span className="quick-stat-value">10</span>
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
