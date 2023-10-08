import React from "react";
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from '@mui/material/Badge';
import {Table } from 'react-bootstrap';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useSelector } from "react-redux";
import { Fragment } from "react";
import { DEL } from "../redux/actions/action";
import { useDispatch } from "react-redux";
import { useState , useEffect } from "react";

export const Header = () => {
const getData = useSelector((state)=>state.cart.carts);
const dispatch = useDispatch();
const [price,setPrice] = useState(0)
console.log("Get Data is : - ",getData);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const del = (id) => {
    dispatch(DEL(id));
  }
  const total = () => {
    let price = 0;
    getData.map((el) => {
    price = el.price * el.qnty + price;
    })
    setPrice(price);  
  }
  useEffect(()=>{
    total();
  },[total])
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
        <Container>
          <NavLink to="/" className="text-white text-decoration-none">Add To Cart</NavLink>
          <Nav className="me-auto">
            <NavLink className="text-white text-decoration-none" style = {{marginLeft: "10px"}}>Home</NavLink>
          </Nav>
          <Badge badgeContent={getData.length} color="primary"
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}>
            <i className="fa-solid fa-cart-shopping text-light" style={{ fontSize: "25px", cursor: "pointer" }}></i>
          </Badge>
        </Container>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          {getData.length?
          <div className = "card_details" style = {{width:"20rem",padding:"10px"}}>
                <Table>
                     <thead>
                      <tr>
                         <th>Photo</th>
                         <th>Restaurant Name</th>
                      </tr>
                      </thead>
                      <tbody>
                           {getData.map((el)=>{
                            return(
                              <Fragment key={el.id}> 
                                  <tr>
                                    <td><NavLink to = {`/cart/${el.id}`}><img src = {el.imgdata} style = {{width:"5rem",height:"5rem",cusor:"pointer"}} onClick={handleClose}></img></NavLink></td>
                                    <td>
                                      <p>{el.rname}</p>
                                      <p>Price:-  ₹ {el.price}</p>
                                      <p>Quantity: {el.qnty}</p>
                                      <p style = {{color:"red",fontSize:"20",cursor:"pointer"}} onClick = {() => del(el.id)}><i className="fas fa-trash smalltrash"></i></p>
                                    </td>
                                    <td className="mt-5">
                                    <p style = {{color:"red",fontSize:"20",cursor:"pointer"}}onClick = {() => del(el.id)}><i className="fas fa-trash largetrash" ></i></p>
                                    </td>
                                  </tr>
                              </Fragment>
                            )
                           })}
                          
                      </tbody>
                      <p>Total: {price}</p>
                     
                </Table>
          </div>: <div className="d-flex card_details justify-content-center align-items-center" style={{ width: "20rem",padding:10,position:"relative"}}>
            <i className="fas fa-close smallclose" style={{ position: "absolute", top: 2, right: 10, fontSize: 23, cursor: "pointer" }}></i>
            <p>Your Cart is Empty</p>
            <img src="./cart.gif" alt="" className="" style={{ width: "5rem" }}></img>
          </div>}
        </Menu>
      </Navbar>
      
    </>
  )
}
