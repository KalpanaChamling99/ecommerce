import {Link} from 'react-router-dom';
import {FaHeart,FaCheck} from 'react-icons/fa';

import DummyImage1 from '../../assets/images/about1.jpg';
import DummyImage2 from '../../assets/images/about2.jpg';


const AboutUs = () => {
    return(
        <section className="about-us-section about-us-two section-padding">
            {/* <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about-shots d-flex justify-content-between-- align-center">
                            <div className="about-img mr-3"> 
                                <img src={DummyImage1} alt="" className="img-fluid" />
                            </div>
                            <div className="about-img"> 
                                <img src={DummyImage2} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 about_left_content mt-0 pl-lg-5 pr-lg-5">
                        <div className="section-title">
                            <span><span className="icon"><FaHeart /></span>About Us</span>
                            <h1>We’ve Funded <span>44k</span> Dollars Over</h1>
                        </div>
                        <p> Your $40.00 monthly donation can give 12 people clean water every year. 100% funds water
                            projects. Pick your hand to help for them. </p>
                        <ul className="checked-list mt-30">
                            <li>A place in history</li>
                            <li>It’s about impact, goodness</li>
                        </ul>
                        <Link to="#" className="theme-btn minimal-btn mt-35">Learn More</Link>
                    </div>
                </div>
            </div> */}
        </section>
    );
};

export default AboutUs;