import React, { useEffect, useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink,useHistory } from "react-router-dom";



const About = () => {


  const history = useHistory();
  const [userdata, setUserData] = useState("");

  const CallAboutPage = async () => {

    try {
      const res = await fetch('/about', {
        method: 'GET',
        headers: {
          Accept: "application/json",
          'Content-Type': "application/json"
        },
        credentials: 'include'
      });
      const data = await res.json();
      console.log(data);
      setUserData(data)

    } catch (err) {
      history.push("/signin")

    }
  }
  useEffect(() => {
    CallAboutPage();
  }, []);



  return (
    <>



      <h1 className="d-flex justify-content-center" > Hello i am About  Page!😄</h1><br /><br /><br />


      <div className="d-flex justify-content-center">
        <form method="GET">

          <h5 className="d-flex justify-content-center">Your welcome sir,</h5>
          <h6 className="d-flex justify-content-center">{userdata.name}</h6><br />
          <h5 className="d-flex justify-content-center">Your Email is </h5>
          <h6 className="d-flex justify-content-center">{userdata.email}</h6><br />
          
        </form>

       
      </div>

      <div className="container-fluid">

        <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_qvEiRS.json" background="transparent" speed="0.5" loop autoplay></lottie-player>
      </div>


    </>)
}
export default About;