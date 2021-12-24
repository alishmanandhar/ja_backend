import logo from './logo.svg';
// import './App.css';
import "./styles/index.scss";

import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import Nav from './component/Nav';

import Home from './pages/home/Home';
import Als from './pages/als/Als';
import Login from './pages/login/Login';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Nav/>
          <Routes>
            {/* <Route path="/" element={<Index/>} exact /> */}
            <Route path="/" element={<Home />} exact />
            <Route path="/als" element={<Als />} exact />
            <Route path="/login" element={<Login />} exact />
            
          </Routes>
      </Router>
    </div>
  );
}

export default App;
