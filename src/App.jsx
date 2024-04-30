import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import CreateInvoice from "./pages/invoice/create"
import Reports from "./pages/upload-report"
import Page404 from "./pages/Page404"
import TestList from "./pages/upload-report/TestList"
import InvoiceDetails from "./pages/invoice/details"
import CollectPayment from "./pages/collect-payment"
import Overview from "./pages/overview"
import AllInvoices from "./pages/invoice/all"
import References from "./pages/references"
import SendSMS from "./pages/send-sms"
import ReportUploadForm from "./pages/upload-report/forms"
import PriceList from "./pages/price-list"
import EditInvoice from "./pages/invoice/edit/"
import Invoice from "./pdf/invoice"
import PrintReports from "./pdf/index"
import Print from "./pages/print"
import Doctors from './pages/doctors'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/overview" element={<Overview />} />
      <Route path="/invoice/create" element={<CreateInvoice />} />
      <Route path="/invoice/datails" element={<InvoiceDetails />} />
      <Route path="/invoice/edit/:_id" element={<EditInvoice />} />
      <Route path="/invoice/all" element={<AllInvoices />} />
      
      <Route path="/upload-report" element={<TestList />} />
      <Route path="/upload-report/:testName" element={<Reports />} />
      <Route path="/upload/:testName/:id" element={<ReportUploadForm />} />
      <Route path="/collect-payment" element={<CollectPayment />} />
      <Route path="/send-sms" element={<SendSMS />} />
      <Route path="/price-list" element={<PriceList />} />
      <Route path="/references" element={<References />} />

      <Route path="/print" element={<Print />} />
      <Route path="/print/reports/:invoiceId" element={<PrintReports />} />
      <Route path="/print/invoice" element={<Invoice />} />

      <Route path="/doctors" element={<Doctors />} /> 
      <Route path="*" element={<Page404 />} />
    </Routes>
  )
}

export default App
