import React, { useEffect } from "react";
import { Link,withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSiteSettings} from '../../../actions/thunk/homePageThunk';

import Social from '../Social';
import Logo from '../Logo';


const Topbar = () => {
    const { homePage: { siteSettings } } = useSelector((state) => state);
    const dispatch = useDispatch();

    // Fetch site settings initially
    useEffect(() => {
        dispatch(getSiteSettings());
    }, [dispatch]);

    return(
        <div className="footer-top-bar text-white">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-3">
                        <div className="footer-logo"> 
                            <Link to="/">
                                <Logo />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="contact-us">
                            <div className="single-info clearfix">
                                <div className="icon"> 
                                  <i className="fal fa-envelope"></i>
                                </div>
                                <div className="contact-info">
                                    <h4>Email Address</h4>
                                    <p>{siteSettings['email']}</p>
                                </div>
                            </div>
                            <div className="single-info clearfix">
                                <div className="icon"> 
                                   <i className="fal fa-phone"></i>
                                </div>
                                <div className="contact-info">
                                    <h4>Phone Number</h4>
                                    <p>{siteSettings['telephone']}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <Social classes=" text-lg-right" />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default withRouter(Topbar);