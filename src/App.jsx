import { Routes, Route, Link, useLocation } from 'react-router-dom'
import './App.css'
import DashboardPage from './DashboardPage'
import SimplePage from './SimplePage'

// Sidebar Component
function Sidebar() {
  const location = useLocation()
  const navItems = [
    { path: '/', label: 'Dashboard', icon: '📊' },
    { path: '/analytics', label: 'Analytics Hub', icon: '📈', badge: 'New' },
    { path: '/vendors', label: 'Vendors', icon: '🏢', count: 89 },
    { path: '/sales-reps', label: 'Sales Reps', icon: '👥', count: 82 },
    { path: '/brands', label: 'Brands', icon: '⭐', count: 98 },
    { path: '/customers', label: 'Pro Customers', icon: '🏗️', count: 26 },
    { path: '/categories', label: 'Categories', icon: '📦', count: 55 },
    { path: '/services', label: 'Services', icon: '🔧', count: 10 }
  ]

  return (
    <aside className="sidebar">
      <div className="logo">
        <div className="logo-icon">🏗️</div>
        <div className="logo-text">
          <h1>LowesPro</h1>
          <p>Vendor Management</p>
        </div>
      </div>
      
      <nav className="nav-menu">
        {navItems.map((item) => (
          <Link key={item.path} to={item.path} className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}>
            <span className="icon">{item.icon}</span>
            <span>{item.label}</span>
            {item.badge && <span className="badge">{item.badge}</span>}
            {item.count && <span className="count">{item.count}</span>}
          </Link>
        ))}
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
  )
}

// Dashboard Page with full content
function DashboardPage() {
  return (
    <>
      <header className="page-header">
        <div className="header-left">
          <h2>Enhanced Dashboard</h2>
          <p className="subtitle">Real-time insights and comprehensive vendor analytics</p>
        </div>
        <div className="header-actions">
          <button className="btn-secondary"><span>🔄</span> Sync</button>
          <button className="btn-secondary"><span>↻</span> Refresh</button>
          <button className="btn-primary"><span>📄</span> Generate Report</button>
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
                {[85, 70, 65, 45, 30, 25, 20, 15].map((height, i) => (
                  <div key={i} className="bar" style={{height: `${height}%`}}></div>
                ))}
              </div>
            </div>
          </div>

          <div className="card actions-card">
            <div className="card-header"><h3>Quick Actions</h3></div>
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
            <div className="card-header"><h3>Recent Activity</h3></div>
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
            <div className="card-header"><h3>Performance Metrics</h3></div>
            <div className="metrics-list">
              {[
                { label: 'Response Rate', value: 85 },
                { label: 'Order Fulfillment', value: 92 },
                { label: 'Customer Satisfaction', value: 78 }
              ].map((metric, i) => (
                <div key={i} className="metric-item">
                  <div className="metric-label">{metric.label}</div>
                  <div className="metric-bar">
                    <div className="metric-fill" style={{width: `${metric.value}%`}}></div>
                  </div>
                  <div className="metric-value">{metric.value}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// Simple page component for other routes
function SimplePage({ title }) {
  return (
    <>
      <header className="page-header">
        <div className="header-left">
          <h2>{title}</h2>
          <p className="subtitle">Manage your {title.toLowerCase()}</p>
        </div>
      </header>
      <div style={{padding: '32px'}}>
        <div className="card">
          <h3>{title} Management</h3>
          <p>This page will display {title.toLowerCase()} data from Supabase.</p>
          <p style={{marginTop: '16px', color: '#718096'}}>Coming soon with full CRUD operations and data integration.</p>
        </div>
      </div>
    </>
  )
}

function App() {
  return (
    <div id="app">
      <Sidebar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/analytics" element={<SimplePage title="Analytics Hub" />} />
          <Route path="/vendors" element={<SimplePage title="Vendors" />} />
          <Route path="/sales-reps" element={<SimplePage title="Sales Representatives" />} />
          <Route path="/brands" element={<SimplePage title="Brands" />} />
          <Route path="/customers" element={<SimplePage title="Pro Customers" />} />
          <Route path="/categories" element={<SimplePage title="Categories" />} />
          <Route path="/services" element={<SimplePage title="Services" />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
