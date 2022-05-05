import {Link} from 'react-router-dom';
import {FaPlus,FaMapMarkerAlt,FaEnvelope} from 'react-icons/fa';
const EventPost = (props) => {
    const {data} = props;
    const date = new Date(data.date);
    const month =  date.toLocaleString('en-US',{month:'long'});
    const day =  date.toLocaleString('en-US',{day:'2-digit'});
    const year =  date.getFullYear();
     
    return(
        <div className="single-event-card" style={{backgroundImage:`url(${data?.image})`}}>
            <div className="cat-name"> <Link to={`/event-details/${data?.id}`}>{data?.title}</Link></div>
            <div className="event-details">
                <span>{day} {month} {year}</span>
                <h3> <Link to={`/event-details/${data?.id}`}  dangerouslySetInnerHTML={{ __html: data?.description}}></Link> </h3>
                <p> 
                    <span className="icon"><FaMapMarkerAlt /></span>
                    {data?.location}
                </p>
                <p> 
                    <span className="icon"><FaEnvelope /></span>
                    {data?.email}
                </p>
                <Link to={`/event-details/${data?.id}`} className="buy-ticket readmore-btn">
                    <span className="icon"><FaPlus /></span>Read More
                </Link>

            </div>
        </div>
    );
};
export default EventPost;