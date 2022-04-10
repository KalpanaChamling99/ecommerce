import {Link} from 'react-router-dom';

const BannerPost = (props) => {
    return(
        <div className="single-slide nant-single-slide" style={{backgroundImage:`url(${props.bgImage})`}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-12">
                        <div className="slide-contents text-white">
                            <Link to={{pathname: props.url}} target="_blank" rel="noopener noreferrer" className="theme-btn">View More</Link> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default BannerPost;