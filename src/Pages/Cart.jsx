import React, { useContext, useEffect, useState } from 'react'

import { Store } from '../context/Store'





const Cart = () => {
  const { setAddItem, addItem, currency, increaseQuantity, decreaseQuantity, addItemCount, } = useContext(Store);

  const [totalPrice, setTotalPrice] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(10);






  // Calculate Total Price
  const calculateTotalPrice = () => {
    const total = addItem.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(total.toFixed(2));
  };



  const totaldiscountPrice = () => {
    const totaldiscount = totalPrice * (discountPrice / 100)
    return totaldiscount.toFixed(2)
  }




  useEffect(() => {
    calculateTotalPrice();
    console.log(addItem);
    totaldiscountPrice()
  }, [addItem]);

  return (
    <>
      <h1>Cart</h1>
      {addItem.length <= 0 ? (<p className="">Cart is Empty</p>)
        :
        (
          <div className="container px-4">
            <div className="grid grid-cols-12 gap-4">
              {/* Cart Items Section */}
              <div className="col-span-9">
                <ul className="block">



                  {addItem.map((item, index) => (
                    <li key={index} className="grid grid-cols-9 gap-4 py-4 items-center border-b-2 hover:shadow-[0_0px_10px_6px_#0000001a,_0_2px_4px_-2px_#0000001a] hover:rounded-lg transition duration-400 bg-white p-5 my-4">
                      {/* <li key={index} className="grid grid-cols-9 gap-4 py-4 items-center border-b-2 hover:shadow-[0_0px_10px_6px_#0000001a, 0 2px 4px -2px #0000001a] hover:rounded-lg transition duration-400 bg-white p-5 my-4"> */}

                      {/* Product Image */}
                      <div className="col-span-1 justify-center px-3">
                        <img src={item.thumbnail} alt={item.title} className="h-auto" />
                      </div>

                      {/* Product Details */}
                      <div className="col-span-3 pr-8">
                        <h4 className="cart_list text-lg font-medium mb-3"> {item.title} </h4>
                        <p className="cart_list text-gray-400 line-clamp-2"> {item.description} </p>
                      </div>

                      {/* Return & Warranty */}
                      <div className="col-span-2">
                        <p className="px-8 text-gray-400"> {item.returnPolicy || "No Return Policy"} </p>
                        <p className="px-8 text-gray-400"> {item.warrantyInformation || "No Warranty"} </p>
                      </div>

                      {/* Quantity Control */}
                      <div className="col-span-1 text-center">
                        <div className="flex items-center justify-center">

                          <button className="decrease px-2 py-1 bg-gray-200" onClick={() => decreaseQuantity(item.id)} > - </button>

                          <input type="number" className="quantityInput text-black w-full text-center" value={item.quantity}
                            onChange={(e) => {
                              const newQuantity = Math.max(Number(e.target.value), 1);
                              const updatedCart = addItem.map((cartItem) => cartItem.id === item.id ? { ...cartItem, quantity: newQuantity } : cartItem);
                              setAddItem(updatedCart);
                            }} />

                          <button className="increase px-2 py-1 bg-gray-200" onClick={() => increaseQuantity(item.id)}>+</button>

                        </div>
                      </div>

                      {/* Item Price */}
                      <div className="col-span-1 text-center">
                        {currency}{" "} <span className="price"> {(item.price * item.quantity).toFixed(2)} </span>
                      </div>

                      {/* Remove Item */}
                      <div className="col-span-1">
                        <div className="flex items-center justify-end">
                          <button className="py-2 px-4 rounded-full cursor-pointer" onClick={() => setAddItem((prev) => prev.filter((cartItem) => cartItem.id !== item.id))}>
                            <i className="fa fa-close"></i>
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Details Section */}
              <div className="col-span-3">
                <div className="box-shadow bg-white p-5 rounded-md">
                  <h4 className="text-2xl py-3 border-b-2">Price Details</h4>

                  <div className="flex justify-between items-center py-2 my-2">
                    <p>Total Items</p>
                    <p>{addItemCount}</p>
                  </div>

                  <div className="flex justify-between items-center py-2 my-2">
                    <p>Total Items Price</p>
                    <p>
                      {currency} {totalPrice}
                    </p>
                  </div>

                  <div className="flex justify-between items-center py-2 my-2">
                    <p>Discount</p>
                    <p>{discountPrice}%</p>
                  </div>

                  <div className="flex justify-between items-center py-2 my-2">
                    <p>Delivery Charges</p>
                    <p>Free</p>
                  </div>

                  <div className="flex justify-between items-center py-2 my-2 border-t-2 border-b-2">
                    <p className="text-xl">Calculation</p>
                    <div className="flex justify-between items-center w-2/4">

                      <p className='relative group'>
                        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 text-sm bg-black text-white rounded px-2 py-1">Total Price</div>
                        {currency} {totalPrice}
                      </p>

                      <p className='relative group'>
                        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 text-sm bg-black text-white rounded px-2 py-1">Minus</div>
                        -
                      </p>


                      <p className='relative group'>
                        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 text-sm bg-black text-white rounded px-2 py-1">Discount Price</div>
                        {currency} {totaldiscountPrice()}
                      </p>


                    </div>
                  </div>


                  <div className="flex justify-between items-center py-2 my-2">
                    <p className='text-green-500 text-2xl'>Payble Amount</p>
                    <p className='text-2xl'>{`${(totalPrice - totaldiscountPrice()).toFixed(2)}`} </p>
                  </div>



                </div>
              </div>
            </div>
          </div>
        )}
    </>
  );
};
















































// const Cart = () => {

//   const { setAddItem, addItem, currency, increaseQuantity, decreaseQuantity, UpdateItemQuantity, addItemCount } = useContext(Store)
//   // const [quantity, setQuantity] = useState(1)


//   const [price, setprice] = useState(0)

//   const [totalPrice, setTotalPrice] = useState([])





//   const calculateTotalPrice = () => {
//     const total = addItem.reduce((basePrice, item) => {
//       return parseFloat(basePrice + (item.price * item.quantity)).toFixed(2)
//     }, 0)
//     setprice(total)
//   }





//   useEffect(() => {

//     // console.log(price, 'fhefvbdj');
//     calculateTotalPrice()
//     // console.log(price, 'sdlfki');
//     // total()


//   }, [addItem, increaseQuantity, decreaseQuantity, UpdateItemQuantity])


//   let cartItems = addItem


//   // function total() {
//   //   let prices = new Array()
//   //   let dta = document.querySelectorAll('.price')
//   //   // console.log(dta,typeof dta);
//   //   let pricevalues = dta.forEach((item) => (item.innerHTML))
//   //   console.log(pricevalues);

//   //   return prices.push(pricevalues)

//   // }











//   return (
//     <>


//       Cart

//       {
//         cartItems <= 0 ?
//           <p className=''>Cart is Empty</p>
//           :

//           <div className="container px-4">
//             <div className="grid grid-cols-12 gap-4 ">

//               <div className='col-span-9'>
//                 <ul className='block'>
//                   {/* <p className=''>Total Cart Items :-  {cartItems.length}</p> */}

//                   {cartItems.map((cardinfo, index) => {
//                     return (
//                       <li key={index} className='grid grid-cols-9 gap-4 py-4 items-end border-b-2 hover:shadow-[0_0px_15px_3px_#00000026] hover:rounded-lg transition duration-400 bg-white p-5 my-4'>
//                         {/* <li key={index} className='grid grid-cols-9 gap-4 py-4 items-end border-b-2 hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-white p-5 my-4'> */}
//                         <div className="col-span-1 justify-center px-3">
//                           <img src={cardinfo.thumbnail} alt="" className=' h-auto ' />
//                           {/* <img src={cardinfo.images[0]} alt="" className=' h-auto ' /> */}
//                         </div>

//                         <div className="col-span-3 pr-8">
//                           <h4 className='cart_list text-lg font-medium mb-3'>{cardinfo.title}</h4>
//                           <p className='cart_list text-gray-400 line-clamp-2 '>{cardinfo.description}</p>
//                           {/* <p className='indent-4 hover:indent-8'>{cardinfo.description}</p> */}
//                         </div>



//                         <div className="col-span-2">
//                           <p className='px-8'>
//                             {/* <span className='text-center'> ReturnPolicy :- </span> */}
//                             <span className='text-gray-400'> {cardinfo.returnPolicy} </span>
//                           </p>
//                           <p className='px-8'>
//                             {/* <span className='text-center'> Warranty :- </span> */}
//                             <span className='text-gray-400'> {cardinfo.warrantyInformation} </span>
//                           </p>

//                           {/* <p>Warranty :- <span className='text-gray-400'> {cardinfo.warrantyInformation} </span></p> */}
//                         </div>


//                         {/* Quantity Feature  Start */}


//                         <div className="col-span-1 text-center">
//                           <div className="flex items-center justify-center">
//                             <button className='decrease px-2 py-1 bg-gray-200' onClick={() => decreaseQuantity(cardinfo.id)}>-</button>

//                             <input
//                               type="number"
//                               className='quantityInput text-black w-full text-center'
//                               value={cardinfo.quantity} // Bind the value directly to the state
//                               onChange={(e) => {

//                                 const newQuantity = Number(e.target.value);
//                                 if (newQuantity >= 1) {
//                                   const updatedCart = addItem.map(item =>
//                                     item.id === cardinfo.id ? { ...item, quantity: newQuantity } : item
//                                   );
//                                   setAddItem(updatedCart); // Update state with new quantity                              
//                                 }
//                               }}
//                             />

//                             <button className='increase px-2 py-1 bg-gray-200' onClick={() => { increaseQuantity(cardinfo.id) }}>+</button>
//                           </div>
//                         </div>




//                         <div className="col-span-1 text-center">
//                           <div className="flex items-center justify-center">





//                               {currency} <span className="price">{parseFloat(cardinfo.price * cardinfo.quantity).toFixed(2)}
//                               {/* {`${currency} ${setTotalPrice([cardinfo.price * cardinfo.quantity])}`} */}
//                               {/* {currency} {totalPricefun} */}

//                             </span>


//                           </div>
//                         </div>


//                         <div className="col-span-1">
//                           <div className="flex items-center justify-end">

//                             {/* {currency} */}
//                             <button className='py-2 px-4 rounded-full cursor-pointer'>
//                               <i className='fa fa-close'></i>
//                             </button>

//                           </div>
//                         </div>



//                         {/* Quantity Feature  Finish */}


//                       </li>
//                     )
//                   })}

//                 </ul>

//               </div>


//               <div className="col-span-3">
//                 <div className="box-shadow bg-white p-5 rounded-md">
//                   <h4 className='text-2xl py-3 border-b-2'>Price details</h4>

//                   <div className="flex justify-between items-center py-2 my-2">
//                     <p>Total Items</p>
//                     <p>{addItemCount}</p>
//                   </div>

//                   <div className="flex justify-between items-center py-2 my-2">
//                     <p>Total Items Price</p>
//                     <p>1</p>
//                   </div>

//                   <div className="flex justify-between items-center py-2 my-2">
//                     <p>Delivery Charges</p>
//                     <p>1</p>
//                   </div>


//                   <div className="flex justify-between items-center py-2 my-2 border-t-2 border-b-2">
//                     <p className='text-2xl'>Total Amount</p>
//                     <p>₹ 1</p>
//                   </div>



//                 </div>
//               </div>

//             </div>
//           </div>
//       }



//     </>
//   )
// }

export default Cart
