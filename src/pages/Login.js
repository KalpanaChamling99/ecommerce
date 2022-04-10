import React, { useEffect } from "react";
import { withRouter, useHistory,Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Button } from "antd";

import { loginSuccess } from "../actions/thunk/loginThunk";
import Loader from '../components/common/Loader';
import "../assets/scss/pages/login.scss";

const Login = () => {
  const history = useHistory();

  const {
    login: { user },loader: { isLoading } 
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (Object.keys(user)?.length > 0) {
      history.push("/");
    }
  }, [history, user]);

  const submitHandler = (values) => {
    dispatch(loginSuccess({ email: values.email, password: values.password }));
  };
  return (
    <div className="login-section section-padding">
      <div className="container">
        <div className="login-wrapper">
          <h3 className="section-title">Login</h3>
          <Form onFinish={submitHandler} layout="vertical">
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  type: "email",
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" disabled ={isLoading}>
                Submit
              </Button>
            </Form.Item>
            <div className="nant-forgot-password text-center">
              <Link to="/forgot-password">Forgot Password ?</Link>
            </div>

            {isLoading && <Loader />}

          </Form>
        </div>
      </div>
    </div>
  );
};
export default withRouter(Login);
