import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-900 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/dashboard" className="text-white text-2xl font-bold hover:text-gray-300">
          Fintech App
        </Link>

        <div className="flex space-x-4">
          <Link to="/signin" className="text-white text-lg hover:text-gray-300">
            Signin
          </Link>
          <Link to="/signup" className="text-white text-lg hover:text-gray-300">
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
