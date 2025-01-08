import React from "react";
import { createContext, useEffect, useState } from "react";
import { toast, Flip, Zoom } from "react-toastify";

export const Store = createContext()

const APIURL = 'https://dummyjson.com/products'

const StoreProvider = (props) => {
    const [product, setProduct] = useState([])
    const [addItemCount, setAddItemCount] = useState(0)
    const [addItem, setAddItem] = useState([])
    const [favItem, setFavItem] = useState([]) // Added one value in all object fav and default value its false and click its true 


    const savedMode = localStorage.getItem('ThemeMode');
    const [mode, setMode] = useState(savedMode || 'light');

    // const [mode, setMode] = useState("dark")


    const rupee = '₹'
    const currency = '$'
    const currencyFrom = 'From'





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



    // console.log(addItem.quantity);


    useEffect(() => {
        // console.log('Added Items', addItem);
        // console.log(addItem);
        let cartItemsCount = addItem.length
        setAddItemCount(cartItemsCount)

        setFavItem(favItem)
        setAddItem(addItem)
        // console.log(addItem);
        // console.log(Productprice);
    }, [addItem, favItem,])




    const AddToCart = (items) => {
        let CopyCartData = structuredClone(addItem) // All  Items Copy (Clone) Data



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

            }
        }
        else {
            console.log(CopyCartData);
            console.log('Somethnig went wrong');
        }
    }






    const UpdateItemQuantity = (itemID,) => {
        console.log("id", itemID, "qty",)
    }




    const increaseQuantity = (itemID) => {
        const updatedCart = addItem.map(item => {
            if (item.id === itemID) {
                return { ...item, quantity: item.quantity + 1 }; // Increment quantity
            }
            return item;
        });
        setAddItem(updatedCart); // Update the state to trigger a re-render
        // console.log(updatedCart); // Debugging: see updated cart

    };

    const decreaseQuantity = (itemID) => {
        const updatedCart = addItem.map(item => {
            if (item.id === itemID && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 }; // Decrement quantity if > 1
            }
            return item;
        });
        setAddItem(updatedCart); // Update the state to trigger a re-render
        // console.log(updatedCart); // Debugging: see updated cart
    };






    // function TotalPrice(id,quantity, price) {
    //     console.log(id,quantity,price);

    //     let TotalproductPrice = quantity * price
    //     setProductPrice(TotalproductPrice)
    // }









    const value = {
        rupee, currencyFrom, currency, product, setProduct,
        addItemCount, setAddItemCount, AddToCart, addItem, setAddItem,
        favItem, setFavItem, increaseQuantity, decreaseQuantity, UpdateItemQuantity, mode, setMode
    }


    return (
        <Store.Provider value={value}>
            {props.children}
        </Store.Provider>
    )

}

export default StoreProvider

