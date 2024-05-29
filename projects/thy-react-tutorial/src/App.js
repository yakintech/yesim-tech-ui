// import UserDetail from "./propsSample/UserDetail"

import ObjectArraySample from "./jsxSample/ObjectArraySample"
import Footer from "./template/Footer"
import Header from "./template/Header"
import Navbar from "./template/Navbar"
import PageContent from "./template/PageContent"



function App() {

  return <>
    <Navbar/>
    <Header/>
    <PageContent/>
    <Footer/>
    {/* <UserDetail name="Çağatay" surname="Yıldız" age={18} points={[3, 5, 1]} status={true} /> */}
  </>
}


export default App