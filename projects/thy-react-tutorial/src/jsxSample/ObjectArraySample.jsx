import React from 'react'
import { productsData } from '../data/productsData'

function ObjectArraySample() {


    return <>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Unit Price</th>
                    <th>Stock</th>
                </tr>
            </thead>
            <tbody>
                {
                    productsData && productsData.map(item => {

                        var bgColor = ""

                        if (item.unitsInStock < 10)
                            bgColor = "tomato"

                        return <tr style={{ backgroundColor: bgColor }}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.unitPrice.toFixed()}</td>
                            <td>{item.unitsInStock}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>

    </>
}

export default ObjectArraySample