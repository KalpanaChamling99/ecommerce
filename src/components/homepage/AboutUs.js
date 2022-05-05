import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getServices } from "../../actions/thunk/homePageThunk";
import AboutPost from "./components/Aboutus";
import DummyImage1 from "../../assets/images/about1.jpg";
import DummyImage2 from "../../assets/images/about2.jpg";
import Loader from "../common/Loader";

const AboutUs = () => {
  const {
    homePage: { services },
    loader: { isLoading },
  } = useSelector((state) => state);
  const [aboutDetails, setAboutDetails] = useState([]);
  const [serviceDetails, setServiceDetails] = useState([]);
  const [historyDetails, setHistoryDetails] = useState({});
  const dispatch = useDispatch();
  
  // Fetch service post initially
  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);

  useEffect(() => {
    let about = services?.filter((post) =>
      `${post?.page_name}`.toLowerCase().includes("about")
    );
    let history = services?.find((post) =>
      `${post?.page_name}`.toLowerCase().includes("history")
    );
    let service = services?.filter(
      (post) => !`${post?.page_name}`.toLowerCase().includes("about")
    );
    setAboutDetails(about);
    setServiceDetails(service);
    setHistoryDetails(history);
  }, [services]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
            <section className="promo-section promo-flex-wrap">
                <div className="container wow fadeInUp">
                    <div className="row">
                        {serviceDetails?.map((item) => (
                        <div className="col-lg-6 pr-lg-0 col-12" key={item.id}>
                            <AboutPost
                            data ={item}
                            />
                        </div>
                        ))}
                    </div>
                </div>
            </section>
          
      )}
    </>
  );
};

export default AboutUs;
