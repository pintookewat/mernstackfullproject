import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";


const Contact = () => {
  const history = useHistory();

  const [user, setUser] = useState({
    name: "", email: "", phone: "", location: "", message: ""
  });

  let name, value;

  const inputsEvent = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  }

  const PostData = async (e) => {



    const { name, email, phone, location, message } = user;

    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'

      },
      body: JSON.stringify({
        name, email, phone, location, message
      })
    });

    const data = res.json();

    if (!data) {
      console.log("Fill the form correctly")
    } else {
      window.alert("Form is sumbitted")
      history.push("/")
    }


  };

  return (
    <>
      <h1 className="container-fluid d-flex justify-content-center" >This is Contact Page</h1><br /><br /><br />
      <div className="container-fluid d-flex justify-content-center">
        <form method="POST" action="/contact" onSubmit={PostData} >
          <div> <input name="name" type="text" placeholder="Name......" onChange={inputsEvent} autoComplete="off" value={user.name} /></div><br/>
          <br /><div> <input name="email" type="email" placeholder="Email......" onChange={inputsEvent} autoComplete="off" value={user.email} /></div><br/>
          <br /><div> <input name="phone" type="number" placeholder="Mobile......" onChange={inputsEvent} autoComplete="off" value={user.phone} /></div><br/>
          <br /><div> <input name="location" type="text" placeholder="Location......" onChange={inputsEvent} autoComplete="off" value={user.location} /></div><br/><br/>
          <div>  <input name="message" type="text" placeholder="Message......" onChange={inputsEvent} autoComplete="off" value={user.message} /></div>   <br /><br />
          <button type="submit" className=" btn btn-danger">Submit</button>
        </form>
      </div>

      
    </>
  )
}
export default Contact;