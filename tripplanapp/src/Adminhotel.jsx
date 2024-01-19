import axios from "axios";
import React, { Component } from "react";
import './Adminhotel.css'
class Showdata extends Component {
  state = {
  data: []
  }

  componentDidMount() {
  axios.get('http://localhost:8082/api/v1/user/hotel')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.log(error);
    });
}


  render() {   
    return (
        
      <table border={1}>
      <thead>
        <tr>
          <th>Hid</th>
          <th>Hotel_Name</th>
          <th>First_Name</th>
          <th>Last_Name</th>
          <th>Address</th>
          <th>Address2</th>
          <th>City</th>
          <th>State1</th>
          <th>Country</th>
          <th>Phone_NO</th>
          <th>Arraivel_Date</th>
          <th>Arraivel_Time</th>
          <th>End_Date</th>
          <th>End_Time</th>
          <th>No_of_Kids</th>
          <th>NO_of_adults</th>
          <th>Use_Request</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(user => (
          <tr key={user.hid}>
            <td>{user.hid}</td>
            <td>{user.hotelname}</td>
            {/* <td>{user.name}</td> */}
            <td>{user.fname}</td>
            <td>{user.lname}</td>
            <td>{user.address}</td>
            <td>{user.address2}</td>
            <td>{user.city}</td>
            <td>{user.state1}</td>
            <td>{user.country}</td>
            <td>{user.phoneno}</td>
            <td>{user.adate}</td>
            <td>{user.atime}</td>
            <td>{user.ddate}</td>
            <td>{user.dtime}</td>
            <td>{user.nok}</td>
            <td>{user.noa}</td>
            <td>{user.dyhasr}</td>
          </tr>
        ))}
      </tbody>
    </table>
    );
  }}
  
export default Showdata;