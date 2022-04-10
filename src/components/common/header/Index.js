import React, { useEffect,useState } from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./../../../actions/loginAuthAction";
import { checkIfTokenHasExpired } from "./../../../utils";
import Logo from "../Logo";
import NavMenu from "./NavMenu";
import CartButton from "./CartButton";
import MobileMenu from './MobileMenu';
import { isLoggedIn } from "../../../utils";

const Header = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

 
  const {
    login: { user },
  } = useSelector((state) => state);
  const userInfo = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {};

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch(logout());
    history.push("/");
  };
 
  useEffect(() => {
    if (checkIfTokenHasExpired()) {
      logoutHandler();
    }
  }, []);

  return (
    <header className="transparent-header header-2 nant-header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3 col-sm-5 col-12">
            <div className="logo">
              <Link to="/">
                <Logo />
              </Link>
            </div>
          </div>
          <div className="col-lg-6 p-lg-0 d-none d-lg-block">
            <div className="menu-wrap">
              <NavMenu />
            </div>
          </div>

          <div className="col-lg-3 col-sm-5 pl-lg-0 col-10 text-right">
            <div className="nant-header-btn-section">
              <CartButton />
              {!isLoggedIn() ? (
                <div className="header-promo-btn">
                  <Link to="/login" className="theme-btn">
                    Login
                  </Link>
                </div>
              ) : (
                <ul className="nant-profile-menu">
                  <li>
                    {" "}
                    {userInfo?.title} {userInfo?.first_name}
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
                </ul>
              )}
            </div>
          </div>

          <div className="d-block d-lg-none col-sm-1 col-2">
            <div className="mobile-menu-section">
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default withRouter(Header);
