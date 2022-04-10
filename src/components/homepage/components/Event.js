import {Link} from 'react-router-dom';
import {FaPlus,FaMapMarkerAlt,FaEnvelope} from 'react-icons/fa';
const EventPost = (props) => {
    let description = props.description.replace('<p>','').replace('</p>','');
    const date = new Date(props.date);
    const month =  date.toLocaleString('en-US',{month:'long'});
    const day =  date.toLocaleString('en-US',{day:'2-digit'});
    const year =  date.getFullYear();
    
    return(
        <div className="single-event-card" style={{backgroundImage:`url(${props.bgImage})`}}>
            <div className="cat-name"> <Link to={`/event-details/${props.id}`}>{props.title}</Link></div>
            <div className="event-details">
                <span>{day} {month} {year}</span>
                <h3> <Link to={`/event-details/${props.id}`}  dangerouslySetInnerHTML={{ __html: props?.description}}></Link> </h3>
                <p> 
                    <span className="icon"><FaMapMarkerAlt /></span>
                    {props.location}
                </p>
                <p> 
                    <span className="icon"><FaEnvelope /></span>
                    {props.email}
                </p>
                <Link to={`/event-details/${props.id}`} className="buy-ticket readmore-btn">
                    <span className="icon"><FaPlus /></span>Read More
                </Link>

            </div>
        </div>
    );
};
export default EventPost;