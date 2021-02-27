import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Sidebar.css";

const Sidebar = (props) => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const onLoginChange = () => {
    props.onLoginChange(false);
    alert('Logged out successfully')
  }

  const onLocationChange = () => {
    props.setLocation(window.location.pathname)
  }

  return (
    <nav className={sidebar ? "sidebar active" : "sidebar"}>
      <button className="hamburger" type="button" onClick={showSidebar}>
        <div></div>
      </button>
      <ul onClick={showSidebar}>
        <li><Link to="/">Chats</Link></li>
        <li><Link to="/login" style={{display: props.isLoggedIn ? 'none' : 'block'}} onClick={onLocationChange}>Log In</Link></li>
        <li><Link to="/register" style={{display: props.isLoggedIn ? 'none' : 'block'}}>Register</Link></li>
        <li><Link to={window.location.pathname} style={{display: props.isLoggedIn ? 'block' : 'none'}} onClick={onLoginChange}>Log Out</Link></li>
      </ul>
    </nav>
  );
}

export default Sidebar;