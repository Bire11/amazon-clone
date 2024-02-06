import React, { useEffect, useState }  from 'react'
import LayOut from '../../components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productURL } from '../../Api/endPoints'
import ProductCard from '../../components/Product/ProductCard'
import Loader from '../../components/Loader/Loader'

const ProductDetail = () => {
  const {productId} = useParams()
  // console.log(productId);
  const [product, setProduct] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  useEffect(()=>{
    axios.get(`${productURL}/products/${productId}`)
    .then((res)=>{
      // console.log(res);
     setProduct(res.data)
     setIsLoading(false)
    })
    .catch((err)=>{
      console.log(err);
      setIsLoading(false)
    })
  },[])
  return (
    <LayOut>
      {isLoading?(<Loader/>):(<ProductCard 
     product={product}
     flex = {true} 
     renderDesc={true}
     renderAdd={true}
     />)}
     
     
    </LayOut>
  )
}

export default ProductDetail