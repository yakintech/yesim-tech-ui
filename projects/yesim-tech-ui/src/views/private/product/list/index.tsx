import React, { useEffect, useState } from 'react'
import { ProductService } from '../../../../api/service/product/ProductService'
import { YDataGrid } from '../../../../components/core-components/data-grid'
import { useNavigate } from 'react-router-dom'

function List() {

  const [products, setproducts] = useState([])



  const deleteProduct = (id: any) => {
    console.log(id)
  }

  useEffect(() => {

    var productService = new ProductService()
    productService.getAll().then((response) => {
      setproducts(response.items)
    })


  }, [])


  return <>
    {
      products.length > 0 ?
        <YDataGrid
          rows={products}
          deleteRow={deleteProduct}
          columns={[]}
          getRowId={(row) => row._id}
          detailRoute="/product/detail"
          hasDetailModal={true}
        />
        : <h1>Loading...</h1>
    }
  </>
}

export default List