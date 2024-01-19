// import React from 'react';
// import { connect } from 'react-redux';
// import './Feedback.css';
// import {
//   updateFirstName,
//   updateLastName,
//   updateEmail,
//   updatePhoneNumber,
//   updateRating,
//   updateQuery,
//   submitForm
// } from './actions';

// function Feedback(props) {
//   const {
//     firstName,
//     lastName,
//     email,
//     phoneNumber,
//     rating,
//     query,
//     isSubmitted,
//     formError,
//     handleFirstNameChange,
//     handleLastNameChange,
//     handleEmailChange,
//     handlePhoneNumberChange,
//     handleRatingChange,
//     handleQueryChange,
//     handleSubmit,
//     isFormValid
//   } = props;

//   return (
//     <div>
//       <div className="contact_us_2">
//         <div className="responsive-container8-block big-container8">
//           <div className="blueBG"></div>
//           <div className="responsive-container8-block container8">
//             <center>

           
//             <form className="form-box" onSubmit={handleSubmit}>
//               <div className="container8-block form-wrapper">
//                 <p className="text-blk contactus-head">Great To See You Here</p>
//                 <p className="text-blk contactus-subhead">Your Feedbacks Are Valuable To Us</p>
//                 <div className="responsive-container8-block">
//                   <div className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6" id="i10mt">
//                     <p className="text-blk input-title">FIRST NAME</p>
//                     <input
//                       type="text"
//                       className="input"
//                       id="ijowk"
//                       name="FirstName"
//                       placeholder="Enter first name..."
//                       required
//                       value={firstName}
//                       onChange={handleFirstNameChange}
//                     />
//                   </div>
//                   <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
//                     <p className="text-blk input-title">LAST NAME</p>
//                     <input
//                       type="text"
//                       className="input"
//                       id="indfi"
//                       name="Last Name"
//                       placeholder="Enter last name..."
//                       required
//                       value={lastName}
//                       onChange={handleLastNameChange}
//                     />
//                   </div>
//                   <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
//                     <p className="text-blk input-title">EMAIL</p>
//                     <input
//                       type="email"
//                       className="input"
//                       id="ipmgh"
//                       name="Email"
//                       placeholder="Enter email..."
//                       required
//                       value={email}
//                       onChange={handleEmailChange}
//                     />
//                   </div>
//                   <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
//                     <p className="text-blk input-title">PHONE NUMBER</p>
//                     <input
//                       type="tel"
//                       className="input"
//                       id="imgis"
//                       name="PhoneNumber"
//                       placeholder="Enter phone number..."
//                       required
//                       value={phoneNumber}
//                       onChange={handlePhoneNumberChange}
//                     />
//                     </div>
//                     <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
//                     <p className="text-blk input-title">Rating</p>
//                     <input
//                       type="number"
//                       className="input"
//                       id="imgis"
//                       name="rating"
//                       placeholder="out 0f 10"
//                       required
//                       value={rating}
//                       onChange={handleRatingChange}
//                     />
//                   </div>
//                   <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i">
//                     <p className="text-blk input-title">WHAT DO YOU HAVE IN MIND?</p>
//                     <textarea
//                       type="text"
//                       className="textinput"
//                       id="i5vyy"
//                       placeholder="Please enter query..."
//                       required
//                       value={query}
//                       onChange={handleQueryChange}
//                     ></textarea>
//                   </div>
//                 </div>
//                 {formError && <div className="error-message">{formError}</div>}
//                 {isSubmitted ? (
//                   <div className="feedback-message">
//                     Feedback Submitted <span className="tick-mark">&#10004;</span>
//                   </div>
//                 ) : (
//                   <button class="button-27" role="button" disabled={!isFormValid}>Submit</button>
//                 )}
//               </div>
//             </form>
//             </center>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// const mapStateToProps = (state) => {
//   const { firstName, lastName, email, phoneNumber, query, isSubmitted, formError } = state;
//   const isFormValid = firstName !== '' && lastName !== '' && email !== '' && phoneNumber !== '' && query !== '';

//   return {
//     firstName,
//     lastName,
//     email,
//     phoneNumber,
//     query,
//     isSubmitted,
//     formError,
//     isFormValid
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     handleFirstNameChange: (event) => dispatch(updateFirstName(event.target.value)),
//     handleLastNameChange: (event) => dispatch(updateLastName(event.target.value)),
//     handleEmailChange: (event) => dispatch(updateEmail(event.target.value)),
//     handlePhoneNumberChange: (event) => dispatch(updatePhoneNumber(event.target.value)),
//     handleQueryChange: (event) => dispatch(updateQuery(event.target.value)),
//     handleSubmit: (event) => {
//       event.preventDefault();
//       dispatch(submitForm());
//     }
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Feedback);




// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import axios  from 'axios'
// import './Feedback.css';
// import {
//   updateFirstName,
//   updateLastName,
//   updateEmail,
//   updatePhoneNumber,
//   updateRating,
//   updateQuery,
//   submitForm
// } from './actions';
// import { Axios } from 'axios';

// class Feedback extends Component {
//   constructor(props)
//   {
//     super(props);
//     this.state={
       
      
//         fname:'',
//         lname:'',
//         phoneno:'',
//          email:'',
//          rating:'',
//          wdyhim:'',
//     };
// }

// handleFnameChange=(event)=>{
//     this.setState({fname:event.target.value})
// };
// handleLnameChange=(event)=>{
//     this.setState({lname:event.target.value})
// };
// handlePhonenoChange=(event)=>{
// this.setState({phoneno:event.target.value})
// };
// handleEmailChange=(event)=>{
// this.setState({email:event.target.value})
// };
// handleRatingChange=(event)=>{
// this.setState({rating:event.target.value})
// };
// handleWdyhimChange=(event)=>{
//   this.setState({wdyhim:event.target.value})
// };







// handleSubmit = (event) => {
//     event.preventDefault();
//     const data = {
     
//       fname:this.state.fname,
//       lname:this.state.lname,
//       phoneno:this.state.phoneno,
//       email:this.state.email,
//       rating:this.state.rating,
//       wdyhim:this.state.wdyhim,
//     };
//     console.log(data);
//    axios.post('http://localhost:8082/api/v1/user/postfeedback',data)
//     .then( alert("Successfully complied!!!"))
// };
//   render() {
//     const {
//       firstName,
//       lastName,
//       email,
//       phoneNumber,
//       rating,
//       query,
//       isSubmitted,
//       formError,
//       handleFirstNameChange,
//       handleLastNameChange,
//       handleEmailChange,
//       handlePhoneNumberChange,
//       handleRatingChange,
//       handleQueryChange,
//       handleSubmit,
//       isFormValid
//     } = this.props;

//     return (
//       <div>
//         <div className="contact_us_2">
//           <div className="responsive-container8-block big-container8">
//             <div className="blueBG"></div>
//             <div className="responsive-container8-block container8">
//               <center>
//                 <form className="form-box" onSubmit={this.handleSubmit}>
//                   <div className="container8-block form-wrapper">
//                     <p className="text-blk contactus-head">Great To See You Here</p>
//                     <p className="text-blk contactus-subhead">Your Feedbacks Are Valuable To Us</p>
//                     <div className="responsive-container8-block">
//                       <div className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6" id="i10mt">
//                         <p className="text-blk input-title">FIRST NAME</p>
//                         <input
//                           type="text"
//                           className="input"
//                           id="ijowk"
//                           name="FirstName"
//                           placeholder="Enter first name..."
//                           required
//                           value={this.state.fname} onChange={this.handleFnameChange}
//                         />
//                       </div>
//                       <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
//                         <p className="text-blk input-title">LAST NAME</p>
//                         <input
//                           type="text"
//                           className="input"
//                           id="indfi"
//                           name="Last Name"
//                           placeholder="Enter last name..."
//                           required
//                           value={this.state.lname} onChange={this.handleLnameChange}
//                         />
//                       </div>
//                       <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
//                         <p className="text-blk input-title">EMAIL</p>
//                         <input
//                           type="email"
//                           className="input"
//                           id="ipmgh"
//                           name="Email"
//                           placeholder="Enter email..."
//                           required
//                           value={this.state.email} onChange={this.handleEmailChange}
//                         />
//                       </div>
//                       <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
//                         <p className="text-blk input-title">PHONE NUMBER</p>
//                         <input
//                           type="tel"
//                           className="input"
//                           id="imgis"
//                           name="PhoneNumber"
//                           placeholder="Enter phone number..."
//                           required
//                           value={this.state.phoneno} onChange={this.handlePhonenoChange}
//                         />
//                       </div>
//                       <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
//                         <p className="text-blk input-title">Rating</p>
//                         <input
//                           type="number"
//                           className="input"
//                           id="imgis"
//                           name="rating"
//                           placeholder="out 0f 10"
//                           required
//                           value={this.state.rating} onChange={this.handleRatingChange}
//                         />
//                       </div>
//                       <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i">
//                         <p className="text-blk input-title">WHAT DO YOU HAVE IN MIND?</p>
//                         <textarea
//                           type="text"
//                           className="textinput"
//                           id="i5vyy"
//                           placeholder="Please enter query..."
//                           required
//                           value={this.state.wdyhim} onChange={this.handleWdyhimChange}
//                         ></textarea>
//                       </div>
//                     </div><br></br><br></br>
//                     {formError && <div className="error-message">{formError}</div>}
//                     {isSubmitted ? (
//                       <div className="feedback-message">
//                         Feedback Submitted <span className="tick-mark">&#10004;</span>
//                       </div>
//                     ) : (
//                       <button className="button-27" role="button" disabled={!isFormValid}>
//                         Submit
//                       </button>
//                     )}
//                   </div>
//                 </form>
//               </center>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   const { firstName, lastName, email, phoneNumber, query, isSubmitted, formError } = state;
//   const isFormValid =
//     firstName !== '' && lastName !== '' && email !== '' && phoneNumber !== '' && query !== '';

//   return {
//     firstName,
//     lastName,
//     email,
//     phoneNumber,
//     query,
//     isSubmitted,
//     formError,
//     isFormValid,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     handleFirstNameChange: (event) => dispatch(updateFirstName(event.target.value)),
//     handleLastNameChange: (event) => dispatch(updateLastName(event.target.value)),
//     handleEmailChange: (event) => dispatch(updateEmail(event.target.value)),
//     handlePhoneNumberChange: (event) => dispatch(updatePhoneNumber(event.target.value)),
//     handleQueryChange: (event) => dispatch(updateQuery(event.target.value)),
//     handleSubmit: (event) => {
//       event.preventDefault();
//       dispatch(submitForm());
//     },
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Feedback);


import React, { Component } from 'react';
import axios from 'axios';
import './Feedback.css';
import {
  updateFirstName,
  updateLastName,
  updateEmail,
  updatePhoneNumber,
  updateRating,
  updateQuery,
  submitForm
} from './actions';
 import { connect } from 'react-redux';
class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      phoneno: '',
      email: '',
      rating: '',
      wdyhim: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({fname:event.target.value });
  };
  handleLnameChange=(event)=>{
    this.setState({lname:event.target.value})
  };
  handlePhonenoChange=(event)=>{
    this.setState({phoneno:event.target.value})
  };
  handleEmailChange=(event)=>{
    this.setState({email:event.target.value})
  };
  handleRatingChange=(event)=>{
    this.setState({rating:event.target.value})
  };
  handleWdyhimChange=(event)=>{
    this.setState({wdyhim:event.target.value})
  };


  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      fname: this.state.fname,
      lname: this.state.lname,
      phoneno: this.state.phoneno,
      email: this.state.email,
      rating: this.state.rating,
      wdyhim: this.state.wdyhim,
    };
    console.log(data);
    axios.post('http://localhost:8082/api/v1/user/postfeedback', data)
      .then(() => alert("Successfully complied!!!"))
      .catch((error) => console.error("Error submitting feedback:", error));
  };

  render() {
    const {
            firstName,
            lastName,
            email,
            phoneNumber,
            rating,
            query,
            isSubmitted,
            formError,
            handleFirstNameChange,
            handleLastNameChange,
            handleEmailChange,
            handlePhoneNumberChange,
            handleRatingChange,
            handleQueryChange,
            handleSubmit,
            isFormValid
          } = this.props;
    return (
      <div>
        <div className="contact_us_2">
          <div className="responsive-container8-block big-container8">
            <div className="blueBG"></div>
            <div className="responsive-container8-block container8">
              <center>
                <form className="form-box" onSubmit={this.handleSubmit}>
                  <div className="container8-block form-wrapper">
                    <p className="text-blk contactus-head">Great To See You Here</p>
                    <p className="text-blk contactus-subhead">Your Feedbacks Are Valuable To Us</p>
                    <div className="responsive-container8-block">
                      <div className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6" id="i10mt">
                        <p className="text-blk input-title">FIRST NAME</p>
                        <input
                          type="text"
                          className="input"
                          id="ijowk"
                          name="fname"
                          placeholder="Enter first name..."
                          required
                          value={this.state.fname}
                          onChange={this.handleInputChange}
                        />
                      </div>
                      <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                        <p className="text-blk input-title">LAST NAME</p>                         
                        <input
                          type="text"
                          className="input"
                          id="indfi"
                          name="Last Name"
                          placeholder="Enter last name..."
                          required
                          value={this.state.lname} onChange={this.handleLnameChange}
                        />
                      </div>
                      <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                        <p className="text-blk input-title">EMAIL</p>
                        <input
                          type="email"
                          className="input"
                          id="ipmgh"
                          name="Email"
                          placeholder="Enter email..."
                          required
                          value={this.state.email} onChange={this.handleEmailChange}
                        />
                      </div>
                      <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                        <p className="text-blk input-title">PHONE NUMBER</p>
                        <input
                          type="tel"
                          className="input"
                          id="imgis"
                          name="PhoneNumber"
                          placeholder="Enter phone number..."
                          required
                          value={this.state.phoneno} onChange={this.handlePhonenoChange}
                        />
                      </div>
                      <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                        <p className="text-blk input-title">Rating</p>
                        <input
                          type="number"
                          className="input"
                          id="imgis"
                          name="rating"
                          placeholder="out 0f 10"
                          required
                          value={this.state.rating} onChange={this.handleRatingChange}
                        />
                      </div>
                      <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i">
                        <p className="text-blk input-title">WHAT DO YOU HAVE IN MIND?</p>
                        <textarea
                          type="text"
                          className="textinput"
                          id="i5vyy"
                          placeholder="Please enter query..."
                          required
                          value={this.state.wdyhim} onChange={this.handleWdyhimChange}
                        ></textarea>
                      </div>
                      
                    </div>
                    <br></br><br></br>
                    <button className="button-27" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </center>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { firstName, lastName, email, phoneNumber, query, isSubmitted, formError } = state;
  const isFormValid =
    firstName !== '' && lastName !== '' && email !== '' && phoneNumber !== '' && query !== '';

  return {
    firstName,
    lastName,
    email,
    phoneNumber,
    query,
    isSubmitted,
    formError,
    isFormValid,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleFirstNameChange: (event) => dispatch(updateFirstName(event.target.value)),
    handleLastNameChange: (event) => dispatch(updateLastName(event.target.value)),
    handleEmailChange: (event) => dispatch(updateEmail(event.target.value)),
    handlePhoneNumberChange: (event) => dispatch(updatePhoneNumber(event.target.value)),
    handleQueryChange: (event) => dispatch(updateQuery(event.target.value)),
    handleSubmit: (event) => {
      event.preventDefault();
      dispatch(submitForm());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Feedback);

