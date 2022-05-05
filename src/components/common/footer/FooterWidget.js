import {Link} from 'react-router-dom';
import { isLoggedIn } from "../../../utils";

const FooterWidget = () => {
    return(
        // <div className="footer-widgets section-bg pt-80 pb-115">
        <div className="footer-widgets section-bg pt-80 pb-80">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-md-6 col-12">
                        <div className="single-footer-wid">
                            <div className="wid-title">
                                <h4>PAGES</h4>
                            </div>
                            <ul>
                                <li><Link to="/teams">Our Team</Link></li>
                                {!isLoggedIn() &&
                                    <li>
                                        <Link to="/register">Become a Member</Link>
                                    </li>
                                }
                                <li><Link to="/member-list">Member List</Link></li>
                                <li><Link to="/important-document">Important Documents</Link></li>
                            </ul>
                        </div>
                    </div>
                    {/* ./single-footer-wid  */}
                    <div className="col-xl-4 col-md-6 col-12">
                        <div className="single-footer-wid">
                            <div className="wid-title">
                                <h4>IMPORTATNT LINKS</h4>
                            </div>
                            <ul>
                                <li><Link to={{pathname:'https://www.darwinheartsfc.com.au/'}} target="_blank" rel="noopener noreferrer">Darwin Hearts FC</Link></li>
                                <li><Link to={{pathname:'https://www.mcnt.org.au/'}}  target="_blank" rel="noopener noreferrer">Multicultural Council NT</Link></li>
                                <li><Link to={{pathname:'https://www.nrn.org.au/'}}  target="_blank" rel="noopener noreferrer">NRNA Australia</Link></li>
                                <li><Link to={{pathname:'https://au.nepalembassy.gov.np/'}}  target="_blank" rel="noopener noreferrer">Embassy of Nepal – Canberra</Link></li>
                            </ul>
                        </div>
                    </div>
                
                    {/* ./single-footer-wid  */}
                    <div className="col-xl-4 col-md-6 col-12">
                        <div className="single-footer-wid">
                            <div className="wid-title">
                                <h4>CONTACT US</h4>
                            </div>
                            <ul>
                                <li className="mb-15">Nepalese Association of Northern Territory Inc.</li>
                                <li className="mb-15">P.O Box. No 42091</li>
                                <li className="mb-15">Casuarina NT 0810</li>
                                <li className="mb-15">Email:info@nant.org.au</li>
                                <li><Link to="/contact-us">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                
                    {/* ./single-footer-wid  */}
                   
                </div>
            </div>
        </div>
    );
};

export default FooterWidget;