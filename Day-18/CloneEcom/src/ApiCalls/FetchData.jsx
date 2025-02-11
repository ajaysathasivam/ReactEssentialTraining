import React from "react";
// get data

const FetchData = async () => {
    const res = await fetch("http://localhost:3000/products");  
  return res.json();;
};
// post data
export const postFetch = async(data)=>{
  const method = {
    method:"POST",
    body:JSON.stringify(data)
  }
  const res = await fetch("http://localhost:3000/products",method)
}
export const putFetch = async(data,id)=>{
  const method = {
    method:"PUT",
    body:JSON.stringify(data)
  }
  const res = await fetch(`http://localhost:3000/products/${id}`,method)
}
export const deleteFetch = async (id)=>{
  const method ={
    method:"DELETE"
  }
    const res = await fetch("http://localhost:3000/products/"+id,method)
}

export default FetchData;
