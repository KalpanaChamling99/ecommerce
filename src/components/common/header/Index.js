import React from "react";
import { Link, withRouter} from "react-router-dom";

import Logo from "../Logo";
import NavMenu from './NavMenu';
import Social from './../Social';
import Topbar from './Topbar';
import MobileMenu from './MobileMenu';

const Header = () =>{
    
    return(
        <header className="header-wrap header-box-style header-1 nant-header">
            <div className="container">
                <div className="row align-items-center nant-header-wrapper">
                    <div className="col-12 p-0 d-lg-none d-block d-none-mobile">
                       <Topbar />
                    </div> 

                    {/* LOGO */}
                    <div className="col-12 col-sm-6 col-lg-3  pr-0 pl-0 nant-logo-section">
                        <div className="logo">
                            <Link to="/">
                                <Logo />
                            </Link>
                        </div>
                    </div>
                   
                    {/* topbar */}
                    <div className="col-xl-9 pl-lg-0 col-lg-9 d-none d-lg-block pr-0">
                        <div className="box-wrap">
                            <Topbar />
                            <div className="menu-wrap d-flex align-items-center justify-content-around">
                                <NavMenu />
                                <Social />
                            </div>                        
                        </div>                    
                    </div> 
                    
                    {/* mobile:Topbar */}
                    <div className="col-10  p-0 d-sm-none d-block mobile-topbar">
                       <Topbar />
                    </div> 

                    <div className="col-2 col-sm-6 col-lg-6 d-lg-none d-block pl-0">
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