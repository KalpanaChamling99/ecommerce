import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTeams } from "../actions/thunk/aboutUsPageThunk";

const TeamPage = (props) => {
  const {
    teams: { teams },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  // Fetch data
  useEffect(() => {
    dispatch(getTeams());
  }, [dispatch]);

  return (
    <section className="team-section section-padding">
      <div className="container">
        <div className="row">
          {teams?.map((data) => (
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-team-member text-center">
                <div className="member-img">
                  <img src={data?.image} alt="" />
                  <div className="small-element" />
                </div>
                <div className="">
                  <h2>{data?.name}</h2>
                  <span>{data?.designation}</span>
                </div>
              </div>
            </div>
          )
          )}
        </div>
        {/* <div className="join-team-btn text-center mt-50">
          <a href="contact.html">Join With Us</a>
        </div> */}
      </div>
    </section>
  );
};
export default withRouter(TeamPage);
