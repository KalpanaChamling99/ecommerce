import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {Carousel} from 'antd';
import {getSliders} from '../../actions/thunk/homePageThunk';

import Loader from '../common/Loader';
import BannerPost from './components/Banner';
import 'antd/dist/antd.css';

const Banner = () => {
    const { homePage: { sliders }, loader: { isLoading } } = useSelector((state) => state);
    const dispatch = useDispatch();

    // Fetch Slider Post initially
    useEffect(() => {
        dispatch(getSliders());
    }, [dispatch]);

    return(
        <>
        {isLoading ? <Loader />:
            <section className="hero-slider hero-style-1 hero-style-2 nant-slider">
                <Carousel autoplay dots={false}>
                    {sliders?.map((items) => (
                        <BannerPost 
                            bgImage={items.image}
                            url={items.link}
                            key={items.id}
                        />
                    ))} 
                </Carousel>
            </section>  
        }
       </>
    );
};
export default withRouter(Banner);

