import React,{Component} from 'react'
import './Hotelform.css'
import axios from 'axios';
class Hotelform extends Component{
 
    constructor(props)
    {
      super(props);
      this.state={
         
          hotelname:'',
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
            ddate:'',
          dtime:'',
          noa:'',
         nok:'',
        dyhasr:'',
      };
  }

  handleHotelnameChange=(event)=>{
      this.setState({hotelname:event.target.value})
  };
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
handleDdteChange=(event)=>{
  this.setState({ddate:event.target.value})
};
handleDtimeChange=(event)=>{
  this.setState({dtime:event.target.value})
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





  

  handleSubmit = (event) => {
      event.preventDefault();
      const data = {
        hotelname:this.state.hotelname,
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
         ddate:this.state.ddate,
         dtime:this.state.dtime,
           noa:this.state.noa,
          nok:this.state.nok,
        dyhasr:this.state.dyhasr,
      };
      console.log(data);
     axios.post('http://localhost:8082/api/v1/user/posthotel',data)
      .then( alert("Successfully booked!!!"))
  };
  render(){
    return (
      <>
     <div className='hf'>

      <center>
      <h1>Hotel Reservation Form</h1>
      <p>please complete the form below</p>
      <hr></hr>
      <p>Your regiatration will be verified priar to your arrival</p>
      
      <div className='cform'>
  
      <form onSubmit={this.handleSubmit}>
      <p>Hotel Name(see previous page)<br></br></p>
     <input type="text" className='iname' value={this.state.hotelname} onChange={this.handleHotelnameChange} ></input>
     <p>First Name<br></br></p>
     <input type="text" className='iname' value={this.state.fname} onChange={this.handleFnameChange}></input>
     <p>Last Name</p>
     <input type="text" className='iname' value={this.state.lname} onChange={this.handleLnameChange}></input>
     <p>Address</p>
     <input type="text" className='iname1' value={this.state.address} onChange={this.handleAddressChange}></input>
     <p>Address Line 2</p>
     <input type="text" className='iname' value={this.state.address2} onChange={this.handleAddress2Change}></input>
     <p>city</p>
     <input type="text" className='iname1' value={this.state.city} onChange={this.handleCityChange}></input>
     <p>State</p>
     <input type="text" className='iname' value={this.state.state1} onChange={this.handleState1Change}></input>
     <p>Country</p>
     <input type="text" className='iname' value={this.state.country} onChange={this.handleCountryChange}></input>
     <p>Phone No</p>
     <input type="tel" className='iname' placeholder='(000) 000 - 0000' value={this.state.phoneno} onChange={this.handlePhonenoChange}></input>
     <p>Email</p>
     <input type="tel" className='iname' placeholder='ex:myname@example.com' value={this.state.email} onChange={this.handleEmailChange}></input>
     <p>Arrival - Date and Time</p>
     <input type="date" className='iname' value={this.state.adate} onChange={this.handleAdateChange}></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='time' className='iname3' value={this.state.atime} onChange={this.handleAtimeChange}></input>
     <p>Departure - Date and Time</p>
     <input type="date" className='iname' value={this.state.ddate} onChange={this.handleDdteChange}></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='time' className='iname3' value={this.state.dtime} onChange={this.handleDtimeChange}></input>
     <p>Number of Adults</p>
     <input type="tel" className='iname' placeholder='ex:5' value={this.state.noa} onChange={this.handleNoaChange}></input>
     <p>Number of kids</p>
     <input type="tel" className='iname' placeholder='ex:1' value={this.state.nok} onChange={this.handleNokChange}></input><br></br><br></br>
     <p>Do you have any special request?</p>
     <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder='Type here....' value={this.state.dyhasr} onChange={this.handleDyhasrChange}>
  </textarea><br></br><br></br>
  <button class="button-27" role="button">Submit</button>
  
      </form>
      </div>
      </center>
     </div>
      
      </>
    )
  }
  }

export default Hotelform