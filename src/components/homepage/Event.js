
import React, { useEffect,useState } from "react";
import { withRouter,Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getEvents} from '../../actions/thunk/homePageThunk';

import {FaHeart} from 'react-icons/fa';
import Post from './components/Event';
import Loader from '../common/Loader';


const Event =() => {
    const { homePage: { events} } = useSelector((state) => state);
    const dispatch = useDispatch();
    // Fetch events post initially
    useEffect(() => {
        dispatch(getEvents());
    }, [dispatch]);
    return(
        <section className="event-card-section section-padding section-bg">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center mb-40">
                        <div className="section-title">
                            <span><span className="icon"><FaHeart /></span>event</span>
                            <h1>Upcoming Events</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {events?.map( (items) =>(
                        <div className="col-xl-4 col-md-6 col-12">
                            <Post 
                                key ={items.id}
                                id={items.id}
                                title ={items.title}
                                date = {items.date}
                                description = {items.description}
                                location ={items.location}
                                bgImage = {items.image}
                                email = {items.email}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default withRouter(Event);