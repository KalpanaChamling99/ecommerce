import React from 'react';
import {Link} from 'react-router-dom';

const Event = (props) => {
    const date = new Date(props.date);
    const month =  date.toLocaleString('en-US',{month:'long'});
    const day =  date.toLocaleString('en-US',{day:'2-digit'});
    const year =  date.getFullYear();
    return(
        <div className="single-event-ticket row align-items-center">
            <div className="col-xl-4">
                <div className="event-featured-cover bg-cover"  style={{backgroundImage:`url(${props.bgImage})`}}>
                    <div className="event-time-address">
                        <span><i className="fal fa-calendar-alt"></i>{day} {month} {year}</span>
                        <span><i className="fal fa-map-marker-alt"></i>NY, London</span>
                    </div>
                </div>
            </div>
            <div className="col-xl-8 pr-xl-0">
                <div className="event-info">
                    <h2><Link to="">{props.title}</Link></h2>
                    <p  dangerouslySetInnerHTML={{ __html: props?.description}}></p>   
                </div>
            </div>
            {/* <div className="col-xl-3 text-xl-right">
                <div className="event-ticket-buy">
                    <Link to="" className="ticket-buy-btn"><i className="fal fa-home"></i>Buy</Link>
                </div>
            </div> */}
        </div> 
    )
}
export default Event;