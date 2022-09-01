import Header from "./components/Header";
import Navigation from "./components/Navigation";
import "./App.css"
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MuiAccordion from "./components/MuiAccordion";
import ChatRoom from "./components/ChatRoom";
import ChannelPage from "./components/ChannelPage";
import {container} from "./App.css"
import Box from '@mui/material/Box';


function App() {
  return (
    <div className="p-3 App">
      
      <Router>
        <Header />
        <Box sx={{width: '100%'}}>
        <grid className="container" columnSpacing = {{xs:1000}} >
          <div className="item">
          <Sidebar />
          </div>
          <div className="item">
          <ChannelPage/>
          </div>
        </grid>
        </Box>
        
        
        <div></div>
        <br></br>
        <Routes>
          <Route path="/about" element={<About />} >
          </Route>
        </Routes> 
        
        <Footer />
      </Router>
    </div>
   
    

  );
}

export default App;
