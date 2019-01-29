import React from "react";
// import { Link } from "react-router-dom";
import donacologo from './images/header-logo.jpg';
import donaco from './images/donaco-icon.png';
import charity from './images/charity.png';
import donations from './images/donations.png';
import widget from './images/widget.png';
import com from './images/com.png';
import userimg from './images/user-img.png';
import profile from './images/profile.jpg';
import logout from './images/logout.jpg';
import profilehover from './images/profile-hover.jpg';
import logouthover from './images/logout-hover.jpg';

// The Header creates links that can be used to navigate
// between routes.

const Header = () => (
  <header>
  <div className="header-menu">
    <div className="logo fix-nav"><img src={donacologo} className="" alt="donaco logo" /></div>
    <div className="left-menu fix-nav">
        <ul className="header-nav">
            <li className="active"><a><img className="donaco-menu-icon" src={donaco} alt="donaco icon" />Home</a></li>
            <li><a><img className="donaco-stripe-icon" src={charity} alt="Stripe" /> Charities</a></li>
            <li><a><img className="donaco-stripe-icon" src={donations} alt="Stripe" /> Donations</a></li>
            <li><a><img className="donaco-stripe-icon" src={widget} alt="Stripe" /> Widget Placements</a></li>
            <li><a><img className="donaco-stripe-icon" src={com} alt="Stripe" /> Campaigns</a></li>
        </ul>

    </div>
    <div className="right-menu fix-nav">
        <div className="user-img"><img className="" src={userimg} alt="userimage" /></div>
        <div className="user-name">ARYA STARK<br /><span>Admin</span></div>
        <div className="user-profile" data-toggle="dropdown"><i className="fal fa-angle-down"></i></div>

          <ul className="dropdown-menu">
            <li><a href="profile.html"><img className="menu-icon" src={profile} alt="user profile" /><img className="menu-icon-hover" src={profilehover} alt="user profile" />My Profile</a></li>
            <li><a href="index.html"><img className="menu-icon" src={logout} alt="user profile" /><img className="menu-icon-hover" src={logouthover} alt="user profile" />Logout</a></li>
          </ul>
    </div>
  </div>
 </header>
  
  // <header>
  //   <nav>
  //     <ul>
  //       <li>
  //         <Link to="/">Home</Link>
  //       </li>
  //       <li>
  //         <Link to="/roster">Roster</Link>
  //       </li>
  //       <li>
  //         <Link to="/schedule">Schedule</Link>
  //       </li>
  //     </ul>
  //   </nav>
  // </header>
);

export default Header;
