// import React, {useState} from 'react';
// import './SignUp.scss'
// import axios from "axios";
//
// const SignUp = () => {
//     const [value, setValue] = useState({
//         fullName: "",
//         phoneNumber: "",
//         image: "https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png",
//         password: "",
//         repeatPassword: ""
//     })
//
//
//     ``
//
//     // async function signUp(){
//    //      await axios.post(`http://3.93.51.230/api/auth/sign-up` , value).then(res => {
//    //          alert('yes')
//    //          console.log(res.data)
//    //          localStorage.setItem('token' , res.data.token)
//    //          localStorage.setItem('role' , res.data.role)
//    //      }).catch((error) => {
//    //          alert('no')
//    //      })
//    //  }
//     return (
//         <div id='signUp'>
//             <div className="container">
//                 <div className="signUp">
//                     <div className='signUp--text'>
//                         <input onChange={(e) => setValue({...value, fullName: e.target.value})} type="text" placeholder='Аты-жөнү'/>
//                         <input value={value.phoneNumber} onChange={(e) => setValue({...value, phoneNumber: e.target.value})} type="text" placeholder='телефон'/>
//                         <input value={value.password} onChange={(e) => setValue({...value, password: e.target.value})} type="text" placeholder='купуя сөз'/>
//                         <input onChange={(e) => setValue({...value, repeatPassword: e.target.value})} type="text" placeholder='купуя сөз'/>
//                         <button>Катталуу</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default SignUp;