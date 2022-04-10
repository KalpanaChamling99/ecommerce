import React,{useEffect} from 'react';
import{
    Form,
    Button,
    Input
} from 'antd';

import {useDispatch,useSelector} from 'react-redux';
import { withRouter,useHistory } from 'react-router-dom';

import Loader from '../../components/common/Loader';    
import { forgotPassword } from '../../actions/thunk/passwordThunk';
import { successForgotPassword } from '../../actions/passwordAction';

const ForgotPasswordForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { password: {isEmailSent},loader: { isLoading } } = useSelector((state) => state);
    useEffect(()=>{
        if(isEmailSent){
            dispatch(successForgotPassword());
            history.push('/login');
        }
    },[isEmailSent])
    const submitHandler = (values) =>{
        dispatch(forgotPassword({
            email: values.email
        }));
    }
    
    return(
        <>
            <div className="nant-form-layout-1">
                {!isEmailSent? 
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
                        <Input placeholder="Enter your email" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" >
                            Submit
                        </Button>
                    </Form.Item>

                </Form>

                :<div className="nant-success-msg text-center">
                    Email sent successfully
                </div>
                }
                {isLoading && <Loader />}
            </div>
        </>
    )
};
export default withRouter(ForgotPasswordForm);