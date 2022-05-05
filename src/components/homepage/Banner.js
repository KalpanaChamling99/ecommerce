import React, { useEffect,useRef } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {Carousel} from 'antd';
import {getSliders} from '../../actions/thunk/homePageThunk';

import Loader from '../common/Loader';
import BannerPost from './components/Banner';

const Banner = () => {
    let slider = useRef();
    const dispatch = useDispatch();
    const { homePage: { sliders }, loader: { isLoading } } = useSelector((state) => state);

    // Fetch Slider Post initially
    useEffect(() => {
        dispatch(getSliders());
    }, [dispatch]);
    const previous = () =>{
        slider.prev();
    }
    const next =() =>{
        slider.next();
    }

    return(
        <>
        {isLoading ? <Loader />:
            <section className="hero-slider hero-style-1  nant-slider">
                <button className="slider-arrow slider-prev" onClick={previous}><i className="fal fa-arrow-left"></i></button>
                <button className="slider-arrow slider-next" onClick={next}><i className="fal fa-arrow-right"></i></button>
                <Carousel 
                    autoplay 
                    dots={false}
                    ref = {carousel => (slider = carousel)}
                >
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

