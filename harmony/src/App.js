import React, { Component } from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';

import Header from './components/header_footer/header'
import Featured from './components/featured/index';
import VunueNfo from './components/venueInfo/Index';
import Highlights from './components/highlights/Index';
import Pricing from './components/pricing/Index';
import Location from './components/location/Index';
import Footer from './components/header_footer/footer';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />

         <Element name="featured">
            <Featured />
         </Element>

         <Element name="highlights">
            <Highlights />
         </Element>

         <Element name="venueInfo">
            <VunueNfo />
         </Element>

         <Element name="pricing">
            <Pricing />
         </Element>

         <Element name="location">
            <Location />
         </Element>

        <Footer />

      </div>
    );
  }
}

export default App;

