import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getPublicProducts} from '../../actions/thunk/homePageThunk';
import Product from './../products/Product';
import Title from '../common/Title';

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
                        <Title 
                            title="Products"
                            subTitle="Fundraiser Products"
                            titleClass ="nant-title-green"
                        />
                    </div>
                </div>
                <div className="row">
                        {publicProducts?.map( (items) => (
                        <div className="col-xl-4 col-md-6 col-12" key={items.id}>
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