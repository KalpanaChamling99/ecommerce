import React, { useEffect } from "react";
import { withRouter,useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getProjects} from '../../actions/thunk/homePageThunk';

const ProjectDetailPage = (props) => {
    const { homePage: { projects } } = useSelector((state) => state);
    const dispatch = useDispatch();
    
    const param = useParams();
    const {projectId} = param;
    
    
    // Fetch service post initially
    useEffect(() => {
        dispatch(getProjects());
    }, [dispatch]);
     return(
            
        <section className="nant-single-page nant-main-section-padding">
            <div className="container">
                {projects?.filter( project =>project?.id == projectId)?.map( (data) =>(
                    <>
                        <h1 class="nant-section-title">{data?.title}</h1>
                        <div  className="nant-desc" dangerouslySetInnerHTML={{ __html: data?.description?.replace(/(\r\n\r\n|\n\r\n\r)/g,'<p>') }}></div>
                    </>
                ))}
                
            </div>
        </section>

    );
};
export default withRouter(ProjectDetailPage);