import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'




const Home = () => {
const [data , setData] = useState(null)
const navigate = useNavigate()
useEffect(() => {
axios(`https://fakestoreapi.com/products`)
.then((res)=>{
  setData(res.data)
console.log(res.data);

})
.catch((err)=>{
  console.log(err);
  
})


} , [])
const singleProduct = (item) =>{
    navigate(`singleproduct/${item.id}`)
  }

  return (
    <>
    <div className="carousel w-full mt-7 ">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

<div className="p-8 mt-11">
      <h1 className="text-4xl font-bold text-center text-white-900 hover:text-orange-700 transition-colors duration-300">
        FLASH SALE
      </h1>
    </div>
    <br />
    <br />
    <div className='flex justify-center flex-wrap gap-5 mb-8'>
    {data ? data.map((item) => {
  return(
    <div className="card card-compact bg-base-100 w-96 shadow-xl" key={item.id}>
  <figure className='mt-5'>
    <img
      width={150}
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{item.title}</h2>
    <p>{item.description}</p>
    <b>{item.price}</b>
    <div className="card-actions justify-end">
      <button className='btn bg-[#EF0808] text-white' onClick={()=> singleProduct(item)}>Buy Now</button>
    </div>
  </div>
</div>
  )
} ) : <h1>Loading...</h1>}
    </div>


    </>
  )
}

export default Home