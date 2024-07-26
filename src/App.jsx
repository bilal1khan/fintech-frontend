
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Dashboard from './components/Dashboard';
import Transaction from './components/Transaction';
import Update from './components/Update';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <Navbar/>
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/update" element={<Update />} />
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
