import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

const Error = () => {
       
       return(
           <>
               <div className="container-fluid d-flex justify-content-center" >
                <div className="row">
                    <div className="col-8">
                    <lottie-player class="error" src="https://assets10.lottiefiles.com/packages/lf20_qw8ewk7k.json"  background="transparent"
                      speed="0.5"   loop  autoplay></lottie-player>
                    </div>
                    <div className="col-4 " >
                 <button  class = "butnerror">  <NavLink class="errorhome"  to='/'> Back to Home Page 😄</NavLink></button> 
                    </div>
                </div>
                
                </div>
           </>
       )   
}
export default Error;