import React from "react";
import { withRouter } from "react-router-dom";

const ContactUsPage = (props) => {
  return (
    <section className="contact-page-wrap nant-main-section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="single-contact-card card1">
              <div className="top-part">
                <div className="icon">
                  <i className="fal fa-envelope" />
                </div>
                <div className="title">
                  <h4>Email Address</h4>
                  {/* <span>Sent mail asap anytime</span> */}
                </div>
              </div>
              <div className="bottom-part">
                <div className="info">
                  <p>info@nant.org.au</p>
                  {/* <p>jobs@example.com</p> */}
                </div>
                <div className="icon">
                  <i className="fal fa-arrow-right" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="single-contact-card card2">
              <div className="top-part">
                <div className="icon">
                  <i className="fal fa-home" />
                </div>
                <div className="title">
                  <h4>BANK DETAILS</h4>
                  <span>Accounts</span>
                </div>
              </div>
              <div className="bottom-part">
                <div className="info">
                  <p>Account Name - NANT Operations</p>
                  <p>BSB - 633-000</p>
                  <p> Account Number - 177642238</p>
                  <p> Bank - Bendigo Bank Nightcliff</p>
                </div>
                <div className="icon">
                  <i className="fal fa-arrow-right" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="single-contact-card card3">
              <div className="top-part">
                <div className="icon">
                  <i className="fal fa-map-marker-alt" />
                </div>
                <div className="title">
                  <h4>Office Address</h4>
                  <span>Work</span>
                </div>
              </div>
              <div className="bottom-part">
                <div className="info">
                  <p>Nepalese Association of Northern Territory Inc.</p>
                  <p>PO Box 42091</p>
                  <p>Casuarina NT 0810</p>
                </div>
                <div className="icon">
                  <i className="fal fa-arrow-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-12">
            <div className="contact-map-wrap">
              <div id="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5457.875323165521!2d144.90402300269133!3d-37.792722838344716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sbd!4v1612018663424!5m2!1sen!2sbd"
                  style={{ border: 0, width: "100%" }}
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex={0}
                  frameBorder={0}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row section-padding pb-0">
          <div className="col-12 text-center mb-20">
            <div className="section-title">
              <span>
                <i className="fal fa-pen" />
                Write Here
              </span>
              <h1>Get In Touch</h1>
            </div>
          </div>
          <div className="col-12 col-lg-12">
            <div className="contact-form">
              <form action className="row conact-form">
                <div className="col-md-6 col-12">
                  <div className="single-personal-info">
                    <label htmlFor="fname">Full Name</label>
                    <input type="text" id="fname" placeholder="Enter Name" />
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="single-personal-info">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter Email Address"
                    />
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="single-personal-info">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="text" id="phone" placeholder="Enter Number" />
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="single-personal-info">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      placeholder="Enter Subject"
                    />
                  </div>
                </div>
                <div className="col-md-12 col-12">
                  <div className="single-personal-info">
                    <label htmlFor="subject">Enter Message</label>
                    <textarea
                      id="subject"
                      placeholder="Enter message"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-md-12 col-12 text-center">
                  <input
                    className="submit-btn"
                    type="submit"
                    defaultValue="Get A Quote"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default withRouter(ContactUsPage);
