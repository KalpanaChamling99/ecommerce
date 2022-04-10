import React,{useEffect,useState, useRef} from 'react';
import {
    Form,
    Input,
    Select,
    Button,
} from 'antd';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from "react-redux";
import {useHistory} from 'react-router-dom';

import { Elements} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import config from'../../config';
import { getMembership} from '../../actions/thunk/registerPageThunk';
import MembershipPayment from './MembershipPayment';
import { loadScript, handleScriptLoad } from '../../utils/googleMapsApi';
import {register} from '../../actions/thunk/registerPageThunk';

const { Option } = Select;

const { STRIPE: { PUBLIC_KEY }, GOOGLE: { GOOGLE_API_KEY } } = config;

const stripePromise = loadStripe(PUBLIC_KEY);


const RegistrationForm = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [query,setQuery] = useState("");
    const [suburb, setSuburb] = useState("");
    const [city, setCity] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const autoCompleteRef = useRef(null);

    const [memberInfo,setMemberInfo] = useState({});
    const [membershipAmount,setMembershipAmount] = useState();
    const [buttonTypePayment,setButtonTypePayment] = useState(true);
    const [isRegistrationFormVisible,setIsRegistrationFormVisible] = useState(true);
    const [isMembershipPaymentFormVisible,setIsMembershipPaymentFormVisible] = useState(false);

    const { registration: {isRegistered,membership} } = useSelector( (state) => state);


    useEffect(() => {
        dispatch(getMembership());
    }, [dispatch]);

    if(isRegistered){
        history.push('/login');
    }

    useEffect(() => {
        loadScript(
          `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places`,
          () => handleScriptLoad(setQuery, setCity, setSuburb, setPostalCode, autoCompleteRef)
        );
      }, []);


    
    const handleMembershipType = (values)=>{
        const membershipId = membership.find( item => item.id == values);
        const amount = membershipId.amount;
       
        setMembershipAmount(amount);

        if(amount == 0){
            setButtonTypePayment(false);
        }
    } 
   
    const submitHandler = (values) => {

        const memberInfo = {
            ...values,
            photo: "",
            roles: "2",
            current_address: query,
            suburb,
            city,
            postal_code: postalCode,
        }
        setMemberInfo(memberInfo);

        if( membershipAmount == 0){
            dispatch(register({...memberInfo,payment_method_id: '',amount: 0}));
            if(isRegistered){
                history.push('/login');
                setIsRegistrationFormVisible(false)
            }else{
                setIsRegistrationFormVisible(true);
            }
        }else{
            setIsRegistrationFormVisible(false);
            setIsMembershipPaymentFormVisible(true);
        }
    }
    return(
        <>
        {isRegistrationFormVisible  && 
            <div className="nant-register-section">
                <div className="container">
                    <div className="nant-wrapper">
                        <h3 className="section-title">Please Fill in your details securely below</h3>
                        <p>For any Membership Related Inquiries, please send us a message from Contact Page or
                            alternatively send us an email at info@nant.org.au .</p>
            
                        <div className="nant-form-section">
                            <Form layout="vertical" onFinish={submitHandler} >
                                <div className="nant-personal-details">
                                    <h3 className="input-field-section-title">Personal Details</h3>
                                    <div className="row">
                                    
                                        <div className="col col-md-3">
                                            <Form.Item 
                                                name="title" 
                                                label="Title" 
                                                rules={[
                                                    { required: true }
                                                ]}
                                            >
                                                <Select>
                                                    <Option value="Mr">Mr.</Option>
                                                    <Option value="Ms">Ms.</Option>
                                                    <Option value="Mrs">Mrs.</Option>
                                                </Select>
                                            </Form.Item>
                                        </div>

                                        <div className="col col-md-3">
                                            <Form.Item
                                                label="First name"
                                                name="first_name"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please enter your name!',
                                                    },
                                                ]}
                                            >
                                                <Input placeholder="Enter your first name"/>
                                            </Form.Item>
                                        </div>

                                        <div className="col col-md-3">
                                            <Form.Item
                                                label="Middle name"
                                                name="middle_name"
                                            >
                                                <Input placeholder="Enter your middle name"/>
                                            </Form.Item>
                                        </div>

                                        <div className="col col-md-3">
                                            <Form.Item
                                                label="Last name"
                                                name="last_name"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please enter your last name!',
                                                    },
                                                ]}
                                            >
                                                <Input placeholder="Enter your Last name"/>
                                            </Form.Item>
                                        </div>
                                        

                                        <div className="col col-md-4">
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
                                        </div>
                                        <div className="col col-md-4">
                                            <Form.Item
                                                name="password"
                                                label="Password"
                                                rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your password!',
                                                },
                                                ]}
                                                hasFeedback
                                            >
                                                <Input.Password />
                                            </Form.Item>
                                        </div>

                                        <div className="col col-md-4">
                                            <Form.Item
                                                name="password_confirmation"
                                                label="Confirm Password"
                                                dependencies={['password']}
                                                hasFeedback
                                                rules={[
                                                {
                                                    required: true,
                                                    message: 'Please confirm your password!',
                                                },
                                                ({ getFieldValue }) => ({
                                                    validator(_, value) {
                                                    if (!value || getFieldValue('password') === value) {
                                                        return Promise.resolve();
                                                    }

                                                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                                    },
                                                }),
                                                ]}
                                            >
                                                <Input.Password />
                                            </Form.Item>
                                        </div>

                                        <div className="col col-md-4">
                                            <Form.Item
                                                label="Phone Number"
                                                name="phone_number"
                                                rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your phone number!',
                                                },
                                                ]}
                                            >
                                                <Input placeholder="0987654321"/>
                                            </Form.Item>
                                        </div>
                                        
                                        <div className="col col-md-4">
                                            <Form.Item 
                                                name="gender" 
                                                label="Gender" 
                                                rules={[
                                                    { required: true }
                                                ]}
                                            >
                                                <Select>
                                                    <Option value="male">Male</Option>
                                                    <Option value="female">Female</Option>
                                                    <Option value="LGBRQI+">LGBRQI+</Option>
                                                    <Option value="prefer not to answer">Prefer Not to Answer</Option>
                                                </Select>
                                            </Form.Item>
                                        </div>

                                        <div className="col col-md-4">
                                            <Form.Item 
                                                name="age_group" 
                                                label="Age Group" 
                                                rules={[
                                                    { required: true }
                                                ]}
                                            >
                                                <Select>
                                                    <Option value="18-24">(18 - 24) Years</Option>
                                                    <Option value="25-35">(25 - 35) Years</Option>
                                                    <Option value="36-45">(36 - 45) Years</Option>
                                                    <Option value="46-55">(46 - 55) Years</Option>
                                                    <Option value="55+">(55+) Years</Option>
                                                </Select>
                                            </Form.Item>
                                        </div>
                        
                                    </div>
                                </div>

                                <div className="nant-residential-details">
                                    <h3 className="input-field-section-title">Current Residential Details</h3>
                                    <div className="row">
                                
                                        <div className="col col-12">
                                            <TextField
                                                inputRef={autoCompleteRef}
                                                required
                                                id="outlined-required"
                                                size="small"
                                                label="Select Location"
                                                value={query}
                                                margin="normal"
                                                onChange={event => setQuery(event.target.value)}
                                            />
                                        </div>
                                
                                        <div className="col col-md-4">
                                            <TextField
                                                required
                                                id="outlined-required"
                                                size="small"
                                                label="Suburb"
                                                value={suburb}
                                                onChange={event => setSuburb(event.target.value)}
                                            />
                                        </div>
                                
                                        <div className="col col-md-4">
                                            <TextField
                                                required
                                                id="outlined-required"
                                                size="small"
                                                label="City"
                                                value={city}
                                                onChange={event => setCity(event.target.value)}
                                            />
                                        </div>
                                
                                        <div className="col col-md-4">
                                            <TextField
                                                required
                                                id="outlined-required"
                                                size="small"
                                                label="Postal Code"
                                                value={postalCode}
                                                onChange={event => setPostalCode(event.target.value)}
                                            />
                                        </div>
                            
                                    </div>
                                </div>

                                <div className="nant-overseas-residential">
                                <h3 className="input-field-section-title">Overseas Residential Details</h3>
                                    <Form.Item
                                        name="overseas_address"
                                        label="Overseas Address(District)"
                                    >   
                                        <Input placeholder="Eg: Chitwan" />

                                    </Form.Item>
                            
                                    <Form.Item 
                                        name="membership_type" 
                                        label="Membership Type"
                                        rules={[
                                            { 
                                                required: true,
                                                message: "select membership" 
                                            }

                                        ]}
                                    > 
                                        <Select onSelect={(value,event)=>handleMembershipType(value,event)} >
                                            {membership?.map( (data)=>(
                                                <Option value={data.id} id={data.id} name={data.name}>{data.title} (${data.amount})</Option>
                                            ))} 
                                        </Select> 
                                    </Form.Item>
                                </div>

                                <div className="nant-btn-section">
                                    <Form.Item>
                                       
                                        <Button type="primary" htmlType="submit">
                                            {buttonTypePayment ? <>Proceed to payment </>: <>Register</> }
                                        </Button>
                                    </Form.Item>
                                </div>

                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        }
        {isMembershipPaymentFormVisible &&
            <div className="nant-membership-payment-section nant-checkout-form-section">
                <div className="container">
                    <Elements stripe={stripePromise}>
                        <MembershipPayment memberInfo={memberInfo} />
                    </Elements>
                </div>
            </div>
        }
       </>
    )
}
export default RegistrationForm;