import React, { useContext, useEffect, useState } from 'react'

import { Store } from '../Context/Store'

const Cart = () => {

  const { addItem, setAddItem } = useContext(Store)
  const [quantity, setQuantity] = useState(1)


  let cartItems = addItem


  return (
    <>


      Cart

      {
        cartItems <= 0 ?
          <p className=''>Cart is Empty</p>
          :

          <div className="container">

            <ul>
              {/* <p className=''>Total Cart Items :-  {cartItems.length}</p> */}

              {cartItems.map((cardinfo, index) => {
                return (
                  <li key={index} className='grid grid-cols-12 gap-4 py-4 items-end border-b-2'>
                    <div className="col-span-1 justify-center px-3">
                      <img src={cardinfo.thumbnail} alt="" className=' h-auto ' />
                      {/* <img src={cardinfo.images[0]} alt="" className=' h-auto ' /> */}
                    </div>

                    <div className="col-span-3">
                      <h4 className='cart_list text-lg font-medium mb-3'>{cardinfo.title}</h4>
                      <p className='cart_list text-gray-400 line-clamp-2 '>{cardinfo.description}</p>
                      {/* <p className='indent-4 hover:indent-8'>{cardinfo.description}</p> */}
                    </div>

                    {/* <div className="col-span-1 text-center">
                      <h6>Quantity</h6>
                      <div className="flex items-center justify-center">

                        <button className='decrease px-2 py-1 bg-gray-200' onClick={() => updateQuantity(index, -1)}>-</button>
                        <input type="number" className='quantityInput text-black w-full text-center' defaultValue={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
                        <button className='increase px-2 py-1 bg-gray-200' onClick={() => updateQuantity(index, +1)}>+</button>
                      </div>
                    </div> */}

                  </li>
                )
              })}

            </ul>
          </div>
      }



    </>
  )
}

export default Cart
