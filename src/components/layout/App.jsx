import { BrowserRouter } from "react-router-dom"
import Header from "./Header.jsx"
import Main from "./Main.jsx"
import Footer from "./Footer.jsx"
import CarritoProvider from "../../contexto.jsx"
import "../../contexto.jsx"


function App() {

  return (
    <BrowserRouter>

      <CarritoProvider>
        <Header />
        <Main />
        <Footer />
      </CarritoProvider>
      
    </BrowserRouter>
  )
}

export default App
