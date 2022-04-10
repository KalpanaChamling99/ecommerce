import React, { useState, useEffect, useRef } from "react";
import { Table, Select } from "antd";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import { getPastCommittee } from "../actions/thunk/pastCommitteeThunk";
import getColumnSearchProps from "../components/table/getCoulmnSearchProps";

const { Option } = Select;

const PastCommittee = (props) => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState(0);
  const [filteredPastCommittee, setFilteredDataSource] = useState([]);
  const [committeeCategory, setCommitteeCategory] = useState([]);
  const refSearchInput = useRef(null);

  const {
    pastCommittee: { pastCommittee, isLoading },
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  const getCommitteeCategory = (pastCommittee) => {
    return pastCommittee
      .map((ds) => ds.committee_category)
      .filter((value, index, self) => self.indexOf(value) === index)
  };

  // Fetch data
  useEffect(() => {
    dispatch(getPastCommittee());
  }, [dispatch]);

  useEffect(() => {
    if (pastCommittee.length > 0) {
      const committeeCategory = getCommitteeCategory(pastCommittee);
      setCommitteeCategory(committeeCategory);
      setFilteredDataSource(pastCommittee.filter(data => data.committee_category === "Team 2018/20"));
    }
  }, [pastCommittee]);

  function onChange(value) {
    setFilteredDataSource(pastCommittee.filter(data => data.committee_category === value));
  }

  const columns = [
    {
      title: "Executive Name",
      dataIndex: "post_designation",
      key: "post_designation",
      ...getColumnSearchProps(
        "post_designation",
        refSearchInput,
        searchText,
        setSearchText,
        searchedColumn,
        setSearchedColumn
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Team",
      dataIndex: "committee_category",
      key: "committee_category",
      hidden: true,
    },
  ].filter((item) => !item.hidden);

  return (
    <div className="test">
      <h2>Past Committee </h2>

      <Select
        showSearch
        defaultValue="Team 2018/20"
        style={{ width: 200 }}
        onChange={onChange}
        placeholder="Search to Select"
        optionFilterProp="children"
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        filterSort={(optionA, optionB) =>
          optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
        }
      >
        {committeeCategory?.map((category, index) => {
          return <Option value={category} key={index}>{category}</Option>
        })};
      </Select>

      <Table
        loading={isLoading}
        columns={columns}
        dataSource={filteredPastCommittee}
      />
    </div>
  );
};
export default PastCommittee;
