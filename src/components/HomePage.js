import React,{Fragment} from "react";

import './../assets/scss/pages/homepage.scss';

import Banner from './homepage/Banner';
import AboutUs from './homepage/AboutUs';
import Service from './homepage/Service';
import Sponsors from './homepage/Sponsors';
import Event from './homepage/Event';
import Cta from './homepage/Cta';
import ProductList from './homepage/Product';

const HomePage = () => {
  return(
      <Fragment>
        <Banner />
        <AboutUs />
        <Service />
        <Sponsors />
        <Event />
        {/* <Cta /> */}
        <ProductList />
      </Fragment>
  );
};

export default HomePage;
