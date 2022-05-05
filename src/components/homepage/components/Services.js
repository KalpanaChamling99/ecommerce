import {Link,} from 'react-router-dom';
import Title from '../../common/Title';
import { getTrimmedString } from '../../../utils';

const ServicePost = (props) => {
    const {data} = props;

    return(
        <div className="row nant-service-item" key={data.id}  id={data.id}>
            <div className="col-lg-6 nant-image-section">
           
                <div className="about-shots d-flex justify-content-between-- align-center">
                    <div className="about-img mr-3">
                        <img src={data?.image} alt="" className="img-fluid" />
                    </div>
                    <div className="about-img">
                        <img src={data?.custom_image} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
            <div className="col-lg-6 about_left_content mt-0 pl-lg-5 pr-lg-5 nant-desc">
                <Title 
                    title= {data?.page_name}
                    subTitle ={data?.title}
                    titleClass="nant-title-redish"
                />
                <p
                    dangerouslySetInnerHTML={{ __html: getTrimmedString(data?.description) }}
                ></p>
                <div className="nant-btn-section">
                    <Link
                        to={`/service-details/${data?.id}`}
                        className="theme-btn minimal-btn mt-35"
                    >
                        Read More 
                    </Link>
                    {props.historyId && <Link
                        to={`/service-details/${props.historyId}`}
                        className="theme-btn minimal-btn mt-35"
                    >
                        Our History
                    </Link>}
                </div>
                
            </div>
        </div>
        )
};
export default ServicePost;