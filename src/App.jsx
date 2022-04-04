import './App.css';
import React from 'react';
import Home from './pages/Home';
import Header from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.css'
// import Routes from './config/Routes';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
      <Router>
        <div className="App">
              <Header />
              <Home />
        </div>
      </Router>
  );
}

export default App;
