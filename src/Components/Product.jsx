import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import './Product.css'

function Product() {

    const [product,setProduct]=useState([])

    const base_url='https://dummyjson.com/products'

    const fetchData = async() =>{
    const result = await fetch(base_url)

    .then(result=>result.json()) //json => array

    .then(products=>setProduct(products.products))

}

    useEffect(() =>{
    fetchData()
    },[])

  return (
    <div className='card'>
       {
        product.map(item=>(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" style={{height:"150px"}} src={item.thumbnail}/>
        <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
        {item.description.slice(0,50)}...
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
        </Card.Body>
        </Card>
        ))
       }
    </div>
  )
}

export default Product
