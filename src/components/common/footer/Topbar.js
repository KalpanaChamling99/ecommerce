import React, { useEffect } from "react";
import { Link,withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {FaEnvelope,FaPhone,FaFacebookF,FaTwitter,FaInstagram,FaYoutube} from 'react-icons/fa';
import { getSiteSettings} from '../../../actions/thunk/homePageThunk';


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
                            <Link to="#">
                                <img src={siteSettings['logo']} alt={siteSettings['name']}/>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="contact-us">
                            <div className="single-info clearfix">
                                <div className="icon"> 
                                  <FaEnvelope />
                                </div>
                                <div className="contact-info">
                                    <h4>Email Address</h4>
                                    <p>{siteSettings['email']}</p>
                                </div>
                            </div>
                            <div className="single-info clearfix">
                                <div className="icon"> 
                                    <FaPhone />
                                </div>
                                <div className="contact-info">
                                    <h4>Phone Number</h4>
                                    <p>{siteSettings['telephone']}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="social-link text-lg-right"> 
                            <Link to={{pathname: siteSettings['facebook']}} target="_blank" rel="noopener noreferrer"><FaFacebookF /></Link> 
                            <Link to={{pathname:siteSettings['twitter']}} target="_blank" rel="noopener noreferrer"><FaTwitter /></Link> 
                            <Link to={{pathname:siteSettings['instagram']}} target="_blank" rel="noopener noreferrer"><FaInstagram /></Link> 
                            <Link to="#"><FaYoutube /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default withRouter(Topbar);