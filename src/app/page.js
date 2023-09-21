"use client"
import { add } from "@/Redux/Cartslice";
import React,{useEffect,useState} from "react"
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
const [products,setProducts]=useState([]);
  const getAllProducts=async()=>{
   const resp = await fetch('https://fakestoreapi.com/products');
   const data = await resp.json();
   setProducts(data);
  }
useEffect(()=>{
    getAllProducts();
},[])

const handleadd=(product)=>{
  dispatch(add(product))
}


  return (
    <div className='productsWrapper'>
      {
        products.map((product)=>(
          <div key={product.id} className="card">
           <img src={product.image} alt='img' />
           <h4>{product.title}</h4>
           <h5>{product.price}</h5>
           <button onClick={()=>handleadd(product)}>Add To Cart</button>
          </div>
        ))
      }
         
    </div>
  )
}
