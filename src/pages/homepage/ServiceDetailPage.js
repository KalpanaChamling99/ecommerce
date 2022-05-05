import React, { useEffect } from "react";
import { withRouter,useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getServices} from '../../actions/thunk/homePageThunk';
// import '../../assets/scss/pages/serviceDetail.scss';

const ServiceDetailPage = (props) => {
    const { homePage: { services } } = useSelector((state) => state);
    const dispatch = useDispatch();
    
    const param = useParams();
    const {postId} = param;
    
    
    // Fetch service post initially
    useEffect(() => {
        dispatch(getServices());
    }, [dispatch]);
     return(
            
        <section className="nant-single-page nant-main-section-padding">
            <div className="container">
                {services?.filter( post =>post?.id == postId)?.map( (data) =>(
                    <>
                        <h1 class="nant-section-title">{data?.page_name}</h1>
                        <div  className="nant-desc" dangerouslySetInnerHTML={{ __html: data?.description?.replace(/(\r\n\r\n|\n\r\n\r)/g,'<p>') }}></div>
                    </>
                ))}
                
            </div>
        </section>

    );
};
export default withRouter(ServiceDetailPage);