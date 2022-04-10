import {Link,} from 'react-router-dom';
import {FaPlus} from 'react-icons/fa';

const ServicePost = (props) => {
    
    return(
        <div className="single-service-item">
           
            <div className="icon"> <img src={props.imageSrc} alt={props.alt} /> </div>
            <div className="service-details">
                <h2><Link to="#">{props.title}</Link></h2>
                <p>{props.description}</p>
                <Link to={`/service-details/${props.id}`}><span className='icon'><FaPlus /></span> read more</Link>
            </div>
        </div>
        )
};
export default ServicePost;