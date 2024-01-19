import axios from "axios";
import React, { Component } from "react";
import './Adminfeedback.css'
class Showdata extends Component {
  state = {
  data: []
  }

  componentDidMount() {
  axios.get('http://localhost:8082/api/v1/user/feedback')
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
        <tr className="fb">
          <th>Id</th>
          <th>First_Name</th>
          <th>Last_Name</th>
          <th>Email</th>
          <th>Rating</th>
          <th>Comment</th>
          {/* <th>Phone_Number</th> */}
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(user => (
          <tr key={user.feedbackid}>
            <td>{user.feedbackid}</td>
            <td>{user.fname}</td>
            <td>{user.lname}</td>
            <td>{user.email}</td>
            <td>{user.rating}</td>
            <td>{user.wdyhim}</td>
         
            {/* <td>{user.phoneno}</td> */}
          </tr>
        ))}
      </tbody>
    </table>
    );
  }}
  
export default Showdata;