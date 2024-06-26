import { useContext } from "react"
import { AuthContext, AuthContextType } from "../../context/AuthContext"


export const RoleProvider = ({ children, roleNumber }: any, ) => {

    const { user } = useContext(AuthContext) as AuthContextType
    
    let roleControl = false;

    user.roles?.forEach((element: any) => {
        if (element == roleNumber) {
            roleControl = true;
        }
    });

    if (roleControl)
        return children
    else
        return <></>
}



export const USER_ROLES = {
    PRODUCT_LIST: 1,
    PRODUCT_DETAIL: 2,
    DELETE:3
}





