import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import  myContext  from '../../context/data/myContext';

function Order() {
  const context = useContext(myContext);
  // console.log(context)
  const {name, rollNo} = context;
  return (
  <Layout>
    Order 
    <h1>Welcome {name}</h1>
      <p>Roll No: {rollNo}</p>
  </Layout>
  )
}

export default Order;
