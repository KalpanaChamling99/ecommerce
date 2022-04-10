import React,{useEffect} from 'react';
import{
    Form,
    Button,
    Input
} from 'antd';

import {useDispatch,useSelector} from 'react-redux';
import { useHistory,withRouter } from 'react-router-dom';

import Loader from '../../components/common/Loader';    
import { updatePassword } from '../../actions/thunk/passwordThunk';
import { successUpdatePassword } from '../../actions/passwordAction';

const UpdatePasswordForm = () =>{
    const dispatch = useDispatch();
    const history = useHistory();
    const { password: {isPasswordUpdated},loader: { isLoading } } = useSelector((state) => state);
    useEffect(()=>{
        if(isPasswordUpdated){
            dispatch(successUpdatePassword());
            history.push("/");
        }
    },[isPasswordUpdated])
    const submitHandler = (values) =>{
        dispatch(updatePassword({
            new_password:values.new_password,
            old_password:values.old_password,
            confirm_password: values.confirm_password
        }));
    }
    return(
        <>
            <Form layout="vertical" onFinish={submitHandler} className="nant-update-password-form nant-form-layout-1 nant-pos-relative">
                <Form.Item
                    name="old_password"
                    label="Old Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input old password!',
                        },
                        ]}
                        hasFeedback
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="new_password"
                    label="New Password"
                    rules={[
                    {
                        required: true,
                        message: 'Please input new password!',
                    },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="confirm_password"
                    label="Confirm Password"
                    dependencies={['new_password']}
                    hasFeedback
                    rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                        if (!value || getFieldValue('new_password') === value) {
                            return Promise.resolve();
                        }

                        return Promise.reject(new Error('The two passwords that you entered do not match!'));
                        },
                    }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Update Password</Button>
                </Form.Item>
                {isLoading && <Loader />}
            </Form>
        </>
    );
};
export default withRouter(UpdatePasswordForm);