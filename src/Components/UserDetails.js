import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


export const UserDetails = () => {

  const {id}=useParams();

  const[empdata, setEmpData]=useState([]);

  const getUser=()=>{
    axios.get("http://localhost:3030/posts/"+id).then((res)=>{
      setEmpData(res.data)
    })
  }

  useEffect(()=>{
    getUser();
  },[])

  return (
    <>
    <h1>User Details Page</h1>
    <br></br>
    <ListGroup> 
      <ListGroup.Item variant="primary"><b>ID:</b> {empdata.id}</ListGroup.Item>
      <ListGroup.Item action variant="secondary"> <b>NAME:</b> {empdata.name}</ListGroup.Item>
      <ListGroup.Item action variant="success"><b>EMAIL:</b> {empdata.email}</ListGroup.Item>
      <ListGroup.Item action variant="danger"><b>PHONE NUMBER:</b> {empdata.phone}</ListGroup.Item>
    </ListGroup>
    <br></br>
    <Link to='/'><Button variant="primary" >Back</Button></Link>
    </>
  )
}
