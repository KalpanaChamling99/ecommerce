import {Link} from 'react-router-dom';
import { getTrimmedString } from '../../../utils';
const AboutPost = (props) => {
    const {data} = props;
    return(
        <div className="single-promo-item text-white bg-cover nant-about-post" key={data.id}>
            <div className="icon"> 
                <img src={data?.image} alt={data?.altText} /> 
            </div>
            <div className="promo-details">
                <h2><Link to="">{data?.page_name}</Link></h2>
                {/* <p className="line-limit-2"  dangerouslySetInnerHTML={{ __html: data?.description}}></p> */}
                <p className="line-limit-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Link to="">read more</Link>
            </div>
        </div>
    );
}
export default AboutPost;