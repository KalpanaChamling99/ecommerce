import React,{useEffect,useState} from 'react';
import {withRouter} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import { Pagination,Input,Space } from 'antd';
import Loader from '../../components/common/Loader';
import Product from '../../components/products/Product';
import {getPrivateProducts} from '../../actions/thunk/privateProductThunk';


const pageSize = 6;
const { Search } = Input;

const PrivateProducts = () => {
    const dispatch = useDispatch();

    const [current,setCurrent] = useState(1);
    const [minIndex,setMinIndex] = useState(0);
    const [maxIndex,setMaxIndex] = useState(0);

    const [filterProducts,setFilterProducts] = useState([]);
    const [hasSearchedProduct,setHasSearchedProducts] = useState(true);

    const { myProduct: {privateProducts},loader: { isLoading } } = useSelector( (state) => state);
    const totalProduct = privateProducts.filter( item => item.id !== 0).length;
    

    useEffect(()=>{
        dispatch(getPrivateProducts());
        setMaxIndex(pageSize);
    },[dispatch]);

    useEffect(()=>{
        if(privateProducts.length > 0){
            setFilterProducts(privateProducts);
        }
    },[privateProducts]);


    const paginationHandler = (page) =>{
        setCurrent(page);
        setMinIndex( (page - 1) * pageSize);
        setMaxIndex( page * pageSize);
    }
    const searchHandler = (enteredValue) => {
        if( enteredValue){
            const filteredProduct = privateProducts.filter( item => item.item_name?.toLowerCase().includes(enteredValue?.toLowerCase()));
            setFilterProducts(filteredProduct);
            if(filteredProduct.length === 0){
                setHasSearchedProducts(false);
            }
        }else{
            setFilterProducts(privateProducts);
            setHasSearchedProducts(true);
        }
    };
    

    return(
        <>
            
            <div className="nant-product-section nant-pos-relative nant-main-section-padding">
                {isLoading ? <Loader /> :
                    <div className="container">
                        <div className="nant-search-field">
                            <Space direction="vertical">
                                <Search
                                    placeholder="input search text"
                                    enterButton="Search"
                                    size="large"
                                    allowClear
                                    onSearch={searchHandler}
                                />
                            </Space>
                        </div>
                        <div className="nant-product-list">
                            <div className="row">
                                {filterProducts?.map( (items,index) => 
                                    index >= minIndex &&
                                    index < maxIndex &&(
                                    <div className="col-xl-4 col-md-6 col-12">
                                        <Product 
                                            item_name={items.item_name}
                                            description = {items.description}
                                            date ={items.created_at}
                                            price ={items.price}
                                            image ={items.image}
                                            id={items.id}
                                            key ={items.id}
                                        />
                                    </div>
                                ))}
                            </div>
                            {hasSearchedProduct && 
                                <Pagination 
                                    pageSize = {pageSize}
                                    current={current} 
                                    total= {totalProduct}
                                    onChange={paginationHandler}
                                />
                            }
                            {!hasSearchedProduct && <h2 className="text-center">No such products are available</h2>}
                        </div>
                    </div>
                }
            </div>
        </>
    )
};
export default withRouter(PrivateProducts);