import React, { Component } from 'react'
import './Familytrip.css'
import axios from 'axios';

class Familytrip extends Component {
     constructor(props)
     {
       super(props);
       this.state={
          
         
           fname:'',
           lname:'',
          address:'',
          address2:'',
           city:'',
           state1:'',
             country:'',
           phoneno:'',
            email:'',
            adate:'',
            atime:'',
           noa:'',
          nok:'',
         dyhasr:'',
       };
   }
 
   handleFnameChange=(event)=>{
       this.setState({fname:event.target.value})
   };
   handleLnameChange=(event)=>{
       this.setState({lname:event.target.value})
   };
   handleAddressChange=(event)=>{
       this.setState({address:event.target.value})
   };
   handleAddress2Change=(event)=>{
     this.setState({address2:event.target.value})
 };
 handleCityChange=(event)=>{
   this.setState({city:event.target.value})
 };
 handleState1Change=(event)=>{
   this.setState({state1:event.target.value})
 };
 handleCountryChange=(event)=>{
   this.setState({country:event.target.value})
 };
 handlePhonenoChange=(event)=>{
   this.setState({phoneno:event.target.value})
 };
 handleEmailChange=(event)=>{
   this.setState({email:event.target.value})
 };
 handleAdateChange=(event)=>{
   this.setState({adate:event.target.value})
 };
 handleAtimeChange=(event)=>{
     this.setState({atime:event.target.value})
   };
   
 handleNoaChange=(event)=>{
   this.setState({noa:event.target.value})
 };
 handleNokChange=(event)=>{
   this.setState({nok:event.target.value})
 };
 handleDyhasrChange=(event)=>{
   this.setState({dyhasr:event.target.value})
 };
 
 
 
 
 
   
 
   handleSubmit1 = (event) => {
       event.preventDefault();
       const data = {
        
         fname:this.state.fname,
         lname:this.state.lname,
        address:this.state.address,
       address2:this.state.address2,
       city:this.state.city,
        state1:this.state.state1,
         country:this.state.country,
         phoneno:this.state.phoneno,
         email:this.state.email,
          adate:this.state.adate,
           atime:this.state.atime,
            noa:this.state.noa,
           nok:this.state.nok,
         dyhasr:this.state.dyhasr,
       };
       console.log(data);
      axios.post('http://localhost:8082/api/v1/user/postfamily',data)
       .then( alert("Successfully booked!!!"))
   };
     render(){

          return (
            <>
            <div className='fbodybgodtp'>
        
            <center>
            <div className='fodtpbox1'>
           <h1>Family Trip Plan Form </h1>
           <p>*please complete the form below</p>
           <hr></hr>
            <form onSubmit={this.handleSubmit1}>
                <div className='odtpfl'>
        
           <p>First Name<br></br></p>
           <input type="text" className='fodtpiname' value={this.state.fname} onChange={this.handleFnameChange}></input>
           <p>Address</p>
           <input type="text" className='fodtpiname1' value={this.state.address} onChange={this.handleAddressChange}></input>
           
           <p>city</p>
           <input type="text" className='fodtpiname1' value={this.state.city} onChange={this.handleCityChange}></input>
           <p>Country</p>
           <input type="text" className='fodtpiname' value={this.state.country} onChange={this.handleCountryChange}></input>
            
           <p>Phone No</p>
           <input type="tel" className='fodtpiname' placeholder='(000) 000 - 0000' value={this.state.phoneno} onChange={this.handlePhonenoChange}></input>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p>Do you have any special request?</p>
           <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder='Type here....'  value={this.state.dyhasr} onChange={this.handleDyhasrChange}>
        </textarea><br></br><br></br>
           <p>Number of kids</p>
           <input type="number" className='fodtpiname' placeholder='ex:1' value={this.state.nok} onChange={this.handleNokChange}></input><br></br><br></br>
                </div>
                <div className='odtpfr'>
           <p>Last Name</p>
           <input type="text" className='fodtpiname' value={this.state.lname} onChange={this.handleLnameChange}></input>
           <p>Address Line 2</p>
           <input type="text" className='fodtpiname' value={this.state.address2} onChange={this.handleAddress2Change}></input>
           <p>State</p>
           <input type="text" className='fodtpiname' value={this.state.state1} onChange={this.handleState1Change}></input>
           <p>Number of Adults</p>
           <input type="number" className='fodtpiname' placeholder='ex:5' value={this.state.noa} onChange={this.handleNoaChange}></input>
           <p>Arrival - Date and Time</p>
           <input type="date" className='fodtpiname' value={this.state.adate} onChange={this.handleAdateChange}></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='time' className='modtpiname3' value={this.state.atime} onChange={this.handleAtimeChange}></input>
           <p>Email</p>
           <input type="email" className='fodtpiname' value={this.state.email} onChange={this.handleEmailChange}></input>
                </div>
           <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
           <button className="button-27u8f" role="button">Submit</button>
            </form>
            </div>
            </center>
            </div>
            </>
          )
        }
     }

export default Familytrip