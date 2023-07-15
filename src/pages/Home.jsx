import React, {useState, useEffect} from 'react'
import Nevbar from '../components/Nevbar'
import Category from '../Database/Category.json'
import Products from '../Database/Products.json'
import { Link } from 'react-router-dom'
// import Allproducts from '../components/Allproducts'


function Home() {
  const [data, setData] = useState(Category);
  const [product, setProduct] = useState(Products);
  console.log(Category)
  return (
    <div>
      <div className='row'>
        <Nevbar/>
        <h1 className=' p-2' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' , textAlign:'center', color: 'darkgoldenrod'}}>
          Categories 
        </h1>
      </div>
      {/* <div>
        <Allproducts/>
      </div> */}
      <div className='row'>
        {data.map(item => (
          <div key={item.id} className="card m-auto mt-4" style={{ width: '300px', height: '250px', }}>
            <h5 className="card-header" >{item.name}</h5>
            <div className="card-body">
              <p className="card-text">{item.description}</p>
              <Link to={`/categories/${item.id}/products`}>
                <a href="#" className="btn btn-primary">
                  View Products
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Home