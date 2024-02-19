import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import CreateInvoice from "./pages/invoice/create"

const App = () => {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/create-invoice" element={<CreateInvoice/>} />
      </Routes>
    </section>
  )
}

export default App
