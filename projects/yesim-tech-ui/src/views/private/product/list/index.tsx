import React, { useEffect, useState } from 'react'
import { ProductService } from '../../../../api/service/product/ProductService'
import { ProductListModel } from './models/ProductListModel'
import Header from './components/Header'
import { RoleProvider } from '../../../../utils/auth/RoleProvider'

function List() {

  const [products, setproducts] = useState<ProductListModel[]>([])

  useEffect(() => {

    var productService = new ProductService()
    productService.getAll().then((response) => {
      setproducts(response.items)
    })

  }, [])


  const deleteProduct = (id: number) => {
    //
  }


  return <>
    <Header />
    <ul>
      {
        products.map((product: any) => {
          return <>
            <li key={product._id}>{product.name} - {product.price}</li>
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
          </>
        })
      }
    </ul>

  </>
}

export default List

