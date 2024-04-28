import React from "react"
import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/home"
import CreateInvoice from "./pages/invoice/create"
import Reports from "./pages/upload-report"
import Page404 from "./pages/Page404"
import TestList from "./pages/upload-report/TestList"
import InvoiceList from "./pages/overview"
import InvoiceDetails from "./pages/invoice/details"
import CollectPayment from "./pages/collect-payment"
import Overview from "./pages/overview"
import DeliverReport from "./pages/deliver-report"
import References from "./pages/references"
import SendSMS from "./pages/send-sms"
import ReportUploadForm from "./pages/upload-report/forms"
import PriceList from "./pages/price-list"
import EditInvoice from "./pages/invoice/edit/"
import Print from "./pages/invoice/print/index2"

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invoice/print" element={<Print />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/invoice/create" element={<CreateInvoice />} />
        <Route path="/invoice/edit/:_id" element={<EditInvoice />} />
        <Route path="/invoice/datails" element={<InvoiceDetails />} />
        <Route path="/upload-report" element={<TestList />} />
        <Route path="/upload-report/:testName" element={<Reports />} />
        <Route path="/upload/:testName/:id" element={<ReportUploadForm />} />
        <Route path="/collect-payment" element={<CollectPayment />} />
        <Route path="/deliver-report" element={<DeliverReport />} />
        <Route path="/send-sms" element={<SendSMS />} />
        <Route path="/price-list" element={<PriceList />} />
        <Route path="/references" element={<References />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Layout>
  )
}

export default App
