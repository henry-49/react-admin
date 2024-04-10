import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Menu from './components/Menu';
import Users from './pages/Users';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div className="App">
       
      <Router>
                <Routes>
                    <Route path={'/'}  element={<Dashboard/>} />
                    <Route path={'/users'} element={<Users/>} />
                    <Route path={'/register'} element={<Register/>} />
                 </Routes>
        
          {/* <Nav />
      
            <div className="container-fluid">
              <div className="row">
                <Menu />
            
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                  
                </main>
              </div>
            </div> */}

      </Router>
    </div>
  );
}

export default App;
