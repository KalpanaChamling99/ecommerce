import React from 'react';
import { Link, withRouter } from "react-router-dom";
import { isLoggedIn } from "../../../utils";

const NavMenu = () => {
  return (
    <div className="main-menu">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {/* TODO:: update after v1.0.0 */}
        <li>
          <Link to="/events/">Events</Link>
        </li>
        <li>
          {" "}
          <Link to="#">About Us</Link>
          <ul className="sub-menu">
            <li>
              <Link to="/teams">Our Team</Link>
            </li>
            <li>
              <Link to="/committee">Past Committee</Link>
            </li>
            <li>
              <Link to="/member-list">Member List</Link>
            </li>
            <li>
              <Link to="/important-document">Important Documents</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/contact-us">Contact</Link>
        </li>
        {/* <li>
          <Link to="/shop">All Products</Link>
        </li> */}
        {!isLoggedIn() &&
          <li>
            <Link to="/register">Become a Member</Link>
          </li>
        }
      </ul>
    </div>
  );
};
export default withRouter(NavMenu);
