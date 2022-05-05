import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getEvents} from '../../actions/thunk/homePageThunk';

import Post from './components/Event';
import Title from '../common/Title';


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
                        <Title 
                            title="Events"
                            subTitle="Upcoming Events"
                            titleClass="nant-title-green"
                        />
                    </div>
                </div>
                <div className="row">
                        {events?.data?.slice(0,3).map( (items) =>(
                        <div className="col-xl-4 col-md-6 col-12" key={items.id}>
                            <Post 
                                data={items}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default withRouter(Event);