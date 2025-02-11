// import React from 'react'
// import { useState, useEffect } from 'react'

// function APICall() {
//     const [product, setProduct] = useState([])
//     useEffect(()=>{
//         fetch("https://fakestoreapi.com/products")
//         .then((res)=>res.json())
//         .then((prod)=>setProduct(prod))
//     },[])
//     console.log(product,"check")
 
//   return (
//     <>
//     <h1>API DATA</h1>
//     {product.map((item)=>(
//         <div className="max-w-sm rounded overflow-hidden shadow-lg" key={item.id}>
//   <img className="w-full" src={item.image} alt="Sunset in the mountains"/>
//   <div className="px-6 py-4">
//     <div className="font-bold text-xl mb-2">{item.title}</div>
//     <p className="text-gray-700 text-base">
//      {item.description}
//     </p>
//   </div>
//   <div className="px-6 pt-4 pb-2">
//     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Price: ${item.price}</span>
//     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Rating: {item.rating.count}</span>
//     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Available: {item.rating.count}</span>
//     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Category: {item.category}</span>
 
//   </div>
// </div>
//     ))
 
// }
//     </>
//   )
// }
 
// export default APICall