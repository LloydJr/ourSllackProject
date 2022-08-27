import Header from "./components/Header";
import Navigation from "./components/Navigation";
import "./App.css"
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MuiAccordion from "./components/MuiAccordion";
import ChatRoom from "./components/ChatRoom";

function App() {
  return (
    <div className="p-3 App">
      <Router>
        <Header />
        {/* <Sidebar />  */}
        <Navigation />
        <Routes>
          <Route path="/" exact>
            {/* Chat */}
          </Route>
        </Routes> 
         <MuiAccordion />  
        <ChatRoom />    
      </Router>
    </div>
  );
}

export default App;
