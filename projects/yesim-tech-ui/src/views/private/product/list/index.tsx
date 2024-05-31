import React, { useEffect, useState } from 'react'
import { ProductService } from '../../../../api/service/product/ProductService'
import { YDataGrid } from '../../../../components/core-components/data-grid'
import { useNavigate } from 'react-router-dom'
import electronicImage from '../../../../assets/images/electronic.jpg'
import { Helmet } from 'react-helmet-async'
import HelmetHelper from '../../../../utils/seo/HelmetHelper'


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
    {/* <Helmet>
      <title>Products Page</title>
      <meta name='description' content='All products...' />
    </Helmet> */}

    <HelmetHelper title="Products Page" meta="All products..." />

    {/* https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Friendly_Male_Koala.JPG/1200px-Friendly_Male_Koala.JPG */}

    <img src={process.env.PUBLIC_URL + '/camp.jpg'} />;

    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Friendly_Male_Koala.JPG/1200px-Friendly_Male_Koala.JPG" width={300} height={150} alt="Electronic" />

    <img src={electronicImage} width={300} height={150} alt="Electronic" />
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