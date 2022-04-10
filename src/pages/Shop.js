import React, { useEffect } from "react";
import { withRouter,Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getPublicProducts} from '../actions/thunk/homePageThunk';
import Product from '../components/products/Product';

const Shop = () => {
    const { homePage: { publicProducts} } = useSelector((state) => state);
    const dispatch = useDispatch();

    // Fetch Products  initially
    useEffect(() => {
        dispatch(getPublicProducts());
    }, [dispatch]);
    return(
        <section className="blog-card-section section-padding">
            <div className="container">
                <h2 className="section-title">All Products</h2> 
                <div className="row">
                        {publicProducts?.map( (items) => (
                        <div className="col-12 col-md-4 col-lg-3">
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
export default withRouter(Shop);