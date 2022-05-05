import {Link} from 'react-router-dom';
import DummyImage2 from "../../../assets/images/about2.jpg";
const ProjectPost = (props) => {
    const {data} = props;
    return(
        <div className="single-cause-item style-2" key={data.id}>
            <div className="cause-featured-img bg-cover" style={{backgroundImage: `url(${data?.image})`}}>
            </div>
            <div className="cause-details">
                <h4> <Link to={`/project-details/${data?.id}`}>{data?.title}</Link> </h4>
                <div className="cause-btns"> 
                    <Link to={`/project-details/${data?.id}`} className="theme-btn minimal-btn"><i className="fal fa-heart"></i> Read More</Link> 
                </div>
            </div>
        </div>
    );
};

export default ProjectPost;