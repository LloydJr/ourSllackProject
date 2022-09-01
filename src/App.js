import Header from "./components/Header";
import Navigation from "./components/Navigation";
import "./App.css"
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MuiAccordion from "./components/MuiAccordion";
import ChatRoom from "./components/ChatRoom";
import ChannelPage from "./components/ChannelPage";

function App() {
  return (
    <div className="p-3 App">
      
      <Router>
        <Header />
        <ChannelPage/>

        <Sidebar />
        
        <Routes>
          <Route path="/" exact>
          </Route>
        </Routes> 
        
      </Router>
    </div>
   
    

  );
}

export default App;
