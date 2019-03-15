import React, { Component } from 'react';
import './resources/styles.css';
import Header from './components/header_footer/header'
import Featured from './components/featured/index';
import VunueNfo from './components/venueInfo/Index';
import Highlights from './components/highlights/Index';
import Pricing from './components/pricing/Index';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Header />
         <Featured />
         <VunueNfo />
         <Highlights />
         <Pricing />
      </div>
    );
  }
}

export default App;
