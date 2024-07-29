import React, { useState,useEffect } from 'react';

import {Card, CardBody, CardHeader,Input,Col,Row, Container,Form, FormGroup,Label,Button, } from "reactstrap";

import {Link,useNavigate} from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';



const Login = () => {


  const navigate =useNavigate();


  //two way data binding-user changes reflect in these fields and changes in these fields will reflect on user data

  const [data,setData]=useState({

   
    email:'',
    psd:'',
  
  })

  //we use usestate make changes and to relect or print the data we use use effect
  const [error,setError]=useState("");

//use effect
//to print the data

//   useEffect(()=>{
//     console.log(data);

//   }, [data])

  //handle change

  const handleChange=(event,property)=>{

    setData({...data,[property]:event.target.value})//here we use callback ,
    //callback run after the setData,b/c setData is asynchronous function
    //getting all data of data object
    // console.log(event.target.value)  //value we get when enter name

  }



//submitButtonDisabled
const [submitButtonDisabled , setSubmitButtonDisabled]=useState(false);


const submitForm=(event)=>{
    event.preventDefault()
  
   // data validate
   //call server api for sending data
  
  }

 // data validate
 //call server api for sending data



//handleSubmission
const handleSubmission=()=>{
  if(!data.email || !data.psd){
    setError("*Fill all fields");
    return;
  }
  setSubmitButtonDisabled(true);
  setError("");
  //fireabse api calling for sign in

signInWithEmailAndPassword(auth, data.email,data.psd)
  .then(async(res) => {
    setSubmitButtonDisabled(false);
   
///redirecting to home page
navigate("/");

    // console.log(user);
  })
  .catch((err) => {
  setSubmitButtonDisabled(false);
  setError(err.message);
 
});


}



  return (
    <div>
      <Container>

        <Row className='mt-5'>
            <Col sm={{size:6, offset:3}}>

            <Card color="dark" inverse>
                <CardHeader>

                    <h3>
                        Login Here !!
                    </h3>

                </CardHeader>

                <CardBody>

                    <Form onSubmit={submitForm}>
                        {/* email field */}
                        <FormGroup>
                            <Label for="email">Enter Email
                            </Label>
                            <Input type="text" id="email" onChange={()=>handleChange(event,'email')}> 
                            </Input>
                        </FormGroup>
                        <b>{error}</b>

                        <FormGroup>
                            <Label for="psd">Enter Your Password
                            </Label>
                            <Input type="Password" id="psd" onChange={()=>handleChange(event,'psd')}> 
                            </Input>
                        </FormGroup>

                        <Container className='text-center'>
                            <Button
                             color="light"
                              outline 
                              onClick={handleSubmission}
                              disabled={submitButtonDisabled}
                              style={{
                                backgroundColor: submitButtonDisabled ? '#d3d3d3' : 'light', // Light gray when disabled
                                borderColor: submitButtonDisabled ? '#d3d3d3' : '',        // Light gray border when disabled
                                color: submitButtonDisabled ? '#a9a9a9' : '',               // Darker gray text when disabled
                                cursor: submitButtonDisabled ? 'not-allowed' : 'pointer'     // Change cursor style when disabled
                              }}
                              >
                                Login
                            </Button>
                            
                        </Container>

                    </Form>

                </CardBody>
            </Card>

            </Col>

        </Row>
      </Container>
    </div>
  )
}

export default Login
