import { Link } from "react-router-dom";

import "./index.css";

const Header = () => (
  <div className="nav-header">
    <div className="nav-menu-home">
      <Link to="/" className="nav-link">
        <h1 className="App-title">Health Is Wealth</h1>
      </Link>

      <Link to="/profile" className="nav-link">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt="profile"
          className="profile"
        />
      </Link>
    </div>
  </div>
);

export default Header;
