import Header from "./components/Header";
// import ChatRoom from "./components/ChatRoom";
import Navigation from "./components/Navigation";
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="p-3 App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact>
            {/* Chat */}
          </Route>
        </Routes>        
      </Router>
    </div>
  );
}

export default App;
