// import React,{Component} from 'react';
// import './Re.css'
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// class Re extends Component{

// //     constructor(props){
// //         super(props);
// //         this.state={
           
// //             name:'',
// //             email:'',
// //             password:'',
// //             confirmpassword:'',
// //         };
// //     }

// //     handleNameChange=(event)=>{
// //         this.setState({name:event.target.value})
// //     };
// //     handleEmailChange=(event)=>{
// //         this.setState({email:event.target.value})
// //     };
// //     handlePasswordChange=(event)=>{
// //         this.setState({password:event.target.value})
// //     };
// //     handleConfirmpasswordChange=(event)=>{
// //         this.setState({confirmpassword:event.target.value})
// //     };
    
// //          handleValid =()=>{
// //             if(this.state.name.length===0){
// //                 alert("->fill the name");
// //                 this.initialize1();

// //             }
// //             else if(this.state.name.length<6){
// //                 alert("->The is contains 6 characters");
// //                 this.initialize1();
// //             }
// //             else if(this.state.email.length===0){
// //                 alert("->fill the email");
// //                 this.initialize2();
// //             }
// //             else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(this.state.email)){
// //                 alert("@ is imporent");
// //                 this.initialize2();
// //             }
// //             else if(this.state.password.length===0){
// //                 alert("->fill the password");
// //                 this.initialize3();
// //             }
// //             else if(this.state.confirmpassword.length===0){
// //                 alert("->fill the confirmpassword");
// //                 this.initialize3();
// //             }
// //             else if(this.state.password<6){
// //                 alert("->The password contains 6 characters");
// //                 this.initialize3();
// //             }
// //             else if(this.state.password.includes(this.state.confirmpassword)===false){
// //                 alert("-> Password mismatching check password and confirmpassword");
// //                 this.initialize4();
// //             }
    
// //         }
// //         initialize1=()=>{
// //             this.setState.name='';
// //         }
// //         initialize2=()=>{
// //             this.setState.email='';
// //         }
// //         initialize3=()=>{
// //             this.setState.password='';
// //         }

// //         initialize4=()=>{
// //             this.setState.confirmpassword='';
// //         }


// //     handleSubmit = (event) => {
// //             event.preventDefault();
// //             const data = {
// //               name:this.state.name,
// //               email:this.state.email,
// //               password:this.state.password ,
// //               confirmpassword:this.state.confirmpassword, 
// //             };
           
// //             console.log(data);
// //            axios.post('http://127.0.0.1:8080/api/v1/auth/register',data)
// //             .then( alert("Successfully Registered"))
        
// //     };
// constructor(props) {
//     super(props);
//     this.state = {
//       name: '',
//       email: '',
//       password: '',
//       confirmpassword: '',
//     };
//   }

//   checkPassword = (e) => {
//    //const passwordRegex = /^[A-Za-z]\w{7,14}$/;
//     const { password, confirmpassword } = this.state;
//     if (this.state.password.length===0) {
//       window.alert(
//         'password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter'
//       );
//       this.initialize1();
//       return;
//     } 
//      if (password !== confirmpassword) {
//       window.alert('Passwords do not match.');
//       this.initialize2();
//       return;
//     } else {
//       window.alert('Registration Successful !!!');
//     }
//   };

//   initialize1 = () => {
//     this.setState({ password: '', confirmpassword: '' });
//   };

//   initialize2 = () => {
//     this.setState({ confirmpassword: '' });
//   };

//   handleNameChange = (event) => {
//     this.setState({ name: event.target.value });
//   };

//   handleEmailChange = (event) => {
//     this.setState({ email: event.target.value });
//   };

//   handlePasswordChange = (event) => {
//     this.setState({ password: event.target.value });
//   };

//   handleConfirmPasswordChange = (event) => {
//     this.setState({ confirmpassword: event.target.value });
//   };

//   handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { name, email,password } = this.state;
//       const response = await axios.post('http://127.0.0.1:8080/api/v1/auth/register', {
//         name,
//         email,
//         password,
//       });

//       console.log('Sign in successful');
//       console.log(response.data);
//       this.props.history.push('/');

//       // Clear form fields after successful registration
//       this.setState({
//         name: '',
//         email: '',
//         mobile: '',
//         password: '',
//         confirmpassword: '',
//       });
//     } catch (error) {
//       console.error('Registration failed');
//       console.error(error);
//     }
//   };
//     render(){
//     const { name, email,password, confirmpassword } = this.state;
//         return ( 
//             <body className='bodyre12'>
//                 <div className='rebox'>

//               <center>
//             <div className='container'>
//             <form onSubmit={this.handleSubmit}>
//                 <h1>Registration Form</h1>
                
//                     <p>Username</p>
//                     <input type="text" id='un' value={this.state.name}
//                         onChange={this.handleNameChange} className='reinput36'/><br></br>
//                     <p>Email</p>
//                     <input type="email" id='em'  value={this.state.email}
//                         onChange={this.handleEmailChange} className='reinput36'/><br></br           >
//                     <p>Password</p>
//                     <input type="password" id='pwd' placeholder='ex:qwS12#$' value={this.state.password}
//                         onChange={this.handlePasswordChange} className='reinput36'/><br></br>
//                     <p>Confirmpassword</p>
//                     <input type="password" id='cpwd' placeholder='ex:qwS12#$' value={this.state.confirmpassword }
//                         onChange={this.handleConfirmPasswordChange} className='reinput36'/><br></br><br></br><br></br>
//                 {/* <Link to='/Loginpage'> */}
//                      <button class="button-64" type="submit"  onClick={this.checkPassword}><span class="text">Submit</span></button>
//                      {/* </Link> */}
               
               
//             </form>
//             </div>
//             </center>
//                 </div>
//             </body>
//          );
//     }
// }

// export default Re





// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import './Re.css'
// import {useHistory} from 'react-router-dom'
// import axios from 'axios';

// class Re extends Component {
//     // history=useHistory();
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: '',
//       email: '',
//       password: '',
//       confirmpassword: '',
//     };
//   }

//   checkPassword = (e) => {
//    //const passwordRegex = /^[A-Za-z]\w{7,14}$/;
//     const { password, confirmpassword } = this.state;
//     if (this.state.password.length===0) {
//       window.alert(
//         'password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter'
//       );
//       this.initialize1();
//       return;
//     } 
//      if (password !== confirmpassword) {
//       window.alert('Passwords do not match.');
//       this.initialize2();
//       return;
//     } else {
//       window.alert('Registration Successful !!!');
//     }
//   };

//   initialize1 = () => {
//     this.setState({ password: '', confirmpassword: '' });
//   };

//   initialize2 = () => {
//     this.setState({ confirmpassword: '' });
//   };

//   handleNameChange = (event) => {
//     this.setState({ name: event.target.value });
//   };

//   handleEmailChange = (event) => {
//     this.setState({ email: event.target.value });
//   };

//   handlePasswordChange = (event) => {
//     this.setState({ password: event.target.value });
//   };

//   handleConfirmPasswordChange = (event) => {
//     this.setState({ confirmpassword: event.target.value });
//   };

//   handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { name, email,password } = this.state;
//       const response = await axios.post('http://127.0.0.1:8080/api/v1/auth/register', {
//         name,
//         email,
//         password,
//       });

//       console.log('Sign in successful');
//       console.log(response.data);
//       history.push('/Loginpage');

//       // Clear form fields after successful registration
//       this.setState({
//         name: '',
//         email: '',
//         mobile: '',
//         password: '',
//         confirmpassword: '',
//       });
//     } catch (error) {
//       console.error('Registration failed');
//       console.error(error);
//     }
//   };

//   render() {
//     const { name, email,password, confirmpassword } = this.state;

//     return (
//         <div className='rebox'> 

//       <div className="logo1">
//         <div className="signup-page">
//           <div className="signup1-page">
//             <div className='container'>
              
//             <h1>Registration Form</h1>
//               <form onSubmit={this.handleSubmit}>
//                 <h4 className="a1">Username</h4>
//                 <input
//                   type="text"
//                   className='reinput36'
//                   placeholder="Enter your Name"
//                   value={name}
//                   onChange={this.handleNameChange}
//                   required
//                 />

//                 <h4 className="a1">Email</h4>
//                 <input
//                   type="email"
//                   className='reinput36'
//                   placeholder="Enter your Email"
//                   value={email}
//                   onChange={this.handleEmailChange}
//                   required
//                 />

//                 <h4 className="a1">Password</h4>
//                 <input
//                   type="password"
//                   className='reinput36'
//                   placeholder="Enter New Password"
//                   value={password}
//                   onChange={this.handlePasswordChange}
//                   required
//                 />

//                 <h4 className="a1">Confirm Password</h4>
//                 <input
//                   type="password"
//                   className='reinput36'
//                   placeholder="Re Enter New Password"
//                   value={confirmpassword}
//                   onChange={this.handleConfirmPasswordChange}
//                   required
//                 />
//                 <br /><br></br><br></br><br></br>
//                 <center>

//                 <button type="submit" onClick={this.checkPassword} className="button-64">
//                   <b>Registration</b>
//                 </button>
//                 </center>
             
//               </form>
//               </div>
//           </div>
//         </div>
//       </div>
//         </div>
//     );
//   }
// }

// export default Re;













import React, { useState } from 'react';
import './Re.css';
import {Link, useNavigate} from "react-router-dom"
import axios from 'axios'
import background from './wal.jpg'



const SignupPage = () => {
     const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [mobile, setMobile] = useState('');
    // const [registrationError,setRegistrationError] = useState('');
    const navigate=useNavigate();

    const checkPassword = (e) =>{
      //const passwordRegex =/^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
      if (password.length===0 || password.length>=20) {
        window.alert(
          "Password should contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character."
        );
        initialize1()
        return;
      }
      else if (password !== confirmpassword) {
        window.alert("Passwords do not match.");
        initialize2()
        return;
      }
      else{
        window.alert("Registration Successful !!!");
      }
    }
    const initialize1 = () =>{
      setPassword('')
      setConfirmPassword('')
    }
    const initialize2 = () =>{
      setConfirmPassword('')
    }
  
    const handleNameChange = (event) => {
        setName(event.target.value);
      };
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
    
    const handleConfirmPasswordChange = (event) => {
      setConfirmPassword(event.target.value);
    };

    const handleMobileChange = (event) => {
      setMobile(event.target.value);
    };


    const handleSubmit= async (e)=>{
      e.preventDefault();
      try {
        const response = await axios.post(
          "http://localhost:8081/api/v1/auth/register",
          {
            name,
            email,
           // mobile,
            password,
            confirmpassword,
          },
        );
  
        console.log("Sign in successful");
        console.log(response.data); 
        navigate('/Loginpage');
  
        // setName("");
        // setEmail("");
        // setMobile("");
        // setPassword("");
        // setRegistrationError("");
      } catch (error) {
        console.error("Registration failed");
        console.error(error); 
  
      }
  }
    
  return (
  <div style={{ 
    backgroundImage: `url("https://png.pngtree.com/thumb_back/fh260/back_our/20190620/ourmid/pngtree-travel-plan-geometric-cartoon-blue-taobao-poster-background-image_152301.jpg")` 
  }}>
    <div className='body18'>
    <div className='r098'>
    
  <center>
    <div className='rebox'> 
    <div className='logo1'>
    <div className="container"> 
    <div className="signup1-page">
      <div className="signup-container">
      <h1 className='a12'>Registration Form</h1>
         <form onSubmit={handleSubmit}>
         <h4 className='a1'>Username</h4>
           <input
            type="text"
            className='reinput36'
            placeholder="Enter your Name"
            value={name}
            onChange={handleNameChange}
            required
          />

        <h4 className='a1'>Email</h4>
         <input
            type="email"
            className='reinput36'
            placeholder="Enter your Email"
            value={email}
            onChange={handleEmailChange}
            required
          />

          <h4 className='a1'>Password</h4>
          <input
            type="password"
            className='reinput36'
            placeholder="Enter New Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />

          <h4 className='a1'>Confirm Password</h4>
          <input
            type="password"
            className='reinput36'
            placeholder="Re Enter New Password"
            value={confirmpassword}
            onChange={handleConfirmPasswordChange}
            required
          /><br/><br></br><br></br>
          <center>

          <button type="submit" onClick={checkPassword} className='button-64'><b>Registration</b></button>
          </center>
           
        </form>
          </div>
      </div>
    </div>
    </div>
    </div>
    </center>
    </div>
    </div>
 </div>
  );
};

export default SignupPage

