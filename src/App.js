import Header from "./components/Header";
import Navigation from "./components/Navigation";
import "./App.css"
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MuiAccordion from "./components/MuiAccordion";
import ChatRoom from "./components/ChatRoom";
import ChannelPage from "./components/ChannelPage";
import Footer from "./components/Footer";
import About from "./components/Pages/About";

function App() {
  return (
    <div className="p-3 App">
      
      <Router>
        <Header />
        <grid>
        <ChannelPage/>

        <Sidebar />
        </grid>
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
