import React, { Component } from 'react';
import Header from './TestHeader';
import Body from './Body';
import Footer from './TestFooter';
          
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Body/>
        <Footer/>
      </div>
    );
  }
}
           
export default App;