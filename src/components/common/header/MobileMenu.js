import React, {useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { isLoggedIn } from "../../../utils";

const MobileMenu = () => {
    const [mobileMenuClass,setMobileMenuClass] = useState("mobile-nav");
    const [overlayClass,setOverlayClass] = useState("overlay");
    const showMobileMenuHandler = () =>{
        setMobileMenuClass("mobile-nav show");
        setOverlayClass("overlay active");
    }
    const closeMobileMenuHandler = () =>{
        setMobileMenuClass("mobile-nav");
        setOverlayClass("overlay");
    }
    return(
        <>
         <div className="mobile-nav-wrap">
              <div id="hamburger" onClick={showMobileMenuHandler}>
                  <i class="fal fa-bars"></i>
              </div>
              {/* <mobile menu - responsive menu  */}
              <div className={mobileMenuClass}>
                <button type="button" className="close-nav" onClick={closeMobileMenuHandler}>
                  {" "}
                  <i className="fal fa-times-circle"></i>{" "}
                </button>
                <nav className="sidebar-nav">
                  <ul className="metismenu" id="mobile-menu">
                    <li>
                        <Link to="/" onClick={closeMobileMenuHandler}>Home</Link>
                    </li>
                    {/* TODO:: update after v1.0.0 */}
                    {/* <li>
                        <Link to="#" onClick={closeMobileMenuHandler}>Events</Link>
                    </li> */}
                    <li>
                        {" "}
                        <Link to="#" className="has-arrow">About Us</Link>
                        <ul className="sub-menu">
                            <li>
                                <Link to="/teams" onClick={closeMobileMenuHandler}>Our Team</Link>
                            </li>
                            <li>
                                <Link to="/committee" onClick={closeMobileMenuHandler}>Past Committee</Link>
                            </li>
                            <li>
                                <Link to="/member-list" onClick={closeMobileMenuHandler}>Member List</Link>
                            </li>
                            <li>
                                <Link to="/important-document" onClick={closeMobileMenuHandler}>Important Documents</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/contact-us" onClick={closeMobileMenuHandler}>Contact</Link>
                    </li>
                    {!isLoggedIn() &&
                        <li>
                            <Link to="/register" onClick={closeMobileMenuHandler}>Become a Member</Link>
                        </li>
                    }
                   
                  </ul>
                </nav>
                
              </div>
            </div>
            <div className={overlayClass}></div>
        </>
    )
}
export default withRouter(MobileMenu);