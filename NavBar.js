import React, {use, useState} from "react";
import "./NavBar.css";
import './Home';
import './Products';

function NavBar(){
    const [count, setCount] = useState(0);
    const [times, resets] = useState(0);

    const increment = () =>{
      setCount(count+100);
      if (count>900){
          setCount(0); //900+100 from count+100 => reset to 0 when count is equal to 1000
          resets(times+1);  
        } 
    }
    const reset = () =>{
        setCount(0);
        resets(0);
    }
  
    return(
        <div className="NavBar"> 
            <div id="Buttons">
                <button><a href="#Home">Home</a></button>  
                <button ><a href="#Products">Products</a></button> 
                <button><a href="#AboutUs">About Us</a></button>
                <button><a href="mailto:curcanudavidaniel@gmail.com">Mail</a></button>
            </div> 
            <div id="image">
                
            </div>                
        </div>
    );
}

export default NavBar;