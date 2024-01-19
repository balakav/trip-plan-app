import axios from "axios";
import React, { Component } from "react";
import './Showdata.css'
class Showdata extends Component {
  state = {
  data: []
  }

  componentDidMount() {
  axios.get('http://localhost:8082/api/v1/user/bususer')
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
          <th>Id</th>
          <th>Name</th>
          <th>Genter</th>
          <th>Age</th>
          <th>From</th>
          <th>To</th>
          <th>Bustype</th>
          <th>Seattype</th>
          <th>StartDate</th>
          <th>StartTime</th>
          <th>EndDate</th>
          <th>EndTime</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.genter}</td>
            <td>{user.age}</td>
            <td>{user.from}</td>
            <td>{user.to}</td>
            <td>{user.bustype}</td>
            <td>{user.seattype}</td>
            <td>{user.startdate}</td>
            <td>{user.starttime}</td>
            <td>{user.enddate}</td>
            <td>{user.endtime}</td>
          </tr>
        ))}
      </tbody>
    </table>
    );
  }}
  
export default Showdata;