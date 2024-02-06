import React, { useEffect, useState } from 'react'
import LayOut from "../../components/LayOut/LayOut"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productURL } from '../../Api/endPoints'
import classes from './results.module.css'
import ProductCard from '../../components/Product/ProductCard'
import Loader from '../../components/Loader/Loader'

const Results = () => {

  const [results, setResults] = useState([]);
  const {categoryName} = useParams()
  // console.log(categoryName);
 
useEffect(()=>{
  axios.get(`${productURL}/products/category/${categoryName}`)
  .then((res)=>{
    // console.log(res);
    setResults(res.data)
  }) 
  .catch((err)=>{
    console.log(err);
  })

},[])
 
  return (
    <LayOut>
       <section>
        <h1 style={{padding:"30px"}}>Results</h1>
        <p style={{padding:"30px"}}>category/{categoryName}</p>
        <hr/>

        {isLoading ?(
        <Loader/>
        ):(
        <div className={classes.products_container}>
            {results?.map((product)=>(
              <ProductCard 
              key={product.id}
              renderDesc={false}
              renderAdd={true}
              product={product}/>
            ))}

          </div>)}
          
       </section>

    </LayOut>
   
  )
}

export default Results