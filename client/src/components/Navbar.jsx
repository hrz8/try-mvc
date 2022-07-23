import { Link } from "react-router-dom";

function Navbar() {
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <Link to="/" className="nav-link">Create</Link>
      </li>
      <li className="nav-item">
        <Link to="/edit" className="nav-link">Edit</Link>
      </li>
      <li className="nav-item">
        <Link to="/search" className="nav-link">Search</Link>
      </li>
    </ul>
  )
}

export default Navbar;