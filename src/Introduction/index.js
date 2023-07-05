import React from "react";
import './style.css';
import { FaHeart } from "react-icons/fa";

const Introduction = () =>{
    return(
    <div className="my-class">
        <h1 className="heading">What I have learnt in React</h1>
        <p>React is a JavaScript library</p> <FaHeart/>
      
        <img src="https://res.cloudinary.com/dqhm7if3p/image/upload/v1688057987/samples/ecommerce/analog-classic.jpg" className="image"></img>
        <FaHeart/>
        <p>Hello world</p>
    </div>
     

    )
}
export default Introduction;
