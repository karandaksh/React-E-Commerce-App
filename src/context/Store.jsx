import { createContext, useEffect, useState } from "react";

export const Store = createContext()

const APIURL = 'https://dummyjson.com/products'

const StoreProvider = (props) => {
    const [product, setProduct] = useState([])
    const [addItemCount, setAddItemCount] = useState(0)
    const [addItem, setAddItem] = useState([])
    const [favItem, setFavItem] = useState([])



    const rupee = '₹'
    const currency = '$'
    const currencyFrom = 'From'


    // const Products = () => {

    //     fetch(APIURL)
    //         .then((res) => {
    //             if (!res.ok) {
    //                 throw new Error('API NOT WORKING PROPERLY')
    //             }
    //             else {
    //                 return res.json()
    //             }
    //         })
    //         .then((data) => {
    //             // console.log(data.products);
    //             return setProduct(data.products)
    //         })
    //         .catch((err) => {
    //             throw new Error('Response Not Get Somthing went wrong', err)
    //         })
    // }



    useEffect(() => {
        // Products()

        fetch(APIURL)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('API NOT WORKING PROPERLY')
                }
                else {
                    return res.json()
                }
            })
            .then((data) => {
                // console.log(data.products);
                return setProduct(data.products)
            })
            .catch((err) => {
                throw new Error('Proper Right Response Not Get Somthing went wrong', err)
            })

    }, [])



    useEffect(() => {
        // console.log('Added Items', addItem);
        // console.log(addItem);
        let cartItemsCount = addItem.length
        setAddItemCount(cartItemsCount)
        setFavItem(favItem)
        // console.log(favItem);
        

    }, [addItem,favItem])





    const AddToCart = (items) => {
        // console.log(items);
        let CopyCartData = structuredClone(addItem)

        //    if (Object.keys(CopyCartData).length === 0 && CopyCartData.constructor === Object){
        // console.log( CopyCartData.length + 1);


        if (CopyCartData.length < CopyCartData.length + 1) {
            const matchProduct = CopyCartData.find(item => item.id === items.id)
            if (!matchProduct) {
                setAddItem([...addItem, items])
                // return null
            }
            else {
                console.log('This Product Already Added');
                // console.log('Second', matchProduct);
                // return
            }
        }
        else {
            console.log(CopyCartData);
            console.log('Somethnig went wrong');
        }

    }




































    const value = {
        rupee, currencyFrom, currency, product, setProduct, addItemCount, setAddItemCount, AddToCart, addItem, setAddItem ,favItem, setFavItem
    }


    return (
        <Store.Provider value={value}>
            {props.children}
        </Store.Provider>
    )

}

export default StoreProvider

































// import React, { useEffect, useState ,createContext} from 'react'
// const APIURL = 'https://api.escuelajs.co/api/v1/products'

// export const Store = createContext()



// const StoreProvider = (props) => {

//     const [product, setProduct] = useState([])


//     const rupee = '₹'
//     const currency = '$'
//     const currencyFrom = 'From'



//     const Products = () => {
//         fetch(APIURL)
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error('Somthing went wrong in a API', response)
//                 }
//                 else {
//                     // console.log(response);
//                     return response.json()
//                 }
//             })
//             .then((data) => {
//                 // console.log(data);
//                 return setProduct(data)
//             })
//             .catch((err) => {
//                 // console.log(err);
//                 throw new Error('Data Error ', err)
//             })
//     }

//     useEffect(() => {
//         Products()
//     }, [])



//     const value = {
//         rupee, currency, currencyFrom, product
//     }



//     return (
//         <Store.Provider value={value}>
//             {props.children}
//         </Store.Provider>
//     )
// }

// export default StoreProvider
