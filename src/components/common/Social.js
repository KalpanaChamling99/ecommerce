import React,{useEffect} from 'react';
import {Link,withRouter} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getSiteSettings} from '../../actions/thunk/homePageThunk';

const Social = (props) =>{
    const { homePage: { siteSettings } } = useSelector((state) => state);
    const dispatch = useDispatch();
    const classes = "social-link" + " " + props?.classes;
    // Fetch site settings initially
    useEffect(() => {
        dispatch(getSiteSettings());
    }, [dispatch]);
    return(
        <div className={classes}>
            <Link to={{pathname: siteSettings['facebook']}} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>  
            </Link> 
            <Link to={{pathname:siteSettings['twitter']}} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
            </Link> 
            <Link to={{pathname:siteSettings['instagram']}} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
            </Link> 
            <Link to="#">
                <i className="fab fa-youtube"></i>
            </Link>
        </div>
    );
};
export default withRouter(Social);