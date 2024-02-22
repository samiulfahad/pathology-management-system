import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import CreateInvoice from "./pages/invoice/create"
import Reports from "./pages/manage-reports"
import Page404 from "./pages/Page404"
import TestList from "./pages/manage-reports/TestList"
import InvoiceList from "./pages/manage-invoices"
import InvoiceDetails from "./pages/invoice-details"

const App = () => {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invoices" element={<InvoiceList />} />
        <Route path="/invoice-datails" element={<InvoiceDetails/>} />
        <Route path="/reports" element={<TestList />} />
        <Route path="/reports/:testName" element={<Reports />} />
        <Route path="/create-invoice" element={<CreateInvoice />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </section>
  )
}

export default App
