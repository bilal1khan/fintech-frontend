// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get("https://fintech-backend-three.vercel.app/api/users/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data);
      } catch (error) {
        toast.error('Failed to fetch user data');
      }
    };
    fetchUserData();
  }, []);

  const handleUpdate = () => {
    navigate('/update');
  };

  const handleTransaction = () => {
    navigate('/transaction');
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">Account Details</h2>
      {userData ? (
        <div>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Account Number:</strong> {userData.id}</p>
          <p><strong>Balance:</strong> ${userData.balance}</p>
          <button
            onClick={handleUpdate}
            className="w-full mt-4 bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700"
          >
            Update Details
          </button>
          <button
            onClick={handleTransaction}
            className="w-full mt-4 bg-blue-800 text-white py-2 px-4 rounded hover:bg-blue-900"
          >
            Make a Transaction
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Dashboard;