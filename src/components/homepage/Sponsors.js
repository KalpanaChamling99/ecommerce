import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getSupporters} from '../../actions/thunk/homePageThunk';

import MapImage from './../../assets/images/map.png';


const Sponsors = () => {
    const { homePage: { supporters } } = useSelector((state) => state);
    const dispatch = useDispatch();
    
    // Fetch Sponsors initially
    useEffect(() => {
        dispatch(getSupporters());
    }, [dispatch]);
    return (
        <section className="sponsors-section section-padding" style={{backgroundImage:`url(${MapImage})`}}>
            <div className="container pt-100">
                <div className="row">
                    <div className="col-12 text-center mb-50">
                        <div className="title-wrap">
                            <p>Our Sponsors</p>
                        </div>
                    </div>
                </div>
                <div className="row text-center justify-content-around align-items-center">
                    {supporters?.map((item) => (
                        <div className="col-12 col-md-4 col-lg-3" >
                            <div className="single-brand-logo"> 
                                <img src={item.image} alt={item.name}  key={item.id}/> 
                            </div>
                        </div>
                    ))}
                   
                </div>
            </div>
        </section>
    );
};

export default withRouter(Sponsors);