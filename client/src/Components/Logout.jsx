import React, { useEffect } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom"





const Logout = () => {


  const history = useHistory();


  const CallLogoutPage = async () => {

    try {
      const res = await fetch('/logout', {
        method: 'GET',
        headers: {
          Accept: "application/json",
          'Content-Type': "application/json"
        },
        credentials: 'include'
      });
      const data = await res.json();
      window.alert("You Are logout")


      history.push('/')
    } catch (err) {
     
      history.push("/", { replace: true })


    }


  }


  useEffect(() => {
    CallLogoutPage();
  }, []);


  return (
    <>
      <h1 className="container-fluid d-flex justify-content-center" >Logout</h1>
    </>
  )
}
export default Logout;