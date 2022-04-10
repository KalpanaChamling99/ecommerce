import {FaPhone,FaMapMarkerAlt,FaEnvelope} from 'react-icons/fa';

const EventCard = (props) => {
    let icon = '';
    const classes= "icon " + props.classes;

    if(props.icon == 'phone'){
        icon = <FaPhone />;
    }
    if(props.icon == 'envelope'){
        icon = <FaEnvelope />;
    }
    if(props.icon == 'mapMarkerAlt'){
        icon = <FaMapMarkerAlt />;
    }
    return(
        <div className="single-address-info">
            <div className={classes}>
               {icon}
            </div>
            <div className="address">
                <p>{props.caption}</p>
            </div>
        </div>
    );
};
export default EventCard;