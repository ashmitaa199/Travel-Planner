import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: '', psd: '' });
  const [error, setError] = useState('');
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleChange = (event, property) => {
    setData({ ...data, [property]: event.target.value });
  }

  const handleSubmission = async (event) => {
    event.preventDefault();

    if (!data.email || !data.psd) {
      setError("*Fill all fields");
      return;
    }

    setSubmitButtonDisabled(true);
    setError("");

    try {
      await signInWithEmailAndPassword(auth, data.email, data.psd);
      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitButtonDisabled(false);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-300">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>
        <form onSubmit={handleSubmission}>
          {/* Email field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Enter Email</label>
            <input
              id="email"
              type="email"
              placeholder="example@example.com"
              onChange={(e) => handleChange(e, 'email')}
              value={data.email}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Password field */}
          <div className="mb-4">
            <label htmlFor="psd" className="block text-sm font-medium text-gray-700">Enter Password</label>
            <input
              id="psd"
              type="password"
              placeholder="••••••••"
              onChange={(e) => handleChange(e, 'psd')}
              value={data.psd}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Error message */}
          {error && <p className="text-center text-red-500 mb-4">{error}</p>}

          <div className="flex flex-col items-center">
            <button
              type="submit"
              disabled={submitButtonDisabled}
              className={`w-full px-4 py-2 border border-transparent rounded-lg shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${submitButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;


// import React, { useState,useEffect } from 'react';

// import {Card, CardBody, CardHeader,Input,Col,Row, Container,Form, FormGroup,Label,Button, } from "reactstrap";

// import {Link,useNavigate} from "react-router-dom";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from '../firebase';



// const Login = () => {


//   const navigate =useNavigate();


//   //two way data binding-user changes reflect in these fields and changes in these fields will reflect on user data

//   const [data,setData]=useState({

   
//     email:'',
//     psd:'',
  
//   })

//   //we use usestate make changes and to relect or print the data we use use effect
//   const [error,setError]=useState("");

// //use effect
// //to print the data

// //   useEffect(()=>{
// //     console.log(data);

// //   }, [data])

//   //handle change

//   const handleChange=(event,property)=>{

//     setData({...data,[property]:event.target.value})//here we use callback ,
//     //callback run after the setData,b/c setData is asynchronous function
//     //getting all data of data object
//     // console.log(event.target.value)  //value we get when enter name

//   }



// //submitButtonDisabled
// const [submitButtonDisabled , setSubmitButtonDisabled]=useState(false);


// const submitForm=(event)=>{
//     event.preventDefault()
  
//    // data validate
//    //call server api for sending data
  
//   }

//  // data validate
//  //call server api for sending data



// //handleSubmission
// const handleSubmission=()=>{
//   if(!data.email || !data.psd){
//     setError("*Fill all fields");
//     return;
//   }
//   setSubmitButtonDisabled(true);
//   setError("");
//   //fireabse api calling for sign in

// signInWithEmailAndPassword(auth, data.email,data.psd)
//   .then(async(res) => {
//     setSubmitButtonDisabled(false);
   
// ///redirecting to home page
// navigate("/");

//     // console.log(user);
//   })
//   .catch((err) => {
//   setSubmitButtonDisabled(false);
//   setError(err.message);
 
// });


// }



//   return (
//     <div>
//       <Container>

//         <Row className='mt-5'>
//             <Col sm={{size:6, offset:3}}>

//             <Card color="dark" inverse>
//                 <CardHeader>

//                     <h3>
//                         Login Here !!
//                     </h3>

//                 </CardHeader>

//                 <CardBody>

//                     <Form onSubmit={submitForm}>
//                         {/* email field */}
//                         <FormGroup>
//                             <Label for="email">Enter Email
//                             </Label>
//                             <Input type="text" id="email" onChange={()=>handleChange(event,'email')}> 
//                             </Input>
//                         </FormGroup>
//                         <b>{error}</b>

//                         <FormGroup>
//                             <Label for="psd">Enter Your Password
//                             </Label>
//                             <Input type="Password" id="psd" onChange={()=>handleChange(event,'psd')}> 
//                             </Input>
//                         </FormGroup>

//                         <Container className='text-center'>
//                             <Button
//                              color="light"
//                               outline 
//                               onClick={handleSubmission}
//                               disabled={submitButtonDisabled}
//                               style={{
//                                 backgroundColor: submitButtonDisabled ? '#d3d3d3' : 'light', // Light gray when disabled
//                                 borderColor: submitButtonDisabled ? '#d3d3d3' : '',        // Light gray border when disabled
//                                 color: submitButtonDisabled ? '#a9a9a9' : '',               // Darker gray text when disabled
//                                 cursor: submitButtonDisabled ? 'not-allowed' : 'pointer'     // Change cursor style when disabled
//                               }}
//                               >
//                                 Login
//                             </Button>
                            
//                         </Container>

//                     </Form>

//                 </CardBody>
//             </Card>

//             </Col>

//         </Row>
//       </Container>
//     </div>
//   )
// }

// export default Login
