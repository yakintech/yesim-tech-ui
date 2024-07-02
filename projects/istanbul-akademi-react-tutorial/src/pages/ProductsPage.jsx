import React from 'react'

function ProductsPage() {

    let products = [
        {
            id: 1,
            name: "Product 1",
            price: 100
        },
        {
            id: 2,
            name: "Product 2",
            price: 200
        },
        {
            id: 3,
            name: "Product 3",
            price: 300
        },
        {
            id: 4,
            name: "Product 4",
            price: 400
        },
        {
            id: 5,
            name: "Product 5",
            price: 500
        },
        {
            id: 6,
            name: "Product 6",
            price: 600
        },
        {
            id: 7,
            name: "Product 7",
            price: 700
        },
        {
            id: 8,
            name: "Product 8",
            price: 800
        },
        {
            id: 9,
            name: "Product 9",
            price: 900
        },
        {
            id: 10,
            name: "Product 10",
            price: 1000
        }
    ]


    let title = "Product List"

    return <>
        <h1 className='title'>{title}</h1>

        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Unit Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(item => <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                    </tr>)
                }
            </tbody>
        </table>
    </>
}

export default ProductsPage

