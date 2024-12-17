import React, { useContext, useEffect, useState } from 'react'
import { Store } from '../Context/Store'
import { Link } from 'react-router-dom'
import Card from '../Component/Card'


const Home = () => {
  const { product, currency, } = useContext(Store)
  const sliceData = 10
  // console.log(product);
  const ProductCopy = product.slice(0, sliceData)



  return (
    <div>
      Home

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-4 gap-2 px-4'>
        {ProductCopy.map((item, index) => (

          <div className='col-span-1 md:col-span-1 mx-auto border' key={index}>
            <Link to={`/product/${item.id}`}>
              <Card id={item.id} thumbnail={item.thumbnail} title={item.title} price={item.price} currency={currency} rating={item.rating}  />
            </Link>
          </div>
        ))}
      </div >

    </div>
  )
}

export default Home




































// import React, { useContext, useEffect, useState } from 'react'
// import { Store } from '../context/Store'
// import { Link } from 'react-router-dom'


// const Home = () => {
//   const { product, currency, } = useContext(Store)
//   console.log(product);
//   const ProductCopy = product.slice(0,10)



//   return (
//     <div>
//       Home

//       <div className='grid lg:grid-cols-4 md:grid-cols-3 md:gap-4 gap-2 px-4'>
//         {ProductCopy.map((item, index) => (

//           <div className='col-span-1 md:col-span-1 mx-auto border' key={index}>
//             <Link to={`/product/${item.id}`}>
//               <div className=" ">
//                 <img src={item.category.image} className='card-bg bg-slate-100 max-w-full h-auto' />
//                 <h4 className='text-center p-4'>{item.title}</h4>
//                 <div className="flex justify-between items-center py-2 px-4">
//                   <p>{currency} {item.price}</p>
//                   <p>{Math.round(item.rating)} ★ </p>
//                 </div>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </div >

//     </div>
//   )
// }

// export default Home