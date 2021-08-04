import { useState, useEffect } from 'react'
import axios from 'axios'

export function useFetchProduct() {
    const [products, setProducts] = useState([])
    


    // //Api and get api response
    // async function FetchProduct() {
    //     let productRes = await fetch('https://fakestoreapi.com/products')
    //     //for product in json form
    //     let products = await productRes.json();
    //     setProducts(products)
    //     // console.log("Products",await productsRes.json())
    // }

    
    // Api and get api response
    async function FetchProduct() {
        let products = await axios.get('https://fakestoreapi.com/products')
    //     //for product in json form
        // let products = await productRes.json();
        setProducts(products.data)
        console.log("Products",products.data)
    }



    useEffect(() => {
        console.log("useEffect diMount")
        FetchProduct()
    }, [])


    return [products]

}
