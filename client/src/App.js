import React from "react"
import About from './Components/About';
import Contact from './Components/Contact';
import Error from './Components/Error';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Services from './Components/Services';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Logout from './Components/Logout';
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";


const App = () => {
  return (
    <>

      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/about" component={About} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/logout" component={Logout} />
      
        <Route exact path="*" component={Error} />

      </Switch>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 180"><path fill="#ffffff" fill-opacity="0.5" d="M0,64L80,69.3C160,75,320,85,480,101.3C640,117,800,139,960,133.3C1120,128,1280,96,1360,80L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
      <br />

    </>
  )
};

export default App;
