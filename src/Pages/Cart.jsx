import React, { useContext, useEffect, useState } from 'react'

import { Store } from '../context/Store'

const Cart = () => {

  const { setAddItem, addItem, currency, increaseQuantity, decreaseQuantity, UpdateItemQuantity } = useContext(Store)
  // const [quantity, setQuantity] = useState(1)


  const [price, setprice] = useState(0)

  const calculateTotalPrice = () => {
    const total = addItem.reduce((acc, item) => {
      return parseFloat(acc + (item.price * item.quantity)).toFixed(2)
    }, 0)
    setprice(total)
  }

  
  

  useEffect(() => {
    // setProductPrice(Productprice)
    // console.log(Productprice);
    // console.log(Productprice);
    console.log(price, 'fhefvbdj');
    calculateTotalPrice()
console.log(price,'sdlfki');

    
    
    // total()

  }, [addItem, increaseQuantity, decreaseQuantity, UpdateItemQuantity])


  let cartItems = addItem


  // function total() {
  //   let prices = new Array()
  //   let dta = document.querySelectorAll('.price')
  //   // console.log(dta,typeof dta);
  //   let pricevalues = dta.forEach((item) => (item.innerHTML))
  //   console.log(pricevalues);

  //   return prices.push(pricevalues)

  // }











  return (
    <>


      Cart

      {
        cartItems <= 0 ?
          <p className=''>Cart is Empty</p>
          :

          <div className="container">
            <div className="grid grid-cols-12 gap-4 ">

              <div className='col-span-9'>
                <ul className='block'>
                  {/* <p className=''>Total Cart Items :-  {cartItems.length}</p> */}

                  {cartItems.map((cardinfo, index) => {
                    return (
                      <li key={index} className='grid grid-cols-9 gap-4 py-4 items-end border-b-2'>
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


                        {/* Quantity Feature  Start */}


                        <div className="col-span-1 text-center">
                          <div className="flex items-center justify-center">
                            <button className='decrease px-2 py-1 bg-gray-200' onClick={() => decreaseQuantity(cardinfo.id)}>-</button>

                            <input
                              type="number"
                              className='quantityInput text-black w-full text-center'
                              value={cardinfo.quantity} // Bind the value directly to the state
                              onChange={(e) => {

                                const newQuantity = Number(e.target.value);
                                if (newQuantity >= 1) {
                                  const updatedCart = addItem.map(item =>
                                    item.id === cardinfo.id ? { ...item, quantity: newQuantity } : item
                                  );
                                  setAddItem(updatedCart); // Update state with new quantity                              
                                }
                              }}
                            />

                            <button className='increase px-2 py-1 bg-gray-200' onClick={() => { increaseQuantity(cardinfo.id) }}>+</button>
                          </div>
                        </div>




                        <div className="col-span-1 text-center">
                          <div className="flex items-center justify-center">




                            {currency} <span className="price">{parseFloat(cardinfo.price * cardinfo.quantity).toFixed(2)}
                              {/* {`${currency} ${setTotalPrice([cardinfo.price * cardinfo.quantity])}`} */}
                              {/* {currency} {totalPricefun} */}

                            </span>


                          </div>
                        </div>


                        <div className="col-span-1">
                          <div className="flex items-center justify-end">

                            {/* {currency} */}
                            <button className='py-2 px-4 rounded-full cursor-pointer'>
                              <i className='fa fa-close'></i>
                            </button>

                          </div>
                        </div>



                        {/* Quantity Feature  Finish */}


                      </li>
                    )
                  })}

                </ul>

              </div>
            </div>
          </div>
      }



    </>
  )
}

export default Cart
