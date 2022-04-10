import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getServices} from '../../actions/thunk/homePageThunk';

import Post from './components/Services';


const Service = (props) =>{
    const { homePage: { services } } = useSelector((state) => state);
    const dispatch = useDispatch();
    
    // Fetch service post initially
    useEffect(() => {
        dispatch(getServices());
    }, [dispatch]);
    return(
        <section className="services-section section-padding pt-0">
            <div className="container">
                <div className="row">
                    {services?.map((item) => (
                        <div className="col-xl-4 col-md-6 col-12">
                            <Post 
                                key={item.id}
                                id={item.id}
                                title = {item.page_name}
                                description = {item.description}
                                imageSrc ={item.image}
                                alt={item.title}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default withRouter(Service);

   
            
            