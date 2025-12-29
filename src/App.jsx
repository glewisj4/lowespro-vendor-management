import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div id="app">
      <aside className="sidebar">
        <div className="logo">
          <div className="logo-icon">🏗️</div>
          <div className="logo-text">
            <h1>LowesPro</h1>
            <p>Vendor Management</p>
          </div>
        </div>
        
        <nav className="nav-menu">
          <a href="#dashboard" className="nav-item active">
            <span className="icon">📊</span>
            <span>Dashboard</span>
          </a>
          <a href="#analytics" className="nav-item">
            <span className="icon">📈</span>
            <span>Analytics Hub</span>
            <span className="badge">New</span>
          </a>
          <a href="#vendors" className="nav-item">
            <span className="icon">🏢</span>
            <span>Vendors</span>
            <span className="count">89</span>
          </a>
          <a href="#sales-reps" className="nav-item">
            <span className="icon">👥</span>
            <span>Sales Reps</span>
            <span className="count">82</span>
          </a>
          <a href="#brands" className="nav-item">
            <span className="icon">⭐</span>
            <span>Brands</span>
            <span className="count">98</span>
          </a>
          <a href="#customers" className="nav-item">
            <span className="icon">🏗️</span>
            <span>Pro Customers</span>
            <span className="count">26</span>
          </a>
          <a href="#categories" className="nav-item">
            <span className="icon">📦</span>
            <span>Categories</span>
            <span className="count">55</span>
          </a>
          <a href="#services" className="nav-item">
            <span className="icon">🔧</span>
            <span>Services</span>
            <span className="count">10</span>
          </a>
        </nav>
        
        <div className="sidebar-footer">
          <div className="user-profile">
            <div className="avatar">👤</div>
            <div className="user-info">
              <div className="user-name">Admin User</div>
              <div className="user-role">System Administrator</div>
            </div>
          </div>
        </div>
      </aside>

      <main className="main-content">
        <header className="page-header">
          <div className="header-left">
            <h2>Enhanced Dashboard</h2>
            <p className="subtitle">Real-time insights and comprehensive vendor analytics</p>
          </div>
          <div className="header-actions">
            <button className="btn-secondary">
              <span>🔄</span> Sync
            </button>
            <button className="btn-secondary">
              <span>↻</span> Refresh
            </button>
            <button className="btn-primary">
              <span>📄</span> Generate Report
            </button>
          </div>
        </header>

        <section className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon vendors">🏢</div>
            <div className="stat-content">
              <h3>Total Vendors</h3>
              <div className="stat-value">89</div>
              <div className="stat-change positive">↑ 12% from last month</div>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon categories">📦</div>
            <div className="stat-content">
              <h3>Categories</h3>
              <div className="stat-value">55</div>
              <div className="stat-change neutral">Across all materials</div>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon reps">👥</div>
            <div className="stat-content">
              <h3>Sales Representatives</h3>
              <div className="stat-value">82</div>
              <div className="stat-change warning">⚠️ Needs attention</div>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon distribution">📊</div>
            <div className="stat-content">
              <h3>Avg Vendors/Category</h3>
              <div className="stat-value">1.6</div>
              <div className="stat-change positive">✓ Good distribution</div>
            </div>
          </div>
        </section>

        <div className="dashboard-content">
          <div className="left-column">
            <div className="card chart-card">
              <div className="card-header">
                <h3>Vendors by Category</h3>
                <button className="btn-link">View Details →</button>
              </div>
              <div className="chart-placeholder">
                <div className="bar-chart">
                  <div className="bar" style={{height: '85%'}} data-label="Decking"></div>
                  <div className="bar" style={{height: '70%'}} data-label="Railing"></div>
                  <div className="bar" style={{height: '65%'}} data-label="Lumber"></div>
                  <div className="bar" style={{height: '45%'}} data-label="Trex"></div>
                  <div className="bar" style={{height: '30%'}} data-label="Shingles"></div>
                  <div className="bar" style={{height: '25%'}} data-label="Electrical"></div>
                  <div className="bar" style={{height: '20%'}} data-label="Vinyl"></div>
                  <div className="bar" style={{height: '15%'}} data-label="Other"></div>
                </div>
              </div>
            </div>

            <div className="card actions-card">
              <div className="card-header">
                <h3>Quick Actions</h3>
              </div>
              <div className="quick-actions">
                <button className="action-btn">
                  <span className="action-icon">➕</span>
                  <div>
                    <div className="action-title">Add New Vendor</div>
                    <div className="action-desc">Register a new supplier</div>
                  </div>
                </button>
                <button className="action-btn">
                  <span className="action-icon">👤</span>
                  <div>
                    <div className="action-title">Add Sales Rep</div>
                    <div className="action-desc">Create rep contact</div>
                  </div>
                </button>
                <button className="action-btn">
                  <span className="action-icon">📦</span>
                  <div>
                    <div className="action-title">Manage Categories</div>
                    <div className="action-desc">Organize materials</div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="right-column">
            <div className="card activity-card">
              <div className="card-header">
                <h3>Recent Activity</h3>
              </div>
              <div className="activity-list">
                <div className="activity-item">
                  <div className="activity-icon new">➕</div>
                  <div className="activity-content">
                    <div className="activity-title">New vendor added</div>
                    <div className="activity-desc">ABC Supply Co - 2 hours ago</div>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon update">✏️</div>
                  <div className="activity-content">
                    <div className="activity-title">Vendor updated</div>
                    <div className="activity-desc">Beacon materials - 5 hours ago</div>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon category">📦</div>
                  <div className="activity-content">
                    <div className="activity-title">Category restructured</div>
                    <div className="activity-desc">Roofing subcategories - 1 day ago</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card metrics-card">
              <div className="card-header">
                <h3>Performance Metrics</h3>
              </div>
              <div className="metrics-list">
                <div className="metric-item">
                  <div className="metric-label">Response Rate</div>
                  <div className="metric-bar">
                    <div className="metric-fill" style={{width: '85%'}}></div>
                  </div>
                  <div className="metric-value">85%</div>
                </div>
                <div className="metric-item">
                  <div className="metric-label">Order Fulfillment</div>
                  <div className="metric-bar">
                    <div className="metric-fill" style={{width: '92%'}}></div>
                  </div>
                  <div className="metric-value">92%</div>
                </div>
                <div className="metric-item">
                  <div className="metric-label">Customer Satisfaction</div>
                  <div className="metric-bar">
                    <div className="metric-fill" style={{width: '78%'}}></div>
                  </div>
                  <div className="metric-value">78%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
