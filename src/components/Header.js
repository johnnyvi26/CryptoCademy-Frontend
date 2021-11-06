import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <nav>
        <Link to="/dashboard">
          <p>Dashboard</p>
        </Link>
        <Link to="/portfolio">Portfolio</Link>
      </nav>
    </div>
  )
}

export default Header;