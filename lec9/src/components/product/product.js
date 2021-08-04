import {useFetchProduct} from './useFetchProduct'

function Product() {
    const [products] = useFetchProduct()
    console.log("products",products)
    

    return (
        <div>
            {
                products.map((product,index)=>{
                    return(
                        

                    <div>
                    <p>category:{product.category}</p>
                    <p>Id:{product.id}</p>
                    <img style={{width:"20px",height:"20px"}} src={product.image} alt="image1"/>
                    <p>Price:{product.price}</p>
                    <p>Tiltle:{product.title}</p>
                   </div>
                    )
                })
            }
        </div>
    )
}
export default Product;