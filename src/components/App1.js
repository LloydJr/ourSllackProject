import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom'
import axios from 'axios'

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
    localStorage.setItem('user', userName)
    event.preventDefault();  
    const response = await axios.get(`http://localhost:8080/user/find/${userName}`);
    
    console.log(response?.data);
    console.log(response);

    // let loggedInUser;
    // if(response=404){
    //   localStorage.setItem('user', null)
    // } else {
    //   loggedInUser = localStorage.setItem('user', userName)
    // }

    
    const loggedInUser = localStorage.getItem("user");
    console.log(loggedInUser);


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
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text"  onChange={(e) => setUserName(e.target.value)} name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in
          <div >
          <Link to="/search_channel" className="title">Click Here</Link>
          </div>
        </div> : renderForm}


      </div >
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