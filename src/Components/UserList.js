import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';

export const UserList = () => {

    const [data, setData]=useState([]);
    const navigate=useNavigate();


    //get the user form of table from JSON
    const getUser=()=>{
        axios.get("http://localhost:3030/posts").then((res)=>{
            setData(res.data);
        })
    }

    useEffect(()=>{
        getUser();
    },[])

    //edit user
    const editUser=(id)=>{
     navigate('/useredit/'+id);

    }

    //delete user
    const deleteUser=(id)=>{
        axios.delete(`http://localhost:3030/posts/${id}`).then((res)=>{
          console.log(res);
          getUser();
        })
    }

    //get the user details
    const detailsUser=(id)=>{
      navigate('/userDetails/'+id);
    }

  return (
    <>
        <Link to='/userCreate'><Button variant="success">Add New User</Button></Link>{' '}
        <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>PHONE NUMBER</th>
          <th>ACTIONS</th>
        </tr>
      </thead>
      {data.map((item)=>
      <tbody>
        <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>
            <a><Button variant="primary" onClick={()=>editUser(item.id)}>Edit</Button></a>{' '}
            <Button variant="danger" onClick={()=>deleteUser(item.id)}>Delete</Button> {' '}
            <a><Button variant="warning" onClick={()=>detailsUser(item.id)}>Details</Button></a>{' '}
        </td>
      </tr>
    </tbody>
      )}
      
    </Table>
    </>
  )
}
