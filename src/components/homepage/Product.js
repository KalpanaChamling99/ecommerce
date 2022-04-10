import React, { useEffect } from "react";
import { withRouter,Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getPublicProducts} from '../../actions/thunk/homePageThunk';
import {FaHeart} from 'react-icons/fa';
import Product from './../products/Product';

const ProductList = () => {
    const { homePage: { publicProducts} } = useSelector((state) => state);
    const dispatch = useDispatch();

    // Fetch Products  initially
    useEffect(() => {
        dispatch(getPublicProducts());
    }, [dispatch]);
    return(
        <section className="blog-card-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center mb-40">
                        <div className="section-title">
                            <span><span className="icon"><FaHeart /></span>Product</span>
                            <h1>Latest Products</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                        {publicProducts?.map( (items) => (
                        <div className="col-xl-4 col-md-6 col-12">
                            <Product 
                                item_name={items.item_name}
                                description = {items.description}
                                date ={items.created_at}
                                price ={items.price}
                                image ={items.image}
                                id={items.id}
                                key ={items.key}
                            />

                        </div>
                        ))}
                    </div>
            </div>
        </section>
    );
};
export default withRouter(ProductList);