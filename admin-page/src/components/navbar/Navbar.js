import "./Navbar.css";
import avatar from "../../assets/avatar.png";
import admin from "../../assets/customer-2.jpg";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";

const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i>
          <MenuIcon />
        </i>
      </div>
      {/* <div className="navbar__left">
            <a href="#">Users</a>
            <a href="#">Videos</a>
            <a className="active_link" href="#">Admin</a>
        </div> */}
      <div className="navbar__right">
        <a href="">
          <i>
            <SearchIcon />
          </i>
        </a>
        <a href="">
          <img width="50" src={admin} alt="avatar" />
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
