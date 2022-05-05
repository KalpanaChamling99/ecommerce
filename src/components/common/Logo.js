import React,{useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getSiteSettings} from '../../actions/thunk/homePageThunk';
import siteLogo from '../../assets/images/logo.png';

const Logo = () => {
    const { homePage: { siteSettings } } = useSelector((state) => state);
    const dispatch = useDispatch();
    // Fetch site settings initially
    useEffect(() => {
        dispatch(getSiteSettings());
    }, [dispatch]);

    // return <img src={siteSettings['logo']} alt={siteSettings['name']} />;
    return <img src={siteLogo} alt="nant logo" />;
};
export default Logo;