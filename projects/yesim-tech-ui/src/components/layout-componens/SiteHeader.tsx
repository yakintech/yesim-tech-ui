import React, { useContext, useEffect, useState } from 'react'
import { MenuService } from '../../api/service/menu/MenuService'



function SiteHeader() {

  

  const [menus, setmenus] = useState([])

  useEffect(() => {
    let menuService = new MenuService();
    menuService.getAll().then((response) => {
      console.log(response.items);
      
      setmenus(response.items)
    })
  }, [])


  return (<>
    <ul>
      {
        menus?.map((menu: any) => {
          return <li key={menu._id}>{menu.name}</li>
        })
      }
    </ul>

  </>
  )
}

export default SiteHeader