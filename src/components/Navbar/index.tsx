import { Link } from "react-router-dom";

import './styles.css';
import '../../assets/styles/custom.scss';

const Navbar = () => {
  return (
    <nav className="navbar main-nav">
      <Link to="/" className="nav-logo-text">
        <h4 className="nav-text">GitHub API</h4>
      </Link>
    </nav>
  );
};

export default Navbar;
