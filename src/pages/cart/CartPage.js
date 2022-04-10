import React, { useState, useEffect } from "react";
import { withRouter, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Form, DatePicker, Button, Input } from "antd";

import { checkout } from "../../actions/checkoutAction";
import CartItem from "../../components/cart/CartItem";
import "../../assets/scss/pages/cart.scss";
import { getFormattedOrderedProducts } from "../../utils/productHelper";
import { orderProduct } from "../../actions/thunk/orderPostThunk";
import { clearOrderProduct } from "../../actions/orderProductAction";
import Loader from "../../components/common/Loader";
import {isLoggedIn} from '../../utils';

const CartPage = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isCartEmpty, setIsCartEmpty] = useState(true);
  const {
    cart: { items, totalAmount },
    loader: { isLoading },
    orderProduct: { productInfo },
  } = useSelector((state) => state);

  const CartItemsList = items?.map((items) => (
    <CartItem
      item_name={items.item_name}
      description={items.description}
      date={items.created_at}
      price={items.price}
      image={items.image}
      subTotal={items.totalPrice}
      id={items.id}
      key={items.key}
    />
  ));

  useEffect(() => {
    if (items?.length > 0) {
      setIsCartEmpty(false);
    }
  }, [items?.length]);

  useEffect(() => {
    if (productInfo) {
      dispatch(clearOrderProduct());
      history.push("/order-history");
    }
  }, [productInfo, history, dispatch]);

  let from_date,to_date;
  const submitHandler = (values) => {
    const { note, start, end ,full_name,email } = values;
    if(isLoggedIn()){
      from_date = start.format("YYYY-MM-DD");
       to_date = end.format("YYYY-MM-DD");
    }
    // const from_date = start.format("YYYY-MM-DD");
    // const to_date = end.format("YYYY-MM-DD");

    if (!totalAmount) {
      const payload = {
        amount: null,
        products: getFormattedOrderedProducts(items),
        payment_method_id: null,
        note,
        to_date,
        from_date,
        full_name,
        email
      };
      dispatch(orderProduct(payload));
    } else {
      if(isLoggedIn()){
        dispatch(checkout({ note, from_date, to_date }));
      }else{
        dispatch(checkout({ note,full_name,email }));
      }
      history.push("/checkout");
    }
  };

  return (
    <div className="nant-cart-items-list">
      <div className="container">
        <div className="row">
          <div className="col col-md-8">
            <table className="cart-table">
              <tr>
                <th>Product</th>
                <th>Image</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Sub Total</th>
                <th>Action</th>
              </tr>
              {CartItemsList}
              {!isCartEmpty && <tr>total: ${totalAmount}</tr>}
            </table>
            {isCartEmpty && <h3 className="text-center">cart is empty</h3>}
          </div>
          {!isCartEmpty && (
            <div className="col col-md-4">
              <div className="proceed-to-checkout">
                
                  <Form onFinish={submitHandler} layout="vertical">
                    <Form.Item name="note" label="Note">
                      <Input.TextArea maxLength={100} />
                    </Form.Item>
                    {isLoggedIn() ?
                      <>
                      <Form.Item
                        label="Start Date"
                        name="start"
                        rules={[
                          {
                            required: true,
                            message: "Please select Date!",
                          },
                        ]}
                      >
                        <DatePicker />
                      </Form.Item>

                      <Form.Item
                        label="End Date"
                        name="end"
                        rules={[
                          {
                            required: true,
                            message: "Please select Date!",
                          },
                        ]}
                      >
                        <DatePicker />
                      </Form.Item>
                      </>:
                      <>
                        <Form.Item 
                            label="Full Name"
                            name = "full_name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter your name!',
                                },
                            ]}
                        >
                            <Input placeholder="Enter Full Name"/>
                        </Form.Item>

                        <Form.Item
                          label="Email"
                          name="email"
                          rules={[
                              {
                                  type: "email",
                                  message: "The entered email is invalid"
                              },
                              {
                                  required: true,
                                  message: "Please input your email!",
                              },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </>
                    }
                    <div className="pris-btn-section">
                      <Form.Item>
                        <Button type="primary" htmlType="submit" disabled={isLoading}>
                          Checkout
                        </Button>
                      </Form.Item>
                    </div>
                    {isLoading && <Loader />}
                  </Form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default withRouter(CartPage);
