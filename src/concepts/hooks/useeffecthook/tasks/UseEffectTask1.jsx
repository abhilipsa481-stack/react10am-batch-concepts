import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Table from './Table'
import "./table.css"

const UseEffectTask1 = () => {
    const[products,setProducts]=useState([])
    const[order,setOrder]=useState("asc")

    const fdata=async()=>{
        try{
            const response=await fetch("https://fakestoreapi.com/products")
            const data=await response.json()
            setProducts(data)
        }
        catch(e)
        {
            toast.error("failed to load the data")

        }
    }

    useEffect(()=>{
        fdata()
    },[])

    console.log(products)

    const toggleSortTitle=()=>{
        
    }
  return (
    <div>
        {
            products.length===0?<h1>Loading...</h1>:<Table data={products}/>
        }

    </div>
  )
}

export default UseEffectTask1