import Header from "./components/Header";
import Navigation from "./components/Navigation";
import "./App.css"
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MuiAccordion from "./components/MuiAccordion";
import ChatRoom from "./components/ChatRoom";
import ChatBox from "./components/ChatBox";

function App() {
  return (
    <ChatBox/>
    // <div className="p-3 App">
    //   <Router>
    //     <Header />
    //     <Sidebar /> 
    //     <Routes>
    //       <Route path="/" exact>
    //         {/* Chat */}
    //       </Route>
    //     </Routes> 
    //     <ChatRoom />    
    //   </Router>
    // </div>
  );
}

export default App;
