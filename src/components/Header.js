import { Link } from 'react-router-dom'
import { Nav } from "../styles/Header.styled"

const Header = () => {
  return (
    <div>
      <Nav>
        <Link to="/">
          <p>Dashboard</p>
        </Link>
        <Link to="/portfolio">Portfolio</Link>
      </Nav>
    </div>
  )
}

export default Header;