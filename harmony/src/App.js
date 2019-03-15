import React, { Component } from 'react';
import './resources/styles.css';
import Header from './components/header_footer/header'
import Featured from './components/featured/index';
import VunueNfo from './components/venueInfo/Index';
import Highlights from './components/highlights/Index';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "1500px", backgroundColor: 'blue' }}>
         <Header />
         <Featured />
         <VunueNfo />
         <Highlights />
      </div>
    );
  }
}

export default App;
