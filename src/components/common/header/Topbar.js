
import React, { useEffect,useState } from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getSiteSettings} from '../../../actions/thunk/homePageThunk';
import { logout } from "./../../../actions/loginAuthAction";
import { checkIfTokenHasExpired } from "./../../../utils";
import { isLoggedIn } from "../../../utils";
import CartButton from "./CartButton";

const Topbar = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const { homePage: { siteSettings }, login: { user } } = useSelector((state) => state);
    const userInfo = localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : {};


    // Fetch site settings initially
    useEffect(() => {
        dispatch(getSiteSettings());
    }, [dispatch]);

    // Check token expiry
    useEffect(() => {
        if (checkIfTokenHasExpired()) {
          logoutHandler();
        }
      }, []);
  
    // Logout
    const logoutHandler = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      dispatch(logout());
      history.push("/");
    };
   

    return(
        <div className="top-bar text-right nant-header-topbar">
            <ul>
                <li className="nant-envelope"><i className="fal fa-envelope"></i>{siteSettings['email']}</li>
                <li className="nant-phone"><i className="fal fa-phone"></i>{siteSettings['telephone']}</li>
                <li><CartButton /></li>
                {!isLoggedIn() ? (
                    <li><Link to="/login" className="d-btn">Login</Link></li>
                ) : (
                    <li className="nant-profile-menu">
                        {" "}
                        <span>{userInfo?.title} {userInfo?.first_name}</span>
                        <ul className="nant-sub-menu">
                        <li>
                            <Link to="/order-history">My order</Link>
                        </li>
                        <li>
                            <Link to="/update-password">Change Password</Link>
                        </li>

                        <li>
                            <Link to="/my-product">My Product</Link>
                        </li>

                        <li>
                            <Link to="/" onClick={logoutHandler}>
                            Logout
                            </Link>
                        </li>
                        </ul>
                    </li>
                )}
            </ul>
        </div>
    )
};
export default withRouter(Topbar);