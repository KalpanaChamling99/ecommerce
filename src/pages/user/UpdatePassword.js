import React from 'react';
import {withRouter} from 'react-router-dom';
import UpdatePasswordForm from '../../components/user/UpdatePasswordForm';

import '../../assets/scss/pages/password.scss';

const UpdatePassword = (props) => {
    return (
        <>
            <div className="nant-update-password-section nant-section-padding nant-section-bg">
                <div className="container">
                    <UpdatePasswordForm />
                </div>
            </div>
        </>
    );
};

export default withRouter(UpdatePassword);