import React, { Component } from 'react'
import './Busform.css'
import axios from 'axios';

export default class Busform extends Component {
  constructor(props)
     {
       super(props);
       this.state={
          
         
           name:'',
          age:'',
          gender:'',
           startplace:'',
           endplace:'',
           phoneno:'',
            email:'',
            startdate:'',
            starttime:'',
          enddate:'',
          endtime:'',
         bustype:'',
         seattype:'',
       };
       
   }
   handleNameChange=(event)=>{
    this.setState({name:event.target.value})
};
handleAgeChange=(event)=>{
  this.setState({age:event.target.value})
};
handleGenderChange=(event)=>{
  this.setState({gender:event.target.value})
};
handleStartplaceChange=(event)=>{
  this.setState({startplace:event.target.value})
};
handleEndplaceChange=(event)=>{
  this.setState({endplace:event.target.value})
};
handlePhonenoChange=(event)=>{
  this.setState({phoneno:event.target.value})
};
handleEmailChange=(event)=>{
  this.setState({email:event.target.value})
};
handleStartdateChange=(event)=>{
  this.setState({startdate:event.target.value})
};
handleStarttimeChange=(event)=>{
  this.setState({starttime:event.target.value})
};
handleEnddateChange=(event)=>{
  this.setState({enddate:event.target.value})
};
handleEndtimeChange=(event)=>{
  this.setState({endtime:event.target.value})
};
handleBustypeChange=(event)=>{
  this.setState({bustype:event.target.value})
};
handleSeattypeChange=(event)=>{
  this.setState({seattype:event.target.value})
};

handleSubmit = (event) => {
  event.preventDefault();
  const data = {
   
    name:this.state.name,
    age:this.state.age,
    gender:this.state.gender,
    startplace:this.state.startplace,
    endplace:this.state.endplace,
    phoneno:this.state.phoneno,
   state1:this.state.state1,
   email:this.state.email,
    phoneno:this.state.phoneno,
    startdate:this.state.startdate,
    starttime:this.state.starttime,
    enddate:this.state.enddate,
      endtime:this.state.endtime,
      bustype:this.state.bustype,
      seattype:this.state. seattype,
  };
  console.log(data);
 axios.post('http://localhost:8082/api/v1/user/postbus',data)
  .then( alert("Successfully booked!!!"))
};
  render() {
    return (
      <>
      <center>
      <div className='busform'>

      <h1> Book Bus Ticket</h1>
      <p>*please complete the form below</p>
      <hr></hr>
      <form onSubmit={this.handleSubmit}>
        <p>Name</p>
        <input type="text" className='busodtpiname' value={this.state.name} onChange={this.handleNameChange}></input>
        <p>Age</p>
        <input type="number" className='busodtpiname' value={this.state.age} onChange={this.handleAgeChange}></input>

        <p>Gender</p>
        <input type="radio" id="html" name="gender"  value={this.setState.gender="Male"} onChange={this.handleGenderChange}></input>
            <label for="fm">Male</label>
       <input type="radio" id="css" name="gender" value={this.setState.gender="Female"} onChange={this.handleGenderChange}></input>
      <label for="fm" >Female</label>

        <p>Form</p>
        <input type="text" className='busodtpiname' value={this.state.startplace} onChange={this.handleStartplaceChange}></input>
        <p>To</p>
        <input type="text" className='busodtpiname' value={this.state.endplace} onChange={this.handleEndplaceChange}></input>
        <p>Startdate</p>
        <input type="date" className='busodtpiname' value={this.state.startdate} onChange={this.handleStartdateChange}></input>
        <p>Enddate</p>
        <input type="date" className='busodtpiname' value={this.state.enddate} onChange={this.handleEnddateChange}></input>
        <p>StartTime</p>
        <input type="time" className='busodtpiname' value={this.state.starttime} onChange={this.handleStarttimeChange}></input>
        <p>EndTime</p>
        <input type="time" className='busodtpiname' value={this.state.endtime} onChange={this.handleEndtimeChange}></input>
        <p>Mobile No</p>
        <input type="tel" className='busodtpiname' value={this.state.phoneno} onChange={this.handlePhonenoChange}></input>
        <p>Email</p>
        <input type="email" className='busodtpiname' value={this.state.email} onChange={this.handleEmailChange}></input><br></br><br></br><br></br>
        <label for="cars">BusType</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <select name="bus" id="bus" className='busodtpiname' value={this.state.bustype} onChange={this.handleBustypeChange}>
    <option value="AC">AC</option>
    <option value="Non-Ac">Non-Ac</option>
    <option value="Ultra Deluxe">Ultra Deluxe</option>
    <option value=" Deluxe">Deluxe</option>
  </select><br></br><br></br><br></br>
  <label for="cars">SeatType</label>&nbsp;&nbsp;&nbsp;&nbsp;
  <select name="st" id="st" className='busodtpiname' value={this.state.seattype} onChange={this.handleSeattypeChange}>
    <option value="seat">Seater</option>
    <option value="semi seater">Semi Seater</option>
    <option value="Sleeper">Sleeper</option>
  </select><br></br><br></br>
  <button class="button-27u8bus" role="button">Submit</button>
      </form>
      </div>
      </center>
      </>
    )
  }
}
