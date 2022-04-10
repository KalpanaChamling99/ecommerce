import React from "react";
import { List, Avatar } from "antd";

const OrderListView = (props) => {
  return (
    <>
      <List
        itemLayout="horizontal"
        dataSource={props.dataFromParent}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar size={70} src={item.image} />}
              title={item.product_title}
              description={"Price: $" + item.price}
            />
            <List.Item.Meta
              title={`qty: ${item.quantity}`}
              description={`Amount: $${item.quantity * item.price}`}
            />
          </List.Item>
        )}
      />
    </>
  );
};

export default OrderListView;
