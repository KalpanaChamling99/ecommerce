import {FaAmazon,FaCcVisa,FaCcPaypal, FaStripe} from 'react-icons/fa';
const CopyRight = () => {
    return(
        <div className="footer-bottom">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12 text-center text-md-left">
                        <div className="payoment-methods-icons"> 
                            <span className="icon"><FaStripe /></span>
                            
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 text-center text-md-right">
                        <div className="copyright-info">
                            <p> &copy; <a href="#">NANT</a> Nepalese Association of Northern Territory Inc. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CopyRight;