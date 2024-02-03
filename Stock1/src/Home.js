import React from 'react';
import './Home.css'; 
import {Link} from "react-router-dom"
const Home = () => {
  return (
    <div className="home-page">
      <header>
        <h1>Welcome to Stock Management System</h1>
      </header>
      <main>
        <section className="options">
         <Link to="/In" ><div className="option">
            <h2>Inventory Management</h2>
            <p>Manage your inventory, add, edit or remove items.</p>
          </div></Link>
         <Link to="/Otp"> <div className="option">
            <h2>Orders</h2>
            <p>View and manage orders, track shipments.</p>
          </div></Link>
          <div className="option">
            <h2>Reports</h2>
            <p>Generate reports, analyze stock data.</p>
          </div>
          <div className="option">
            <h2>Settings</h2>
            <p>Configure system settings, user permissions.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
