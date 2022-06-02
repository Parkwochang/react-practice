import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Submit from "./component/Submit";
import Navbar from "./component/Navbar";


function App() {
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/"/>
        <Route path="/Movies" element={<Submit />}/>
        <Route path="/Users"/>
      </Routes>
    </Router>
  );
}

export default App;
