import Header from "./Header.jsx"
import Main from "./Main.jsx"
import { BrowserRouter } from "react-router-dom"


  function App() {

    return (
      <BrowserRouter>
        <Header/>
        <Main/>
      </BrowserRouter>
    )
  }

export default App
