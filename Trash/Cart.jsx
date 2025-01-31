import React, { useContext, useEffect, useState } from 'react'

import { Store } from '../context/Store'

const Cart = () => {

  const { addItem, UpdateItemQuantity, orederQuantity, setOrederQuantity, increaseQuantity, decreaseQuantity } = useContext(Store)
  // const [quantity, setQuantity] = useState(1)


  let cartItems = addItem

  // function increaseQuantity(id) {
  //   console.log('increase', id);

  //   // let product_ID = id
  //   // setOrederQuantity()

  // }


  // function decreaseQuantity(id) {
  //   console.log('decrease', id);

  //   // let product_ID = id

  // }


  // function UpdateItemQuantity(id, itemVal) {



  // }






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

                    <div className="col-span-3 pr-8">
                      <h4 className='cart_list text-lg font-medium mb-3'>{cardinfo.title}</h4>
                      <p className='cart_list text-gray-400 line-clamp-2 '>{cardinfo.description}</p>
                      {/* <p className='indent-4 hover:indent-8'>{cardinfo.description}</p> */}
                    </div>



                    <div className="col-span-2">
                      <p className='px-8'>
                        {/* <span className='text-center'> ReturnPolicy :- </span> */}
                        <span className='text-gray-400'> {cardinfo.returnPolicy} </span>
                      </p>
                      <p className='px-8'>
                        {/* <span className='text-center'> Warranty :- </span> */}
                        <span className='text-gray-400'> {cardinfo.warrantyInformation} </span>
                      </p>

                      {/* <p>Warranty :- <span className='text-gray-400'> {cardinfo.warrantyInformation} </span></p> */}
                    </div>

                    {/* <div className="col-span-1 px-4">
                      <p className='text-center'>  {1} </p>
                    </div> */}


                    <div className="col-span-1 text-center">
                      {/* <h6>Quantity</h6> */}
                      <div className="flex items-center justify-center">

                        {/* <button className='decrease px-2 py-1 bg-gray-200' onClick={() => { increaseQuantity(cardinfo.id) }}>-</button>
                        <input type="number" className='quantityInput text-black w-full text-center' defaultValue={orederQuantity} onChange={(e) => setOrederQuantity(cardinfo.id(Number(e.target.value)))} />
                        <button className='increase px-2 py-1 bg-gray-200' onClick={() => { decreaseQuantity(cardinfo.id) }}>+</button> */}

                        <button className='decrease px-2 py-1 bg-gray-200' onClick={() => { decreaseQuantity(cardinfo.id) }}>-</button>
                        {/* <input type="number" className='quantityInput text-black w-full text-center' defaultValue={orederQuantity} min={1} onChange={(e) => UpdateItemQuantity(cardinfo.id, setOrederQuantity(Number(e.target.value)))} /> */}
                        <input type="number" className='quantityInput text-black w-full text-center' defaultValue={cardinfo.quantity} min={1} onChange={(e) => UpdateItemQuantity(cardinfo.id, cardinfo.quantity)} />
                        <button className='increase px-2 py-1 bg-gray-200' onClick={() => { increaseQuantity(cardinfo.id) }}>+</button>

                      </div>
                    </div>

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
