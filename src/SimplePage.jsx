function SimplePage({ title }) {
  return (
    <div className="page">
      <header className="page-header">
        <h2>{title}</h2>
      </header>
      <div className="page-content">
        <p>Content for {title} will be displayed here.</p>
      </div>
    </div>
  )
}

export default SimplePage
