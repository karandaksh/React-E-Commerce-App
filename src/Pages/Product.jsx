import React, { useContext, useEffect, useState } from 'react';
import { Store } from '../context/Store';
import { useParams } from 'react-router-dom';



const Product = () => {

  const { ProductID } = useParams()
  const { product, currency, AddToCart } = useContext(Store)
  const [latetestProduct, setLatetestProduct] = useState({
    title: '',
    rating: 0,
    price: 0,
    warranty : '',
    description: '',

  })
  const [cardImg, setCardImg] = useState('')
  const [cardLgImg, setCardLgImg] = useState('')


  useEffect(() => {
    let ProductIDNum = Number(ProductID)
    let MatchProduct = product.find(item => item.id === ProductIDNum)
    if (MatchProduct) {
      setLatetestProduct(MatchProduct)
      setCardImg(MatchProduct.images)
      setCardLgImg(MatchProduct.images[0])
    }

    // console.log(addItem);



  }, [ProductID, product])








  return (
    <div>
      Product
      <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 dark:text-white">
        {/* <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row  "> */}
        <div className="grid gap-28 grid-cols-2 sm:gap-12 flex-col sm:flex-row justify-between ">

          {/* <div className="flex-1 flex flex-col-reverse gap-3  sm:flex-row"> */}
          <div className="col-span-1 flex flex-col-reverse gap-3 sm:flex-row me-auto ">
            <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
              {
                cardImg.length > 0 ?
                  cardImg.map((item, index) => {
                    return (
                      <img key={index} onMouseEnter={() => setCardLgImg(item)} src={item} className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer" alt='' />
                    )
                  })
                  : <img src={'https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png'} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
              }

            </div>
            <div className="w-full sm:w-2/4 lg:w-4/6 dark:bg-zinc-800">
              <img src={cardLgImg} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />

            </div>
            {/* <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full"></div> */}
          </div>

          {/* <div className="col-span-2"></div> */}

          {/* <div className="flex-1"> */}
          <div className="col-span-1">
            <h1 className='font-medium text-2xl mt-2'>{latetestProduct.title}</h1>
            <div className=" flex items-center gap-1 mt-2"> {Math.round(latetestProduct.rating)} <span className='text-slate-500'>★★★★★</span></div>
            <p className='Rating text-gray-400'>Rating</p>
            <p className='warranty my-3'> Warranty :- <span className='text-gray-400'> {latetestProduct.warrantyInformation}</span></p>

            <p className=" mt-5 text-3xl font-medium">{currency} {latetestProduct.price}</p>
            <p className=" mt-5 text-gray-500 md:w-4/5">{latetestProduct.description}</p>
            <button className='AddToart mt-5 px-24 bg-black text-white py-3  dark:bg-orange-500' onClick={() => AddToCart(latetestProduct)}> ADD ITEM </button>
          </div>


        </div>
      </div>
      {/* description , brand , images[], reviews[], title , warrantyInformation , stock, rating , returnPolicy*/}


    </div>
  )
}

export default Product




