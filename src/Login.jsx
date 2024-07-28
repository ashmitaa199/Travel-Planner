import React from 'react'
import { CardBody, Label,Container,Card ,Button, Col, Row,Form,FormGroup, CardHeader,Input } from "reactstrap";

const Login = () => {
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

                    <Form>
                        {/* email field */}
                        <FormGroup>
                            <Label for="email">Enter Email
                            </Label>
                            <Input type="text" id="email"> 
                            </Input>
                        </FormGroup>

                        <FormGroup>
                            <Label for="psd">Enter Your Password
                            </Label>
                            <Input type="Password" id="psd"> 
                            </Input>
                        </FormGroup>

                        <Container className='text-center'>
                            <Button color="light" outline>
                                Login
                            </Button>
                            <Button className='ms-2' outline>
                               Reset
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
