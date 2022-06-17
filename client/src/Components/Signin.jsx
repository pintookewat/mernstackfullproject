import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";



const Signin = () => {

    const history = useHistory();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    const inputsEvent = (e) => {
        setEmail(e.target.value)
    }

    const inputsEvents = (e) => {
        setPassword(e.target.value)
    }




    const PostData = async (e) => {


        setPassword(password);
        setEmail(email);


        const res = await fetch("/sigin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })

        });

        const data = await res.json();


        if (res.status === 400 || !data) {
            alert(res.message);
        } else {
            alert("Login Successfully");
            history.push("/")

        }


    };

    return (
        <>
            <div className="container-fluid d-flex justify-content-center ">
                <h5>@gmail.com 📧</h5>
            </div>
            <h1 className="container-fluid d-flex justify-content-center " >This is Login Page</h1><br /><br /><br />
            <div className="container-fluid d-flex justify-content-center">

                <form method="POST" action="/signin" onSubmit={PostData}>
                    <div  > <input className="shadow p-3 mb-5 bg-white rounded" name="email" type="email" placeholder="Email......" onChange={inputsEvent} value={email} autoComplete="off" /> </div><br />
                    <div><input className="shadow p-3 mb-5 bg-white rounded" name="password" type="password" placeholder="Password......" onChange={inputsEvents} value={password} autoComplete="off" /> </div>
                    <br />
                    <button type="submit" class="btn btn-danger">Submit</button>
                    {/* <ToastContainer /> */}
                </form>

            </div>
        </>
    )

}
export default Signin;