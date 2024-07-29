import {Card, CardBody, CardHeader,Input,Col,Row, Container,Form, FormGroup,Label,Button, } from "reactstrap";
import React, { useState,useEffect } from 'react';
import {Link,useNavigate} from "react-router-dom";
import { createUserWithEmailAndPassword , updateProfile } from "firebase/auth";
import { auth } from '../firebase';

const Signup = () => {
  
  const navigate =useNavigate();


  //two way data binding-user changes reflect in these fields and changes in these fields will reflect on user data

  const [data,setData]=useState({

    name:'',
    email:'',
    password:'',
    about:'',

  })

  //we use usestate make changes and to relect or print the data we use use effect
  const [error,setError]=useState("");

//use effect
//to print the data

  useEffect(()=>{
    console.log(data);

  }, [data])

  //handle change

  const handleChange=(event,property)=>{

    setData({...data,[property]:event.target.value})//here we use callback ,
    //callback run after the setData,b/c setData is asynchronous function
    //getting all data of data object
    // console.log(event.target.value)  //value we get when enter name

  }

//reset the form

const resetData=()=>{
  setData({

    name:'',
    email:'',
    password:'',
    about:'',

  })
   setError("");
}

//submitButtonDisabled
const [submitButtonDisabled , setSubmitButtonDisabled]=useState(false);

//subbitForm

const submitForm=(event)=>{
  event.preventDefault()

 // data validate
 //call server api for sending data

}

//handleSubmission
const handleSubmission=()=>{
  if(!data.name || !data.email || !data.password){
    setError("*Fill all fields");
    return;
  }
  setSubmitButtonDisabled(true);
  setError("");
  //fireabse api calling
  createUserWithEmailAndPassword(auth, data.email,data.password)
  .then(async(res) => {
    setSubmitButtonDisabled(false);
    const user=res.user;
    await updateProfile(user, {
      displayName:data.name,
    });
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
      <Container >

        <Row className="mt-4">

          <Col sm={{size:6,offset:3}}>

          <Card color="dark" inverse className="rounded-xl">

        <CardHeader>
          Fill information to register!!
        </CardHeader>

        <CardBody>

          <Form onSubmit={submitForm}>

          {/* Name field */}
            <FormGroup>
              <Label for="name">Enter name </Label>
              <Input 
              id="name"
              type="text"
              placeholder="Enter here"
              //dynamic seetting fields
              onChange={()=>handleChange(event,'name')}
              value={data.name}
              
              />
            </FormGroup>

          {/* email field */}

          <FormGroup>
              <Label for="email">Enter your Email
              </Label>
              <Input 
              id="email" 
              type="email" 
              placeholder="Enter here"
               onChange={()=>handleChange(event,'email')}
               value={data.email}// for two way data binding
               />
            </FormGroup>

            <FormGroup>

              <Label for="password"> Enter Password </Label>
              <Input 
              id="password" 
              type="password"
               placeholder="Enter here"
               onChange={()=>handleChange(event,'password')}
               value={data.password}
            
              />
              <Label for="about"> Enter Password </Label>
              <Input
               id="about"
                type="textarea" 
                placeholder="Enter here"

              style={{height:"100px"}}
              onChange={()=>handleChange(event,'about')}
              value={data.about}
              />
               
            </FormGroup>
            <Container className="text-center">
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
            > Register 
            </Button> {/*  HANDLEsUBMISSION */}
            <Button onClick={resetData}
             color="secondary"
             outline type="reset" 
             className="ms-2"> Reset </Button>
            </Container>
 

          </Form>

        </CardBody>
       
      </Card>

     </Col>

  </Row>
    <b className="font-bold text-sm text-red-600"> {error}</b>
     
</Container>
    </div>
  )
}

export default Signup;
