import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  patientData: { name: "", age: "", contact: "", referredBy: "" },
  testList: [],
  invoiceData: { total: 0, discount: 0, afterDiscount: 0, adjustment: 0, netAmount: 0, paid: 0 },
  loadingResult: null,
}

const invoiceSlice = createSlice({
  name: "createInvoice",
  initialState,
  reducers: {
    updatePatientData(state, action) {
      state.patientData = action.payload
    },
    updateTestList(state, action) {
      state.testList = action.payload
    },
    updateInvoiceData(state, action) {
      state.invoiceData = action.payload
    },
    setError(state, action) {
      state.loadingResult = action.payload
    },
    clearError(state) {
      state.loadingResult = null
    },
  },
})

export const { updatePatientData, updateTestList, updateInvoiceData, setError, clearError } = invoiceSlice.actions

export default invoiceSlice.reducer
