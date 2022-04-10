import {Link} from 'react-router-dom';
import {FaCalendarAlt} from 'react-icons/fa';
import DummyImage1 from '../../../assets/images/about1.jpg';

const FooterWidget = () => {
    return(
        // <div className="footer-widgets section-bg pt-80 pb-115">
        <div className="footer-widgets section-bg pt-80">
            <div className="container">
                <div className="row">
                    {/* <div className="col-xl-4 col-md-6 col-12">
                        <div className="single-footer-wid">
                            <div className="wid-title">
                                <h4>About Us</h4>
                            </div>
                            <div className="special-menu">
                                <ul>
                                    <li><Link to="about.html">about</Link></li>
                                    <li><Link to="faq.html">faq</Link></li>
                                    <li><Link to="events.html">events</Link></li>
                                    <li><Link to="event-details.html">event details</Link></li>
                                    <li><Link to="team.html">Team</Link></li>
                                    <li><Link to="contact.html">Contact Us</Link></li>
                                    <li><Link to="news.html">News</Link></li>
                                </ul>
                            </div>
                            <div className="special-menu">
                                <ul>
                                    <li><Link to="causes.html">Causes List</Link></li>
                                    <li><Link to="events.html">Events</Link></li>
                                    <li><Link to="donation.html">donation</Link></li>
                                    <li><Link to="team.html">Careers</Link></li>
                                    <li><Link to="contact.html">Get A Quote</Link></li>
                                    <li><Link to="faq.html">Terms & Conditions</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div> */}
                    {/* ./single-footer-wid  */}
                
                    {/* <div className="col-xl-4 col-md-6 col-12 pl-xl-5">
                        <div className="single-footer-wid">
                            <div className="wid-title">
                                <h4>Popular Causes</h4>
                            </div>
                            <ul>
                                <li><Link to="causes.html">Water Purify</Link></li>
                                <li><Link to="causes.html">Food Collect</Link></li>
                                <li><Link to="causes.html">Health Fund</Link></li>
                                <li><Link to="causes.html">Free Education</Link></li>
                                <li><Link to="causes.html">Poor Health</Link></li>
                                <li><Link to="causes.html">Live Donation</Link></li>
                                <li><Link to="causes.html">Stream Donation</Link></li>
                            </ul>
                        </div>
                    </div> */}
                    {/* ./single-footer-wid  */}
           
                    {/* <div className="col-xl-4 col-md-6 col-12">
                        <div className="single-footer-wid recent-post-wid">
                            <div className="wid-title">
                                <h4>News Feeds</h4>
                            </div>
                            <div className="recent-post-list">
                                <div className="single-recent-post">
                                    <div className="thumb bg-cover" style={{backgroundImage:`url(${DummyImage1})`}}></div>
                                    <div className="post-data">
                                        <span><span className="icon"><FaCalendarAlt /></span>24th November 2020</span>
                                        <h5> <Link to="#">Everyone Deserves 100% Clean Water</Link> </h5>
                                    </div>
                                </div>
                                <div className="single-recent-post">
                                    <div className="thumb bg-cover" style={{backgroundImage:`url(${DummyImage1})`}}></div>
                                    <div className="post-data">
                                        <span><span className="icon"><FaCalendarAlt /></span>25th November 2020</span>
                                        <h5> <Link to="#">Lorem ipsum dolor sit amet, nsectetur </Link>
                                        </h5>
                                    </div>
                                </div>
                                <div className="single-recent-post">
                                    <div className="thumb bg-cover" style={{backgroundImage:`url(${DummyImage1})`}}></div>
                                    <div className="post-data">
                                        <span><span className="icon"><FaCalendarAlt /></span>28th November 2020</span>
                                        <h5> <Link to="#">A true story about great two sisters</Link> </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* ./single-footer-wid  */}
                </div>
            </div>
        </div>
    );
};

export default FooterWidget;