import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Pending from "./pages/Pending"
import Done from "./pages/Done"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="pending" element={ <Pending/> } />
        <Route path="done" element={ <Done/> } />
      </Routes>
    </div>
  )
}

export default App
