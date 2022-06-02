import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Users from "./pages/Users";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import User from "./pages/User";


function App() {
  
  return (
    <Router>
      <Navbar />
      <div className="container">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/Movies" element={<Movies />}/>
        <Route path="/Users" element={<Users/>}/>
        <Route path="/Users/:id" element={<User/>}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
