import "./style.css";
import Table from "react-bootstrap/Table";
import { useParams } from "react-router-dom";
import { Fragment, useEffect } from "react";
import { useSelector} from "react-redux";
import { DEL } from "../redux/actions/action";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ADD } from "../redux/actions/action";
import { REMOVE } from "../redux/actions/action";

export const CardsDetails = () => {
    const {id} = useParams();
    const getData = useSelector((state)=>state.cart.carts);
    const [data,setData] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const del = (id) => {
        dispatch(DEL(id));
        navigate("/");
    }
    const send = (el) => {
         dispatch(ADD(el));
    }
    const compare = () => {
        let compareData = getData.filter((el)=>el.id==id);
        console.log("Compare data is ",compareData);
        setData(compareData);
    }
    const del_one = (item) => {
        dispatch(REMOVE(item))
    }
    useEffect(()=>{
        compare();
    },[id]);
    
    return(
        <>
            <div className="container mt-2">
               <h2 className="text-center">Item Details page</h2>
               <section className="container mt-3">
                <div className= "itemsdetails">
                    {data.map((el)=>{
                        return (
                            <Fragment key = {el.id}>
                    <div className="items_img"><img src = {el.imgdata}></img></div>
                    <div className = "details">
                       <Table>
                        <tr>
                            <td>
                                <p><strong>Restaurant</strong>{el.rname}</p>
                                <p><strong>Price</strong> :  ₹ {el.price}</p>
                                <p><strong>Dishes</strong> : {el.address}</p>
                                <p><strong>Total</strong> : ₹ {el.price*el.qnty}</p>
                                <div className="mt-5 d-flex justify-content-between algin-items-center" style = {{cursor:"pointer",backgroundColor:"#ddd",width:"100px",color:"#111"}}>
                                    <span style = {{fonSize:"24px"}} onClick = {el.qnty <= 1 ? ()=>del(el.id):()=>del_one(el)}>-</span>
                                    <span style = {{fonSize:"22px"}}>{el.qnty}</span>
                                    <span style = {{fonSize:"24px"}} onClick = {()=>send(el)}>+</span>
                                </div>
                            </td>
                            <td>
                            <p><strong>Rating is :</strong> <span style = {{background:"green", color:"#ffff",borderRadius:"5px",padding:"2px"}}>{el.rating}★</span></p>
                            <p><strong>Order Review is :</strong> <span>{el.somedata}</span></p>
                            <p><strong>Remove is :</strong> <span onClick = {()=>del(el.id)}><i className ="fas fa-trash" style = {{color:"red",fontSize:"20px",cursor:"pointer"}}></i></span></p>
                            </td>
                        </tr>
                       </Table>
                </div>
                            </Fragment>
                        )
                    }

                    )}
             
                </div>
               
               </section>
            </div>
        </>
    )
}