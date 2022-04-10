import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {FaShoppingCart} from 'react-icons/fa';
import { isLoggedIn } from '../../../utils';

const CartButton = (props) =>{
        const cartQuantity= useSelector(state => state.cart.totalQuantity);
        return(   
            <Link className="nav-cart" to={isLoggedIn() ? '/cart' : '/cart-public'}>
                <span className="icon"><FaShoppingCart /></span>
                <span className="counter">{cartQuantity}</span>
            </Link>
             
        );
}
export default CartButton;
