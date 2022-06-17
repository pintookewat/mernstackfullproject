import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";


const Signup = () => {
    const history = useHistory();

    const [user, setUser] = useState({ name: "", email: "", password: "", cpassword: "" });

    let name, value;

    const inputsEvent = (e) => {
        name = e.target.name; 
        value = e.target.value;

        setUser({ ...user, [name]: value });

    }
    const PostData = async () => {


        const { name, email, password, cpassword } = user;

        const res = await fetch('/signup', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name, email, password, cpassword
            })
        });

        const data = await res.json();

        if (res.status === 400 || !data) {
            window.alert("Fill corectly ");
        } else {
            window.alert("SIgnup sucessfully");
            history.push("/signin")
        }
    }

    return (
        <>
            <h1 className="container-fluid d-flex justify-content-center" >This is Signup Page</h1><br /><br /><br />
            <div className="container-fluid d-flex justify-content-center " ><br /><br /><br />

                <form method="POST" action="/signup" onSubmit={PostData} >
                <div> <input  name="name" type="text" placeholder="Name......" onChange={inputsEvent} value={user.name} autoComplete="off" /></div><br/>
                    <div><input  name="email" type="email" placeholder="Email......" onChange={inputsEvent} value={user.email} autoComplete="off" /></div><br/><br/>
                    <div><input  name="password" type="password" placeholder="Password......" onChange={inputsEvent} value={user.password} autoComplete="off" /> </div><br/>
                    <div> <input  name="cpassword" type="password" placeholder="Confirm Password......" onChange={inputsEvent} value={user.cpassword} autoComplete="off" /></div><br/>

                    <br/>


                    <button type="submit" className=" btn btn-danger">Submit</button>
                </form>
            </div>
        </>
    )
}
export default Signup;