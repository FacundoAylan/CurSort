import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getOrders } from "../../../Redux/actions";

function Orders () {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getOrders())
  },[])
  
  return (
    <>
    
    </>
  )
};

export default Orders;