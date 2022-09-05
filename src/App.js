import react from 'react';
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import "./App.css"
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MuiAccordion from "./components/MuiAccordion";
import ChatRoom from "./components/ChatRoom";
import ChannelPage from "./components/ChannelComp/ChannelPage";
import {container} from "./App.css"
import Box from '@mui/material/Box';
import Footer from "./components/Footer";
import About from "./components/Pages/About";
import UserComponent from './components/UserComponent';
import App1 from './components/App1'
import DirectMessage from "./components/Pages/DirectMessage"
import ChannelBrowser from "./components/Pages/ChannelBrowser";
import UserProfile from './components/Pages/UserProfile';
import Register from './components/Pages/Register'
import SuccessfulSignUp from './components/Pages/SuccessfulSignUp';
import ChannelListGetter from "./components/ChannelComp/ChannelListGetter";

function App() {
  return (
    <div className="App">
      
      <Router>

        <Header />

        <Routes>
          <Route path="/" element={<Register />} /> {/*This is also the path to logout.*/}
          <Route path="/sign_in" element={<App1 />}/>
          <Route path="/user_profile" element={<UserProfile/>} />
          <Route path="/about" element={<About />} />
          <Route path="/direct_messages" element={<DirectMessage />} />
          <Route path="/current_channel" element={<ChannelBrowser />} />
          <Route path="/sign_up_successful" element={<SuccessfulSignUp />} />
          <Route path="/search_channel" element={< ChannelListGetter/>} />
        </Routes> 
        
        {/* <Footer /> */}
      </Router>
    </div>
   
    

  );
}

export default App;
