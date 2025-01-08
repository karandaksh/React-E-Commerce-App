import React, { useContext, useEffect, useState } from 'react'
import { Store } from '../context/Store'



const Card = (props) => {
    const { favItem, setFavItem } = useContext(Store)
    const [addFav, setAddFav] = useState(false)


    const AddtoFav = (event) => {
        event.preventDefault();
        // setFavItem([...favItem, props.id])      
        setAddFav((prev) => !prev)
        // console.log([...favItem]);
    }





    return (
        <>
            <div className="" id={props.id}>
                <img src={props.thumbnail} className='card-bg bg-slate-100 dark:bg-zinc-800 max-w-full h-auto' />


                <div className="card_details dark:bg-zinc-900 dark:text-white">

                    <div className="flex items-center justify-between p-4">
                        <h4 className='pb-1 line-clamp-1'>{props.title}</h4>
                        <div className="favorite" onClick={AddtoFav}>
                            {addFav ? <i className=" fa-solid fa-heart"></i> : <i className="fa-sharp fa-light fa-heart"></i>}
                        </div>
                    </div>
                    <p className='px-4 py-1'>{props.currency} {props.price}</p>

                    <div className="flex justify-between items-center py-2 px-4">
                        <p>{Math.round(props.rating)} ★ </p>
                        {/* <button className='AddToart px-4 py-2 border border-black text-black rounded-full text-xs hover:bg-black hover:text-white transition-all duration-500  dark:bg-orange-500' onClick={() => AddToCart(latetestProduct)}> ADD ITEM </button> */}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Card
