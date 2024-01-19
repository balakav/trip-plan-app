import React, { useState } from 'react';
import './Re.css'; // Import your CSS file for styling
import Home from './Home';
import {Link} from "react-router-dom"
const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
      valid = false;
    }

    if (formData.password.length < 6) {
      newErrors.password = 'Password should be at least 6 characters';
      valid = false;
    }

    const phoneRegex = /^\d{10}$/; // Change this regex based on your phone number validation rules
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Enter a valid phone number';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Implement form submission logic here (e.g., send data to backend)
      console.log(formData); // For demonstration, log the form data
    } else {
      console.log('Form has errors. Please fix them.');
    }
  };

  return (
    <>
    
    <div className='rebox'>

    
    <form className="register-form" onSubmit={handleSubmit} >
        <h1 className='reh1'>Register Form</h1>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      {errors.name && <p className="error-msg">{errors.name}</p>}

      <input
        type="email"
        placeholder="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <p className="error-msg">{errors.email}</p>}

      <input
        type="password"
        placeholder="Password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      {errors.password && <p className="error-msg">{errors.password}</p>}

      <input
        type="tel"
        placeholder="Phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />
      {errors.phone && <p className="error-msg">{errors.phone}</p>}

     <Link to="/Home"> <button type="submit">Register</button></Link>
    </form>
    </div>
    </>
  );
};

export default RegisterForm;
