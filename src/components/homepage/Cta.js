import {FaHeart} from 'react-icons/fa';
const Donate = () => {
    return(
        <section className="donate-now-section text-white section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-12 text-center">
                        <div className="section-title">
                            <span><span className="icon"><FaHeart /></span>Make Donation</span>
                            <h1>Miranda Halim Charity Fund</h1>
                        </div>
                    </div>
                    <div className="col-xl-12 mt-3 mt-md-5 text-center">
                        <div className="give-donate-form-wrap mt-4 mt-xl-0">
                            <form action="#" className="row">
                                <div className="col-12"> 
                                    <button type="button" data-price-id="0" className="give-donation-level-btn give-btn" value="5" data-default="0"> $5 </button>
                                    <button type="button" data-price-id="0" className="give-donation-level-btn give-btn" value="10" data-default="0"> $10 </button> 
                                    <button type="button" data-price-id="0" className="give-donation-level-btn give-btn" value="100" data-default="0"> $100</button> 
                                    <button type="button" data-price-id="custom" className="give-donation-level-btn give-btn give-btn-level-custom" value="custom">Custom </button>
                                </div>
                                <div className="col-12"> 
                                    <button type="button" className="give-btn give-btn-modal theme-btn mt-3"> <span className="icon"><FaHeart /></span>Donate Now </button> 
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
};
export default Donate;