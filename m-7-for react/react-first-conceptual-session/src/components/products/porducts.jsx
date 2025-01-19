import Product from "../product/product";

export default function Products({info}){
    console.log(info)
    return (
        <div>
            <h1>I am from Products</h1>

            <Product info={info}></Product>
        </div>
    )
}