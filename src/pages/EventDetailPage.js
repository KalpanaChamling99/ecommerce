import React, { useEffect } from "react";
import { withRouter,useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getEvents} from '../actions/thunk/homePageThunk';

import EventCard from '../components/card/Event';

const EventDetailPage = (props) => {
    const { homePage: { events} } = useSelector((state) => state);
    const dispatch = useDispatch();
   
    const param = useParams();
    const {postId} = param;
   

    // Fetch events post initially
    useEffect(() => {
        dispatch(getEvents());
    }, [dispatch]);

    return(
        <section className="event-details-wrap section-padding">
            <div className="container">
            {events?.filter( post =>post?.id == postId)?.map( (data) =>(
                <div className="row">
                    <div className="col-12 col-lg-12">
                        <div className="event-fetaured-thumb">
                            <img src={data?.image} alt='' />
                        </div>
                    </div>
                    <div className="col-12 col-lg-7 col-xl-8">
                        <div className="event-details-contents">
                            <h2>{data?.title}</h2>
                            <p  dangerouslySetInnerHTML={{ __html: data?.description}}></p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-5 col-xl-4">
                        <div className="event-details-sidebar">
                            <div className="single-event-sidebar wow fadeInUp">

                                <div className="sidebar-title">
                                    <h3>Event Details</h3>
                                </div>
                                <div class="event-address-info">
                                    <EventCard  
                                        caption ={data?.location}
                                        classes="icon1"
                                        icon = "mapMarkerAlt"
                                    />
                                    <EventCard  
                                        caption ={data?.email}
                                        classes="icon2"
                                        icon = "envelope"
                                    />
                                    <EventCard  
                                        caption ={data?.phone}
                                        classes="icon3"
                                        icon = "phone"
                                    />
                                </div>
                            </div>
                            
                        </div>
                    </div>
               </div>
            ))}

            </div>
        </section>
    )
};
export default withRouter(EventDetailPage);