import { Routes, Route, Link, useLocation } from 'react-router-dom'
import './App.css'

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

// Dashboard Page Component (reusing your existing dashboard content)
// ... (I can provide the rest if needed, but this should fix the routing)

function App() {
  return (
    <div id="app">
      <Sidebar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<div style={{padding:'32px'}}>Dashboard Content</div>} />
          <Route path="/analytics" element={<div style={{padding:'32px'}}>Analytics Hub</div>} />
          <Route path="/vendors" element={<div style={{padding:'32px'}}>Vendors Page</div>} />
          <Route path="/sales-reps" element={<div style={{padding:'32px'}}>Sales Reps Page</div>} />
          <Route path="/brands" element={<div style={{padding:'32px'}}>Brands Page</div>} />
          <Route path="/customers" element={<div style={{padding:'32px'}}>Pro Customers Page</div>} />
          <Route path="/categories" element={<div style={{padding:'32px'}}>Categories Page</div>} />
          <Route path="/services" element={<div style={{padding:'32px'}}>Services Page</div>} />
        </Routes>
      </main>
    </div>
  )
}

export default App
