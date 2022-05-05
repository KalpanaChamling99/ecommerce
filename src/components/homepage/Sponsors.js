import React, {  useEffect,useState } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {getSupporters} from '../../actions/thunk/homePageThunk';
import MapImage from './../../assets/images/map.png';
import Title from '../common/Title';


const Sponsors = () => {
    const { homePage: { supporters } } = useSelector((state) => state);
    const [categoryList,setCategoryList] = useState([]);
    const dispatch = useDispatch();
    
    // Fetch Sponsors initially
    useEffect(() => {
        dispatch(getSupporters());
    }, [dispatch]);

    useEffect(()=>{
        let category = supporters?.map(item => item.subscription_category);
        setCategoryList(category?.filter((item,i)=>category.indexOf(item)=== i));
    },[supporters]);
    return (
        <section className="sponsors-section section-padding" style={{backgroundImage:`url(${MapImage})`}}>
            <div className="container pt-100">
                <div className="col-12 text-center mb-50">
                    <Title 
                        title="Sponsors"
                        subTitle="Our Sponsors"
                        titleClass="nant-title-green"
                    />
                </div>
                {categoryList?.map((category) => (
                <>
                    <div className="text-center mb-30">
                        <div className="title-wrap">
                            <p>{category}</p>
                        </div>
                    </div>
                    <div className="row text-center justify-content-around align-items-center mb-30">
                        {supporters.filter(catItem=>`${catItem?.subscription_category}` === category).map(items=>(
                            <div className="col-12 col-md-4 col-lg-3">
                                <div className="single-brand-logo">
                                    <img src={items.images} alt=""  /> 
                                </div>
                            </div>
                        ))}
                    </div>
                </>
                ))}
            </div>
        </section>
    );
};

export default withRouter(Sponsors);