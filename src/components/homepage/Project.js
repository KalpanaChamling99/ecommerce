import React,{useRef,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {Carousel} from 'antd';

import {getProjects} from '../../actions/thunk/homePageThunk';
import ProjectPost from './components/Project';
import Title from '../common/Title';

const Projects = () => {
    let slider = useRef();
    const dispatch = useDispatch();
    const { homePage: { projects} } = useSelector((state) => state);
    // Fetch  project initially
    useEffect(() => {
        dispatch(getProjects());
    }, [dispatch]);
    
    const previous = () =>{
        slider.prev();
    }
    const next =() =>{
        slider.next();
    }
    const settings = {
        slidesToShow: 2,
        autoplay: true,
        responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
              }
            }
        ]
    }
   
    return(
        <section className="popular-cause-section section-padding">
            <div className="container">

                <div className="row align-items-center">
                    <div className="col-8 text-left mb-40">
                        <Title 
                            title="Projects"
                            subTitle="Project List"
                            titleClass="nant-title-green"
                        />
                    </div>
                    <div className="col-4 text-right mb-40">
                        <div className="cause-carousel-nav">
                            <button className="owl-prev" onClick={previous}><i className="fal fa-arrow-left"></i></button>
                            <button className="owl-next" onClick={next}><i className="fal fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
                <div className="nant-project-carousel mt-40">
                    <Carousel 
                        // autoplay 
                        dots={false} 
                        slidesToShow={3}
                        // {...settings}
                        ref = {carousel => (slider = carousel)}
                    >
                        {projects?.map((items)=>(
                            <ProjectPost 
                                data= {items}
                            />
                        ))}
                    </Carousel>
                </div>
            </div>
        </section>
    );
};
export default Projects;