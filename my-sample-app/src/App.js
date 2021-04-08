import React from 'react';

import Header from './components/header';
import Section from './components/section';
import Footer from './components/footer';

class App extends React.Component {
  render(){
    return (
      <div className="Page">    
      	<Header />
        <Section />
        <Footer />
      </div> 
    );
  } 
}

export default App;
