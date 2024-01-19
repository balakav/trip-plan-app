// import React, { Component} from 'react'
// import { Avatar, Button, Input, InputLabel, TextField } from '@mui/material';
// import './Loginpage.css'
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// class Loginpage extends Component {
   
//     constructor(props){
//       super(props);
//       this.state={
//           email:'',
//           password:'',
//       };
//   }

 
//   handleEmailChange=(event)=>{
//       this.setState({email:event.target.value})
//   };
//   handlePasswordChange=(event)=>{
//       this.setState({password:event.target.value})
//   };
 

//   handleSubmit = (event) => {
//           event.preventDefault();
//           const data = {
//             name:this.state.name,
//             email:this.state.email,
//             password:this.state.password ,
//             confirmpassword:this.state.confirmpassword, 
//           };
         
//           console.log(data);
//          axios.post('http://127.0.0.1:8080/api/v1/auth/authenticate',data)
//           .then( alert("Successfully Registered"))
      
//   };
//   render(){

//     return (
//       <div className='body1'>
//       <body>
//       <div className='appbox'>
//       <div className="App">
//         <h1 className='apph1'>LOGIN</h1>
//   {/* <img src="https://image.slidesdocs.com/responsive-images/slides/2-yellow-blue-cartoon-travel-plan-agency-project-introduction-powerpoint-background_8caae62cd2__960_540.jpg"></img> */}
//         <center>
//         <Avatar src="https://cdn-icons-png.flaticon.com/128/7606/7606103.png"></Avatar><br></br>
//         </center>
//         <div className='appbox1'>
//         <TextField label="Email" variant="outlined" className='email'value={this.state.email} onChange={this.handleEmailChange}/><br></br><br></br>
//         <TextField label="Password" variant="outlined" className='password'type="password" value={this.state.password} onChange={this.handlePasswordChange}/><br></br><br></br><br></br>
//         <center>
//        {/* <Link to="/Home"> */}
//         <Button variant="contained" className='submitbutton'>Login</Button>
//         {/* </Link>  */}
//         <br></br><br></br>
//         {/* <Link to="/Re"><a href="#">ForgotYourPassword?? or NewUser</a></Link> */}
//         </center>
//         </div>
//       </div>
//       </div>
//       </body>
//       </div>
//     )
//   }
//   }

// export default Loginpage;









import React, { useState } from 'react';
import { Avatar, Button, TextField } from '@mui/material';
import './Loginpage.css';
import axios from 'axios';
import {Link, useNavigate} from "react-router-dom"
import { useDispatch } from "react-redux";
import { login } from "./Userslice";

const Loginpage = () => {

  const navigate=useNavigate();
  const [username,setUsername]=useState("");
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  
  // const [email, setEmail] = useState('')

  const handleSubmit= async (e)=>{
    e.preventDefault();
    dispatch(
      login({
       name:username
      })
      )
      // navigate('/Home');
  try{
    const response=await axios.post('http://localhost:8081/api/v1/auth/authenticate',{
        "name":username,
        "password":password
    });
    navigate('/Home');
    let token=response.data.token;
    let user=response.data.id;
    localStorage.setItem('token',token);
    localStorage.setItem('user',JSON.stringify(user));
}
catch(error){
    window.alert("Incorrect Username or Password !!!");
}
  
  

  // const handleSubmit= async (e)=>{
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:8081/api/v1/auth/authenticate",
  //       {
  //         name,
  //         password,
  //       },
  //     );

  //     console.log("Sign in successful");
  //     console.log(response.data); 
  //     navigate('/Home');

  //   } catch (error) {
  //     console.error("Registration failed");
  //     console.error(error); 

  //   }
}
  return (
    <div className="body1">
      <body className='loginbi'>
        <div className="appbox">
          <div className="App">
            <h1 className="apph1">LOGIN</h1>
            <center>
              <Avatar src="https://cdn-icons-png.flaticon.com/128/7606/7606103.png"></Avatar>
              <br></br>
            </center>
            <form onSubmit={handleSubmit}>

            <div className="appbox1">
              <input type="text"
              name="username"
                placeholder='Enter Username'
                variant="outlined"
                className="lo"
                value={username}
                onChange={(event) => setUsername(event.target.value)}                
                required
                />
              <br></br>
              <br></br>
              <input
                label="Password"
                variant="outlined"
                className="lo"
                placeholder='Enter password'
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}  
                required
              />
              <br></br>
              <br></br>
              <br></br>
              <center>

        <Button onSubmit={(e) => handleSubmit(e) } type="submit" variant="contained" className='submitbutton' >Login</Button>
         
                <br></br>
                <br></br>

                <h4 className='h4lp'>NewUser??</h4>
                <div className='lpdiv'>

                <Link to="/Re"><a href="#">Create New account</a></Link>
                </div>
              </center>
            </div>
            </form>
          </div>
        </div>
      </body>
    </div>
  );
  };
export default Loginpage;
