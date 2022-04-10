import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "antd";
import { getOrderHistory } from "../actions/thunk/orderHistoryThunk";
import OrderListView from "../components/order/OrderListView";
import useDataTable from "../components/table/dataTable";

const OrderHistory = () => {
  const {
    orderHistory: { orderHistory },
    loader: { isLoading },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [isVisible, setIsVisible] = useState(false);
  const [modalData, setModalData] = useState();

  const handleOk = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsVisible(false);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsVisible(false);
  };

  const showModal = (e, data) => {
    e.preventDefault();
    e.stopPropagation();
    setModalData(data);
    setIsVisible(true);
  };

  const columns = [
    {
      title: "Order ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Order Date",
      dataIndex: "order_date",
      key: "order_date",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "4",
      render: (_, record) => {
        return (
          <>
            <Button
              type="primary"
              onClick={(e) => showModal(e, record.product_details)}
              style={{ background: "#1a004a", borderColor: "yellow" }}
            >
              View Product
            </Button>
          </>
        );
      },
    },
  ];

  // Fetch order history initially
  useEffect(() => {
    dispatch(getOrderHistory());
  }, [dispatch]);
  const { DataTable } =
    useDataTable({
      columns: columns,
      dataSource: orderHistory,
      loading: isLoading
    });

  return (
    <div className="nant-order-history-list">
      <div className="container">
        <DataTable />
        <Modal
          title="Product List"
          visible={isVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <OrderListView dataFromParent={modalData} />
        </Modal>
      </div>
    </div>
  );
};

export default withRouter(OrderHistory);
