import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Redirect, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./components/common/header/Index";
import Footer from "./components/common/footer/Index";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import EventDetailPage from "./pages/EventDetailPage";
import Login from "./pages/Login";
import ContactUsPage from "./pages/ContactUsPage";
import HomePage from "./components/HomePage";
import PrivateRoute from "./Routes/ProtectedRoute";
import PublicRoute from "./Routes/PublicRoute";
import TeamPage from "./pages/TeamPage";
import CartPage from "./pages/cart/CartPage";
import PastCommittee from "./pages/PastCommittee";
import MemberList from "./pages/member/memberList";
import Checkout from "./pages/CheckoutPage";
import OrderHistory from './pages/OrderHistorypage';
import Register from './pages/RegisterPage';
import Shop from './pages/Shop';
import UpdatePassword from './pages/user/UpdatePassword';
import ForgotPassword from './pages/user/ForgotPassword';
import PrivateProducts from './pages/user/privateProduct';

function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <Switch>
          <PublicRoute path="/" exact component={HomePage} />
          <PublicRoute
            path="/service-details/:postId"
            exact
            component={ServiceDetailPage}
          />
          <PublicRoute
            path="/event-details/:postId"
            exact
            component={EventDetailPage}
          />
          <PublicRoute path="/contact-us" component={ContactUsPage} />
          <PublicRoute path="/teams" component={TeamPage} />
          <PublicRoute path="/committee" component={PastCommittee} />
          <PublicRoute path="/member-list" component={MemberList} />
          <PublicRoute path="/shop" component={Shop} />
          <PublicRoute restricted path="/cart-public" component={CartPage} />
          <PublicRoute path="/checkout" component={Checkout} />

          <PrivateRoute path="/cart" component={CartPage} />
          {/* <PrivateRoute path="/checkout" component={Checkout} /> */}
          <PrivateRoute path="/order-history" component={OrderHistory} />

          {/* USER*/}
          <PublicRoute restricted path="/login" exact component={Login} />
          <PublicRoute restricted path="/register" exact component={Register} />
          <PublicRoute restricted path="/forgot-password" component={ForgotPassword} />
          <PrivateRoute path="/update-password" component={UpdatePassword} />
          <PrivateRoute path="/my-product" component={PrivateProducts} />

          <Route path="*" >
            <Redirect to="/" />
          </Route>

        </Switch>

        <ToastContainer autoClose={5000} />
        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
