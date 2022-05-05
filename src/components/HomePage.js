import React,{Fragment} from "react";

import Banner from './homepage/Banner';
import AboutUs from './homepage/AboutUs';
import Service from './homepage/Service';
import Sponsors from './homepage/Sponsors';
import Event from './homepage/Event';
import Cta from './homepage/Cta';
import Projects from './homepage/Project';
import ProductList from './homepage/Product';
import Demo from './homepage/Demo';

const HomePage = () => {
  return(
      <Fragment>
        <Banner />
        <AboutUs />
        <Demo />
        <Service />
        <Sponsors />
        <Projects />
        <Event />
        {/* <Cta /> */}
        <ProductList />
      </Fragment>
  );
};

export default HomePage;
