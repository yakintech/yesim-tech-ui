import { useContext } from "react"
import { AuthContext, AuthContextType } from "../../context/AuthContext"
import SiteHeader from "../../components/layout-componens/SiteHeader";
import SiteFooter from "../../components/layout-componens/SiteFooter";


export const RouteRoleProvider = ({ children, path }: any) => {

        const { user } = useContext(AuthContext) as AuthContextType

        let userUrlCheck = false;


        if (user?.urls) {
            
                user.urls.map((url: any) => {
                        if (url === path) {
                                userUrlCheck = true
                        }
                })
        }

        return userUrlCheck ? children : <AccessDenied/>
}


function AccessDenied() {
        return <>
                <SiteHeader/>
                <h1>Access Denied</h1>
                <SiteFooter/>
        </>
}
