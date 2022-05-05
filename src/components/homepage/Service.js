import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getServices } from "../../actions/thunk/homePageThunk";
import ServicePost from "./components/Services";
import Loader from "../common/Loader";

const Service = () => {
  const {
    homePage: { services },
    loader: { isLoading },
  } = useSelector((state) => state);
  const [aboutDetails, setAboutDetails] = useState([]);
  const [historyDetails, setHistoryDetails] = useState({});
  const [whyNantDetails, setWhyNantDetails] = useState([]);
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
    let whyNant = services?.filter((post) => 
        `${post?.page_name}`.toLowerCase().includes("why nant")
    );
    setAboutDetails(about);
    setHistoryDetails(history);
    setWhyNantDetails(whyNant);
  }, [services]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <section className="nant-service-section about-us-section about-us-two section-padding">
            <div className="container">
                <div className="nant-service-list">
                    {aboutDetails?.map((item) => (
                        <ServicePost 
                            data={item}
                            historyId= {historyDetails?.id}
                        />
                    ))}
                    {whyNantDetails?.map((item) => (
                        <ServicePost 
                            data={item}
                        />
                    ))}
                </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Service;
