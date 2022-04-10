import React from 'react';
import {withRouter} from 'react-router-dom';
import RegistrationForm from '../components/register/RegistrationForm';
import '../assets/scss/pages/register.scss';
const Register = (props) => {
   
    return(
        <> 
            <RegistrationForm />
        </> 
    )
};
export default withRouter(Register);