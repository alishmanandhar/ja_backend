import logo from './logo.svg';
// import './App.css';
import "./styles/index.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Button variant="outline-danger">Alish Form</Button>
      <Router>
          <Routes>
            {/* <Route path="/" element={<Index/>} exact /> */}
          </Routes>
        </Router>
    </div>
  );
}

export default App;
