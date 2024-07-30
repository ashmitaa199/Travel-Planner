import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from './components/Nav.jsx';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';

const Signup = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ name: '', email: '', password: '', confirmPassword: '', about: '' });
  const [error, setError] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleChange = (event, property) => {
    setData({ ...data, [property]: event.target.value });
  };

  const resetData = () => {
    setData({ name: '', email: '', password: '', confirmPassword: '', about: '' });
    setError("");
  };

  const handleSubmission = async (event) => {
    event.preventDefault();

    if (!data.name || !data.email || !data.password || !data.confirmPassword) {
      setError("*Fill all fields");
      return;
    }

    if (data.password !== data.confirmPassword) {
      setError("*Passwords do not match");
      return;
    }

    setSubmitButtonDisabled(true);
    setError("");

    try {
      const res = await createUserWithEmailAndPassword(auth, data.email, data.password);
      const user = res.user;
      await updateProfile(user, { displayName: data.name });
      navigate("/onboarding");
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitButtonDisabled(false);
    }
  };

  return (
    <div className='bg-gradient-to-r from-blue-100 to-blue-200'>
      <Nav />

      <div className="flex items-center justify-center min-h-screen  mt-0 ">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Create Account!!</h2>
          <form onSubmit={handleSubmission}>
            {/* Name field */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Enter Name</label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                onChange={(e) => handleChange(e, 'name')}
                value={data.name}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            {/* Email field */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Enter Email</label>
              <input
                id="email"
                type="email"
                placeholder="example@example.com"
                onChange={(e) => handleChange(e, 'email')}
                value={data.email}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            {/* Password field */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Enter Password</label>
              <input
                id="password"
                type="password"
                placeholder="******"
                onChange={(e) => handleChange(e, 'password')}
                value={data.password}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            {/* Confirm Password field */}
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="******"
                onChange={(e) => handleChange(e, 'confirmPassword')}
                value={data.confirmPassword}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-between">
              <button
                type="submit"
                disabled={submitButtonDisabled}
                className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${submitButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                Submit
              </button>
              <button
                type="button"
                onClick={resetData}
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Reset
              </button>
            </div>
          </form>
          {error && <p className="text-center text-red-500 mt-2">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Signup;


// import {Card, CardBody, CardHeader,Input,Col,Row, Container,Form, FormGroup,Label,Button, } from "reactstrap";
// import React, { useState,useEffect } from 'react';
// import {Link,useNavigate} from "react-router-dom";
// import { createUserWithEmailAndPassword , updateProfile } from "firebase/auth";
// import { auth } from '../firebase';

// const Signup = () => {
  
//   const navigate =useNavigate();


//   //two way data binding-user changes reflect in these fields and changes in these fields will reflect on user data

//   const [data,setData]=useState({

//     name:'',
//     email:'',
//     password:'',
//     about:'',

//   })

//   //we use usestate make changes and to relect or print the data we use use effect
//   const [error,setError]=useState("");

// //use effect
// //to print the data

//   useEffect(()=>{
//     console.log(data);

//   }, [data])

//   //handle change

//   const handleChange=(event,property)=>{

//     setData({...data,[property]:event.target.value})//here we use callback ,
//     //callback run after the setData,b/c setData is asynchronous function
//     //getting all data of data object
//     // console.log(event.target.value)  //value we get when enter name

//   }

// //reset the form

// const resetData=()=>{
//   setData({

//     name:'',
//     email:'',
//     password:'',
//     about:'',

//   })
//    setError("");
// }

// //submitButtonDisabled
// const [submitButtonDisabled , setSubmitButtonDisabled]=useState(false);

// //subbitForm

// const submitForm=(event)=>{
//   event.preventDefault()

//  // data validate
//  //call server api for sending data

// }

// //handleSubmission
// const handleSubmission=()=>{
//   if(!data.name || !data.email || !data.password){
//     setError("*Fill all fields");
//     return;
//   }
//   setSubmitButtonDisabled(true);
//   setError("");
//   //fireabse api calling
//   createUserWithEmailAndPassword(auth, data.email,data.password)
//   .then(async(res) => {
//     setSubmitButtonDisabled(false);
//     const user=res.user;
//     await updateProfile(user, {
//       displayName:data.name,
//     });
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
//       <Container >

//         <Row className="mt-4">

//           <Col sm={{size:6,offset:3}}>

//           <Card color="dark" inverse className="rounded-xl">

//         <CardHeader>
//           Fill information to register!!
//         </CardHeader>

//         <CardBody>

//           <Form onSubmit={submitForm}>

//           {/* Name field */}
//             <FormGroup>
//               <Label for="name">Enter name </Label>
//               <Input 
//               id="name"
//               type="text"
//               placeholder="Enter here"
//               //dynamic seetting fields
//               onChange={()=>handleChange(event,'name')}
//               value={data.name}
              
//               />
//             </FormGroup>

//           {/* email field */}

//           <FormGroup>
//               <Label for="email">Enter your Email
//               </Label>
//               <Input 
//               id="email" 
//               type="email" 
//               placeholder="Enter here"
//                onChange={()=>handleChange(event,'email')}
//                value={data.email}// for two way data binding
//                />
//             </FormGroup>

//             <FormGroup>

//               <Label for="password"> Enter Password </Label>
//               <Input 
//               id="password" 
//               type="password"
//                placeholder="Enter here"
//                onChange={()=>handleChange(event,'password')}
//                value={data.password}
            
//               />
//               <Label for="about"> Enter Password </Label>
//               <Input
//                id="about"
//                 type="textarea" 
//                 placeholder="Enter here"

//               style={{height:"100px"}}
//               onChange={()=>handleChange(event,'about')}
//               value={data.about}
//               />
               
//             </FormGroup>
//             <Container className="text-center">
//             <Button 
//             color="light"
//              outline
//              onClick={handleSubmission}
//              disabled={submitButtonDisabled}
//              style={{
//               backgroundColor: submitButtonDisabled ? '#d3d3d3' : 'light', // Light gray when disabled
//               borderColor: submitButtonDisabled ? '#d3d3d3' : '',        // Light gray border when disabled
//               color: submitButtonDisabled ? '#a9a9a9' : '',               // Darker gray text when disabled
//               cursor: submitButtonDisabled ? 'not-allowed' : 'pointer'     // Change cursor style when disabled
//             }}
//             > Register 
//             </Button> {/*  HANDLEsUBMISSION */}
//             <Button onClick={resetData}
//              color="secondary"
//              outline type="reset" 
//              className="ms-2"> Reset </Button>
//             </Container>
 

//           </Form>

//         </CardBody>
       
//       </Card>

//      </Col>

//   </Row>
//     <b className="font-bold text-sm text-red-600"> {error}</b>
     
// </Container>
//     </div>
//   )
// }

// export default Signup;
