import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Select, Pagination } from "antd";

import { getEvents } from "../../actions/thunk/homePageThunk";
import { getEventsCategory } from "../../actions/thunk/eventsCategoryThunk";
import Event from "../../components/event/Event";
import Loader from "../../components/common/Loader";

const { Option } = Select;
const pageSize = 10; // As per API.

const EventPage = () => {
  const dispatch = useDispatch();

  const [current, setCurrent] = useState(1);
  const [minIndex, setMinIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const [totalEvents, setTotalEvents] = useState(0);

  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const {
    homePage: {
      events: { data = [], total },
    },
    eventCategory: { eventsCategory },
    loader: { isLoading },
  } = useSelector((state) => state);

  // Fetch events post initially
  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  useEffect(() => {
    setFilteredEvents(data);
    setTotalEvents(total);
    setMaxIndex(pageSize);
  }, [data, total]);

  useEffect(() => {
    dispatch(getEventsCategory());
  }, [dispatch]);

  const filterChangehandler = (eventCategory) => {
    setSelectedCategory(eventCategory);
    setCurrent(1);

    if (eventCategory === "All") {
      dispatch(getEvents());
      setTotalEvents(total);
    } else {
      dispatch(getEvents(`category=${eventCategory}`));
      setTotalEvents(total);
    }
  };

  const paginationHandler = (page) => {
    dispatch(getEvents(`page=${page}`));
    setCurrent(page);
  };

  return (
    <section className="upcoming-events-wrap nant-main-section-padding">
      <div className="container">
        <div className="filter">
          {isLoading ? (
            <Loader />
          ) : (
            <Select
              defaultValue="All"
              value={selectedCategory}
              placeholder="Select category"
              optionFilterProp="children"
              onChange={filterChangehandler}
              style={{ width: 200 }}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="All">All</Option>
              {eventsCategory?.map((items, index) => (
                <Option value={items.id} key={index}>
                  {items.name}
                </Option>
              ))}
            </Select>
          )}
        </div>
        <div className="events-list">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {filteredEvents.map(
                (items, index) =>
                  index >= minIndex &&
                  index < maxIndex && (
                    <Event
                      key={items.id}
                      id={items.id}
                      title={items.title}
                      date={items.date}
                      description={items.description}
                      location={items.location}
                      bgImage={items.image}
                      email={items.email}
                    />
                  )
              )}
              <div className="text-center pt-30">
                <Pagination
                  pageSize={pageSize}
                  current={current}
                  total={totalEvents}
                  onChange={paginationHandler}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
export default withRouter(EventPage);
