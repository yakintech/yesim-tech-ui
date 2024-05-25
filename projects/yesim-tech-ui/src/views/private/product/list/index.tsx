import React, { useEffect, useState } from 'react'
import { ProductService } from '../../../../api/service/product/ProductService'
import { ProductListModel } from './models/ProductListModel'
import Header from './components/Header'

function List() {

  const [products, setproducts] = useState<ProductListModel[]>([])

  useEffect(() => {

    var productService = new ProductService()
    productService.getAll().then((response) => {
      setproducts(response.items)
    })

  }, [])


  return <>
    <Header />
    <ul>
      {
        products.map((product) => {
          return <li key={product.id}>{product.name} - {product.price}</li>
        })
      }
    </ul>

  </>
}

export default List

