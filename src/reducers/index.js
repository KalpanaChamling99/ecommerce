import { combineReducers } from "redux";
import { homePageReducer } from "../reducers/homePageReducer";
import { loginReducer } from "../reducers/loginReducer";
import { aboutUsPageReducer } from "./aboutUsPageReducer";
import { cartReducer } from "./cartReducer";
import { loaderReducer } from "./loaderReducer";
import { orderProductReducer } from "./orderProductReducer";
import { pastCommitteeReducer } from "./pastCommitteeReducer";
import { checkoutReducer } from './checkoutReducer';
import { orderHistoryReducer} from './orderHistoryReducer';
import { registerReducer } from './registerReducer';
import { passwordReducer } from './user/passwordReducer';
import { privateProductsReducer } from './user/privateProductReducer';

export default combineReducers({
  homePage: homePageReducer,
  login: loginReducer,
  teams: aboutUsPageReducer,
  cart: cartReducer,
  loader: loaderReducer,
  orderProduct: orderProductReducer,
  pastCommittee: pastCommitteeReducer,
  checkout: checkoutReducer,
  orderHistory: orderHistoryReducer,
  registration: registerReducer,
  password: passwordReducer,
  myProduct: privateProductsReducer
});
