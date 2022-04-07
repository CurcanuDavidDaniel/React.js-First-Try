import React, {use, useState} from 'react';
import NavBar from './NavBar';
import Home from './Home';
import Products from './Products';
  

function App(){
 
  return(
    <div className="App">
      <NavBar />
         <div className='content'>
          <Home /><br/>    
          <Products />
      </div>
    </div>
  );
}

export default App;
