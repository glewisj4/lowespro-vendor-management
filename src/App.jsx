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
