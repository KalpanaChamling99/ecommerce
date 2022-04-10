import React, { useEffect, useState } from "react";
import {Input,Space } from 'antd';
import useDataTable from "../../components/table/dataTable";

const columns = [
  {
    title: "Membership Id",
    dataIndex: "member_key",
    key: "1",
  },
  {
    title: "Name",
    dataIndex: "full_name",
    key: "2",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "3",
  },
  {
    title: "Member Types",
    dataIndex: "member_type",
    key: "4",
  },
];

const { Search } = Input;

function MemberList() {
  const [dataSource, setDataSource] = useState([]);
  const [totalMember, setTotalMember] = useState("");
  const [loading, setLoading] = useState(false);

  const [searchedMemberList,setSearchedMemberList] = useState([]);
  const [hasSearchedMember,setHasSearchedMember] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://nant.azurewebsites.net/api/v1/members")
      .then((response) => response.json())
      .then((result) => {
        let Data = result.data;
        let total_num = result.total_no_of_member;
        setTotalMember(total_num);
        setDataSource(Data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(()=>{
    if(dataSource.length > 0){
      setSearchedMemberList(dataSource);
    }
},[dataSource]);
  

  const { DataTable, hasSelected, currentPage, pageSize, resetPagination } =
    useDataTable({
      columns: columns,
      dataSource: searchedMemberList,
      loading: loading,
  });

  const searchHandler = (enteredValue) => {
    if( enteredValue){
        const searchedMember = dataSource.filter( item => (`${item?.first_name} ${item?.last_name}`)?.toLowerCase().includes(enteredValue?.toLowerCase()));
        setSearchedMemberList(searchedMember);
        if(searchedMember.length === 0){
          setHasSearchedMember(false);
        }
    }else{
      setSearchedMemberList(dataSource);
      setHasSearchedMember(true);
    }
};

  return (
    <>
      <div className="nant-memberlist-section">
        <div className="container">
          <div className="nant-memberlist-search-field">
              <div className="row">
                  <div className="col col-12 col-sm-6">
                    <h3>Total Number Of Members : {totalMember}</h3>
                  </div>
                  <div className="col col-12 col-sm-6">
                    <div className="nant-search-field text-right">
                      <Space direction="vertical">
                          <Search
                              placeholder="Enter name"
                              enterButton="Search"
                              size="large"
                              allowClear
                              onSearch={searchHandler}
                          />
                      </Space>
                    </div>
                  </div>
              </div>
          </div>
        
          {hasSearchedMember ?
            <DataTable />
            :
          <h2 className="text-center no-result">No members are found with this name.</h2>
          }
        </div>
      </div>
    </>
  );
}

export default MemberList;
