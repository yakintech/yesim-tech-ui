import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { ProductService } from '../../../api/service/product/ProductService'

function Child2() {

    console.log('Child2 Rendered')

    const [products, setproducts] = useState([])





    //get totalPrice function with useMemo

    const totalPrice = useMemo(() => {
        console.log('Total Price Calculated')
        return products.reduce((acc: any, product: any) => {
            return acc + product.price
        }, 0)
    }, [products])


    let avgPrice = totalPrice / products.length
    useEffect(() => {

        var productService = new ProductService()
        productService.getAll().then((response) => {
            setproducts(response.items)
        })

    }, [])


    return <>
        <h1>Total Price: {totalPrice.toFixed(2)} </h1>
        <h1>Avg Price: {avgPrice.toFixed(2)} </h1>
        {
            products.length > 0 ?
                <div>
                    <h1>Products</h1>
                    <ul>
                        {
                            products.map((product: any) => {
                                return <li key={product._id}>{product.name} - {product.price.toFixed(2)}</li>
                            })
                        }
                    </ul>
                </div>
                : <h1>Loading...</h1>
        }

    </>
}

export default Child2

//React.memo ile tüm component memorize edilir.
//useMemo ile sadece belirli bir kısmı memorize edilir.