// // import { Avatar, Button } from '@mui/material'
// // import React, { Component } from 'react'
// // import './Loru.css'
// // import { Link } from 'react-router-dom'
// // export class Loru extends Component {
// //   render() {
// //     return (
// //       <>
// //       <body className='pagebody'>
// //       <img src={require('./wal.jpg')} alt="myLogo" height={720} width={900} className='reimag'>
// //      <div className='logobox1o'>
        
// //         </div>
// //       <center>
// //       <div className='loru1'>
// //         <div className='pagediv'>

// //         <center>
// //           <Link to='/Alogin'>

// //         <button class="button-27admain" role="button"><p className='pagepara'>Admin</p></button><br></br><br></br>
// //           </Link>
// //         <Link to='/Re'>
// //           <button class="button-27user" role="button"><p className='pagepara'>User</p></button>
// //           </Link>
// //         </center>
// //         </div>
// //       </div>
// //       </center>
// //       </img>
// //       </body>
      
// //       </>
// //     )
// //   }
// // }

// // export default Loru
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Avatar, Button } from '@mui/material';
// import './Loru.css';

// function Loru() {
//   return (
//     <div className='pagebody'>
//       <div className='logobox1o'></div>
//       <center>
//         <div className='loru1'>
//           <img src='https://images.wallpapersden.com/image/download/san-francisco-california-night_ZmxrZmuUmZqaraWkpJRma21lrWZlamU.jpg'></img>
//           <div className='pagediv'>
//             <center>
//               <Link to='/Alogin'>
//                 <button className="button-27admain" role="button">
//                   <p className='pagepara'>Admin</p>
//                 </button>
//               </Link>
//               <br /><br />
//               <Link to='/Re'>
//                 <button className="button-27user" role="button">
//                   <p className='pagepara'>User</p>
//                 </button>
//               </Link>
//             </center>
//           </div>
//         </div>
//       </center>
//     </div>
//   );
// }

// export default Loru;
import React from 'react';
import { Link } from 'react-router-dom';
import './Loru.css';

function Loru() {
  return (
    <div className='loruimg'>

    <div className='pagebody'>
      <div className='logobox1o'></div>
      <div className='loru1'>
        <div className='pagediv'>
          <center>
            <Link to='/Alogin'>
              <button className="button-27admain" role="button">
                <p className='pagepara'>Admin</p>
              </button>
            </Link>
            <br /><br />
            <Link to='/Loginpage'>
              <button className="button-27user" role="button">
                <p className='pagepara'>User</p>
              </button>
            </Link>
          </center>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Loru;

