import React from 'react'

function Menu() {

    let menus = [
        {
            title: "Bread Basket",
            desc: "Assortment of fresh baked fruit breads and muffins",
            price: 5.50
        },
        {
            title: "Honey Almond Granola with Fruits",
            desc: "Natural cereal of honey toasted oats, raisins, almonds and dates",
            price: 7.00
        },
        {
            title: "Belgian Waffle",
            desc: "Vanilla flavored batter with malted flour",
            price: 7.50
        },
        {
            title: "Scrambled eggs",
            desc: "Scrambled eggs, roasted red pepper and garlic, with green onions",
            price: 7.50
        },
        {
            title: "Blueberry Pancakes",
            desc: "With syrup, butter and lots of berries",
            price: 8.50
        }
    ]


    return <>
        {/* Menu Section */}
        <div className="w3-row w3-padding-64" id="menu">
            <div className="w3-col l6 w3-padding-large">
                <h1 className="w3-center">Our Menu</h1>
                <br />
                {/* <h4>Bread Basket</h4>
                <p className="w3-text-grey">
                    Assortment of fresh baked fruit breads and muffins 5.50
                </p>
                <br /> */}
                {
                    menus.map((menu, index) => {
                        return <>
                            <h4>{menu.title}</h4>
                            <p className="w3-text-grey">
                                {menu.desc} {menu.price.toFixed(2)}
                            </p>
                            <br />
                        </>
                    })
                }
             
               
            </div>
            <div className="w3-col l6 w3-padding-large">
                <img
                    src="https://www.w3schools.com/w3images/tablesetting.jpg"
                    className="w3-round w3-image w3-opacity-min"
                    alt="Menu"
                    style={{ width: "100%" }}
                />
            </div>
        </div>
        <hr />
    </>

}

export default Menu