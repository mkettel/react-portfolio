import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className="nav-container">
      <Link to="/" className='navLink'>Home </Link>
      <Link to="/profile" className='navLink'>Profile </Link>
    </div>
  )
}
