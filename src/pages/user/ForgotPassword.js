import React from 'react';
import {withRouter} from 'react-router-dom';
import ForgotPasswordForm from '../../components/user/ForgotPasswordForm';

const ForgotPassword = () => {
   
    return(
        <>
            <div className="nant-forgot-password-section nant-section-padding nant-section-bg">
                <div className="container">
                    <ForgotPasswordForm />
                </div>
            </div>
        </>
    )

};
export default withRouter(ForgotPassword);