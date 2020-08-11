import React, { useState } from 'react';
import { FormGroup, FormControl, FormLabel } from "react-bootstrap";
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

function Login() {
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[name, setName] = useState("");
  
  function validateForm(){
    return email.length > 0 && password.length > 0;
  }
  function handleSubmit(event){
    event.preventDefault();
  }
  function changeState(){
    document.getElementById("signUp").addEventListener('click', () => {
      document.getElementById("container").classList.add("right-panel-active");
    });
    document.getElementById("login").addEventListener("click", () =>{
      document.getElementById("container").classList.remove("right-panel-active");
    });
    console.log("clicked")
  }
  

  return (
    <div className = "container" id = "container">
      <div className="signup-container form-container">
        <form onSubmit = {handleSubmit}>
          <h1> Create an Account </h1>
          <div class="social-container signup">
              <a
                href="#"
                className="facebook social"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="#" className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a
                href="#"
                className="instagram social"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
          <FormGroup className = "form" controlId = "name" bsSize = "large">
            <FormLabel class = "label">Name</FormLabel>
            <FormControl
              autoFocus 
              value = {name}
              onChange = {e => setName(e.target.value)}
              placeholder = "Name"
              type="name"
              class = "form-control"
              />
          </FormGroup>
          <FormGroup className = "form" controlId = "email" bsSize = "large">
            <FormLabel class = "label">Email</FormLabel> 
            <FormControl
              type= "email"
              value = {email}
              onChange = {e => setEmail(e.target.value)}
              placeholder = "Email"
              class = "form-control"
              />
          </FormGroup>
          <FormGroup className = "form" controlId = "password" bsSize = "large">
            <FormLabel class = "label">Password</FormLabel> 
            <FormControl
              value = {password}
              onChange = {e => setPassword(e.target.value)}
              type = "password"
              placeholder = "Password"
              class = "form-control"
              />
          </FormGroup>
          <button bsSize="large" disabled={!validateForm()} type = "submit">
            Sign Up
          </button>
        </form>
      </div>
      <div className="login-container form-container">
        <form onSubmit = {handleSubmit}>
          <h1> Sign In </h1>
            <div class="social-container">
              <a
                href="#"
                className="facebook social"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="#" className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a
                href="#"
                className="instagram social"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
            <FormGroup controlId = "email" bsSize = "large">
              <FormLabel class = "label">Email</FormLabel> 
              <FormControl
                autoFocus 
                type= "email"
                value = {email}
                onChange = {e => setEmail(e.target.value)}
                placeholder = "Email"
                class = "form-control"
                />
            </FormGroup>
            <FormGroup className = "form" controlId = "password" bsSize = "large">
              <FormLabel class = "label">Password</FormLabel> 
              <FormControl
                value = {password}
                onChange = {e => setPassword(e.target.value)}
                type = "password"
                placeholder = "Password"
                class = "form-control"
                />
            </FormGroup>
            <a href="#">Forgot your password?</a>
            <button bsSize="large" disabled={!validateForm()} type = "submit">
              Login
            </button>
        </form>
      </div>
      <div className = "overlay-container">
        <div class = "overlay">
          <div class = "overlay-panel overlay-left">
            <h1>Welcome</h1>
            <p> Give Us Some Info and We'll Get You Started.
              <p>If you already have an account, sign in!</p> 
            </p>
            <button class = "panel" id = "login" onClick = {changeState}>
                Sign In
            </button>
          </div>
          <svg id="blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1430 339"><path fill="#e6f2f2" fill-opacity="1" d="M0,192L11.4,202.7C22.9,213,46,235,69,218.7C91.4,203,114,149,137,160C160,171,183,245,206,272C228.6,299,251,277,274,240C297.1,203,320,149,343,138.7C365.7,128,389,160,411,149.3C434.3,139,457,85,480,85.3C502.9,85,526,139,549,170.7C571.4,203,594,213,617,186.7C640,160,663,96,686,85.3C708.6,75,731,117,754,160C777.1,203,800,245,823,256C845.7,267,869,245,891,213.3C914.3,181,937,139,960,106.7C982.9,75,1006,53,1029,80C1051.4,107,1074,181,1097,197.3C1120,213,1143,171,1166,160C1188.6,149,1211,171,1234,181.3C1257.1,192,1280,192,1303,165.3C1325.7,139,1349,85,1371,69.3C1394.3,53,1417,75,1429,85.3L1440,96L1440,320L1428.6,320C1417.1,320,1394,320,1371,320C1348.6,320,1326,320,1303,320C1280,320,1257,320,1234,320C1211.4,320,1189,320,1166,320C1142.9,320,1120,320,1097,320C1074.3,320,1051,320,1029,320C1005.7,320,983,320,960,320C937.1,320,914,320,891,320C868.6,320,846,320,823,320C800,320,777,320,754,320C731.4,320,709,320,686,320C662.9,320,640,320,617,320C594.3,320,571,320,549,320C525.7,320,503,320,480,320C457.1,320,434,320,411,320C388.6,320,366,320,343,320C320,320,297,320,274,320C251.4,320,229,320,206,320C182.9,320,160,320,137,320C114.3,320,91,320,69,320C45.7,320,23,320,11,320L0,320Z"></path></svg>
          <svg id="blue-inv" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1430 339"><path fill="#e6f2f2" fill-opacity="1" d="M0,192L11.4,202.7C22.9,213,46,235,69,218.7C91.4,203,114,149,137,160C160,171,183,245,206,272C228.6,299,251,277,274,240C297.1,203,320,149,343,138.7C365.7,128,389,160,411,149.3C434.3,139,457,85,480,85.3C502.9,85,526,139,549,170.7C571.4,203,594,213,617,186.7C640,160,663,96,686,85.3C708.6,75,731,117,754,160C777.1,203,800,245,823,256C845.7,267,869,245,891,213.3C914.3,181,937,139,960,106.7C982.9,75,1006,53,1029,80C1051.4,107,1074,181,1097,197.3C1120,213,1143,171,1166,160C1188.6,149,1211,171,1234,181.3C1257.1,192,1280,192,1303,165.3C1325.7,139,1349,85,1371,69.3C1394.3,53,1417,75,1429,85.3L1440,96L1440,320L1428.6,320C1417.1,320,1394,320,1371,320C1348.6,320,1326,320,1303,320C1280,320,1257,320,1234,320C1211.4,320,1189,320,1166,320C1142.9,320,1120,320,1097,320C1074.3,320,1051,320,1029,320C1005.7,320,983,320,960,320C937.1,320,914,320,891,320C868.6,320,846,320,823,320C800,320,777,320,754,320C731.4,320,709,320,686,320C662.9,320,640,320,617,320C594.3,320,571,320,549,320C525.7,320,503,320,480,320C457.1,320,434,320,411,320C388.6,320,366,320,343,320C320,320,297,320,274,320C251.4,320,229,320,206,320C182.9,320,160,320,137,320C114.3,320,91,320,69,320C45.7,320,23,320,11,320L0,320Z"></path></svg>
          <div class ="overlay-panel overlay-right">
            <h1> Welcome Back </h1>
            <p> Don't have an account? Sign up! </p>
            <button class="panel" id= "signUp" onClick = {changeState}> Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

