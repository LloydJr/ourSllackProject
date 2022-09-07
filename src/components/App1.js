import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom'
import axios from 'axios'
import imageSllacker from './images/sllacker.png'
import styled from 'styled-components'



import "./styles.css";

const LOGIN_URL = 'http://localhost:8080/user'


function App1() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userName, setUserName] = useState('');
  const [data, setData] = useState('');


  useEffect(() => {
    axios.get(`http://localhost:8080/user`)
    .then(res => {
        console.log("Getting from :::::", res.data)
        setData(res.data)
    }).catch(err => console.log(err))
  }, [])
  
  

  // User Login info
  // const database = axios.get(`http://localhost:8080/user/`);
  // console.log(database);


    // {
    //   username: "user1",
    //   password: "pass1"
    // },
    // {
    //   username: "user2",
    //   password: "pass2"
    // }
  ;

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };


  const handleSubmit = async (event) => {
    //Prevent page reload
    event.preventDefault();  
    const response = await axios.get(`http://localhost:8080/user/find/${userName}`);
    
    if(response === 404){
      return console.log("Wrong user")
    } else {
      localStorage.setItem("user", userName)
    }

    // let loggedInUser;
    // if(response=404){
    //   localStorage.setItem('user', null)
    // } else {
    //   loggedInUser = localStorage.setItem('user', userName)
    // }

    


    var { uname, pass } = document.forms[0];

    // Find user login info
    // New code
    const findData = data.find((user) => user.userName === uname.value);
    const findDataP = data.find((passw) => passw.password === pass.value)
    console.log(findData)
    console.log(findDataP)

    // Compare user info
    // New code
    if (findDataP) {
      if (findDataP.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  <div className="sllackerJawn">
  <img src={imageSllacker} alt="" />
  </div>
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container text-2xl">
          <label>Username </label>
          <input type="text"  onChange={(e) => setUserName(e.target.value)} name="uname" required  className="text-black"/>
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container text-2xl">
          <label>Password </label>
          <input type="password" name="pass" required  className="text-black"/>
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div>
    <div className='sllackerJawn centerJawn'>
    <img src={imageSllacker} alt="" />
    </div>
    <div className="the-box">
      <div className="box2">
        <div className="centeringPlease text-5xl">Sign In</div>
        {isSubmitted ? <div className="centeringPlease text-2xl">User is successfully logged in
          <div className="centeringPlease text-3xl">
          <Link to="/channel_home">Click Here</Link>
          </div>
        </div> : renderForm}


      </div >
    </div>
    </div>
    
  );
}

export default App1;

function toggleDiv(){
  var displayStatus = document.getElementById("div1");
  if ( displayStatus.style.display == 'none' ){
    //If the div is hidden, show it
    displayStatus.style.display = 'block';
  } else {
    //If the div is shown, hide it
    displayStatus.style.display = 'none';
  }
};
