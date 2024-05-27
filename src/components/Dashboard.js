import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode'; 
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const [name, setName] = useState('');
  const [token, setToken] = useState('');
  const [expire, setExpire] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get('http://localhost:5000/token');
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken);
      setName(decoded.name);
      setExpire(decoded.exp);
    } catch (error) {
      if (error.response) {
        navigate('/');
      }
    }
  };

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(async (config) => {
    const currentDate = new Date();
    if (expire * 1000 < currentDate.getTime()) {
      try {
        const response = await axios.get('http://localhost:5000/token');
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        const decoded = jwtDecode(response.data.accessToken);
        setName(decoded.name);
        setExpire(decoded.exp);
      } catch (error) {
        if (error.response) {
          navigate('/');
        }
      }
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  });

  return (
    <div className="dashboard-container">
      <div className="rectangle">
        <img src="https://static-00.iconduck.com/assets.00/person-icon-512x483-d7q8hqj4.png" alt="Profile" className="profile-image" />
        <button className="rectangle-button">Dashboard</button>
        <button className="rectangle-button">Data Master</button>
        <button className="rectangle-button">Transaksi</button>
        <button className="rectangle-button">Pengaturan Toko</button>
      </div>
      <div className="content">
        <h1>Welcome Back: {name}</h1>
      </div>
    </div>
  );
}

export default Dashboard;
