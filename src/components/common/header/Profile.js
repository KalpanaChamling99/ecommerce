import React,{useEffect} from 'react';
import {Link,useHistory} from 'react-router-dom';
import { useSelector,useDispatch} from "react-redux";

import {logout} from './../../../actions/loginAuthAction';
import {checkIfTokenHasExpired} from './../../../utils';

const Profile = () =>{
    const { login: {user}} = useSelector((state)=>state);
    const history = useHistory();
    const dispatch = useDispatch();
    const logoutHandler = () => {
        localStorage.removeItem("token");
        dispatch(logout());
        history.push("/");
    }
    // useEffect(() =>{
    //     if(checkIfTokenHasExpired()){
    //         logoutHandler();
    //     }
    // },[]);

    return(
        <ul className="nant-profile-menu">
            <li> {user.title} {user.first_name}
                <ul className="nant-sub-menu">
                    <li><Link to="/order-history">My order</Link></li>
                    <li><Link to="/" onClick={logoutHandler}>Logout</Link></li>
                </ul>
            </li>
        </ul>
    );
};
export default Profile;