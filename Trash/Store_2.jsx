import React from "react";
import { createContext, useEffect, useState } from "react";
import { toast, Flip, Zoom } from "react-toastify";

export const Store = createContext()

const APIURL = 'https://dummyjson.com/products'

const StoreProvider = (props) => {
    const [product, setProduct] = useState([])
    const [addItemCount, setAddItemCount] = useState(0)
    const [addItem, setAddItem] = useState([])
    const [favItem, setFavItem] = useState([])
    const [orederQuantity, setOrederQuantity] = useState(1)




    const rupee = '₹'
    const currency = '$'
    const currencyFrom = 'From'




    let CopyCartData = structuredClone(addItem) // All  Items Copy (Clone) Data
    // console.log(CopyCartData);



    useEffect(() => {
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
                // return setProduct(data.products)
                let products = data.products
                let productsCopy = products.map(items => ({ ...items, quantity: 1 }))
                return setProduct(productsCopy)
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
        // console.log(orederQuantity);


        // console.log(favItem);
    }, [addItem, favItem,]) //orederQuantity])






    const AddToCart = (items) => {

        if (CopyCartData.length < CopyCartData.length + 1) {
            const matchProduct = CopyCartData.find(item => item.id === items.id)
            if (!matchProduct) {
                setAddItem([...addItem, items])
                // return null
            }
            else {
                toast.error('This Product Already Added', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Flip,
                });
                return
                // console.log('This Product Already Added');
                // console.log('Second', matchProduct);
                // return
            }
        }
        else {
            console.log(CopyCartData);
            console.log('Somethnig went wrong');
        }

    }


    function setOrder(idItem) {
        return function (itemQty) {
            return console.log("id", idItem, "QTy", itemQty);
        }
    }

    function setOrderQuantity(newQuantity){
        return newQuantity
    }




    const UpdateItemQuantity = (itemID,) => {
        console.log("id", itemID, "qty", orederQuantity, "custom",);
    }

    const increaseQuantity = (itemID) => {
        // console.log(itemID);

        let currentProduct = CopyCartData.find((item_products) => item_products.id === itemID)
        let orderQuantity = currentProduct.quantity

        setOrder(itemID)(setOrderQuantity(Number(orderQuantity + 1)));

        // setOrder(itemID)(
        //     currentProduct.quantity(setOrederQuantity(Number(orederQuantity + 1)))
        // )


        // console.log(currentProduct.quantity);
        // setOrederQuantity



        // if (orederQuantity >= 10) {
        //     toast.warn('One User Can Added Only 10 Product', {
        //         position: "top-right",
        //         autoClose: 5000,
        //         hideProgressBar: false,
        //         closeOnClick: false,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //         theme: "colored",
        //         transition: Zoom,
        //     });
        // }
    }

    const decreaseQuantity = (itemID) => {
        console.log(itemID);

    }

































    const value = {
        rupee, currencyFrom, currency, product, setProduct,
        addItemCount, setAddItemCount, AddToCart, addItem, setAddItem,
        favItem, setFavItem, orederQuantity, setOrederQuantity,
        increaseQuantity, decreaseQuantity, UpdateItemQuantity,
    }


    return (
        <Store.Provider value={value}>
            {props.children}
        </Store.Provider>
    )

}

export default StoreProvider































