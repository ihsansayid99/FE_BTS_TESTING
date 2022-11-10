import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Dashboard from './pages/dashboard';

import Login from './pages/login'
import Register from './pages/register'
import PrivateRoute from './utils/PrivateRoute';

function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/" element={<PrivateRoute/>}>
              <Route path='dashboard' element={<Dashboard/>} />
            </Route>
          </Routes>
        </Router>
    </>
  );
}

export default App;
