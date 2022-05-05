import {FaHeart} from 'react-icons/fa';
const Title = (props) =>{
    return(
        <div className="section-title nant-main-section-title">
            <span className={props.titleClass}><span className="icon"><FaHeart /></span>{props.title}</span>
            <h2>{props.subTitle}</h2>
        </div>
    );
};

export default Title;