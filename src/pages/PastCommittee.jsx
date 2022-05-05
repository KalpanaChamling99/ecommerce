import React, { useState, useEffect } from "react";
import { Select, Pagination } from "antd";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getPastCommittee,
  getPastCommitteeCategory,
} from "../actions/thunk/pastCommitteeThunk";
import Loader from "../components/common/Loader";

const { Option } = Select;

const PastCommittee = (props) => {
  const [filteredPastCommittee, setFilteredPastCommittee] = useState([]);
  const [open, setOpen] = useState("");
  const [current, setCurrent] = useState(1);
  const [totalPastCommittee, setTotalPastCommittee] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("Team 2018/20");

  const {
    pastCommittee: {
      pastCommittee: { data: pastCommitteeData = [], total },
      pastCommitteeCategory = [],
      isLoading,
    },
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  // Fetch data
  useEffect(() => {
    dispatch(getPastCommittee());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getPastCommitteeCategory());
  }, [dispatch]);

  useEffect(() => {
    setFilteredPastCommittee(pastCommitteeData);
    setTotalPastCommittee(total);
  }, [pastCommitteeData, total]);

  function onChange(value) {
    setSelectedCategory(value);
    setCurrent(1);
    setOpen(false);

    dispatch(getPastCommittee(`category=${value}`));
    totalPastCommittee(total);
  }

  const paginationHandler = (page) => {
    dispatch(getPastCommittee(`page=${page}`));
    setCurrent(page);
  };

  return (
    <div className="section-padding">
      <section className="team-section section-padding">
        <div className="container">
          <h2>Past Committee </h2>

          <Select
            showSearch
            defaultValue="Team 2018/20"
            value={selectedCategory}
            style={{ width: 200 }}
            open={open}
            onChange={onChange}
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            filterSort={(optionA, optionB) =>
              optionA.children
                .toLowerCase()
                .localeCompare(optionB.children.toLowerCase())
            }
            onFocus={() => setOpen(true)}
            onBlur={() => setOpen(false)}
            onSearch={() => setOpen(true)}
          >
            {pastCommitteeCategory?.map((category, index) => {
              return (
                <Option value={category?.id} key={index}>
                  {category?.name}
                </Option>
              );
            })}
            ;
          </Select>
          <div className="row">
            {isLoading ? (
              <Loader />
            ) : (
              <>
                {filteredPastCommittee?.map((data) => (
                  <div className="col-lg-3 col-md-6 col-12">
                    <div className="single-team-member text-center">
                      <div className="member-img">
                        <img src={data?.image} alt="" />
                        <div className="small-element" />
                      </div>
                      <div className="">
                        <h2>{data?.name}</h2>
                        <span>{data?.post_designation}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>

          <div className="text-center pt-30">
            <Pagination
              pageSize={10}
              current={current}
              total={totalPastCommittee}
              onChange={paginationHandler}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
export default PastCommittee;
