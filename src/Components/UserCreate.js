import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

export const UserCreate = () => {


const [name, setName]=useState("");
const [email, setEmail]=useState("");
const [phone, setPhone]=useState("");


const submitHandle=(e)=>{
e.preventDefault();
const item={name,email,phone};


  axios.post("http://localhost:3030/posts", item).then((res)=>{
    console.log(res.data)
  })

  alert("Successfully Saved")
  

}

  return (
    <>
    <Form onSubmit={submitHandle}>
    
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>
        </Form.Group>
        <br></br>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </Form.Group>
      <br></br>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Phone</Form.Label>
        <Form.Control type='number' placeholder="Enter Phone Number" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
      </Form.Group>

      <div>


      <Button variant="success" type="submit" >Submit </Button>
        {'   '}
        <Link to='/'><Button variant="primary" >Back</Button></Link>
      </div>
      
     
    
    </Form>
    </>
  )
}
