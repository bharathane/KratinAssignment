import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineGlobal,
  AiOutlineMedicineBox,
  AiOutlineProfile,
} from "react-icons/ai";
import "./index.css";

const Header = () => (
  <div className="nav-footer">
    <div className="nav-menu">
      <Link to="/" className="nav-link">
        <div className="iconContainer">
          <AiOutlineHome />
          <h1 className="heading">Home</h1>
        </div>
      </Link>
      <Link to="/browser" className="nav-link">
        <div className="iconContainer">
          <AiOutlineGlobal />
          <h1 className="heading">Browser</h1>
        </div>
      </Link>
      <Link to="/doctor" className="nav-link">
        <div className="iconContainer">
          <AiOutlineMedicineBox />
          <h1 className="heading">Doctor</h1>
        </div>
      </Link>
    </div>
  </div>
);

export default Header;
