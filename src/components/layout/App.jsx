import { BrowserRouter } from "react-router-dom"
import Main from "./Main.jsx"
import Footer from "./Footer.jsx"
import CarritoProvider from "../../CartContext.jsx"
import "../../CartContext.jsx"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import NavBar from "./NavBar.jsx"



function App() {

  return (
    <BrowserRouter>

      <CarritoProvider>
        <NavBar />
        <Main />
        <Footer />
      </CarritoProvider>
      <ToastContainer/>
      
    </BrowserRouter>
  )
}

export default App
