import { useAuth } from './AuthContext'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className="dashboard-page">
      <nav className="navbar">
        <div className="nav-brand">Auth App</div>
        <div className="nav-user">
          <span className="nav-user-name">{user?.name}</span>
          <button className="btn btn-outline" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>

      <main className="dashboard-content">
        <div className="welcome-card">
          <div className="avatar">
            {user?.name?.charAt(0).toUpperCase()}
          </div>
          <h1>Welcome, {user?.name}</h1>
          <p className="welcome-subtitle">You are successfully logged in.</p>
        </div>

        <div className="profile-card">
          <h2>Profile Information</h2>
          <div className="profile-details">
            <div className="detail-row">
              <span className="detail-label">Name</span>
              <span className="detail-value">{user?.name}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Email</span>
              <span className="detail-value">{user?.email}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">User ID</span>
              <span className="detail-value detail-mono">{user?._id}</span>
            </div>
          </div>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon stat-icon-user">👤</div>
            <div className="stat-info">
              <span className="stat-number">1</span>
              <span className="stat-label">Account</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon stat-icon-shield">🔒</div>
            <div className="stat-info">
              <span className="stat-number">Active</span>
              <span className="stat-label">Status</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon stat-icon-check">✅</div>
            <div className="stat-info">
              <span className="stat-number">Verified</span>
              <span className="stat-label">Email</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
