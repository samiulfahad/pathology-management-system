// invoiceSlice.js
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  patientData: { name: "", age: "", contact: "", referredBy: "" },
  checkedTest: [],
  invoiceData: {
    total: 0,
    discount: 0,
    afterDiscount: 0,
    adjustment: 0,
    netAmount: 0,
    paid: 0,
  },
}

export const invoiceSlice = createSlice({
  name: "invoice",
  initialState: initialState,
  reducers: {
    resetState: (state) => {
      state = initialState
    },
    setCheckedTest: (state, action) => {
      if (!state.checkedTest.some((item) => item.name === action.payload.name)) {
        state.checkedTest.push(action.payload)
      } else {
        state.checkedTest = state.checkedTest.filter((item) => item.name !== action.payload.name)
      }
    },
    setName: (state, action) => {
      state.patientData.name = action.payload
    },
    setAge: (state, action) => {
      state.patientData.age = action.payload
    },
    setContact: (state, action) => {
      state.patientData.contact = action.payload
    },
    setReferredBy: (state, action) => {
      state.patientData.referredBy = action.payload
    },
    setTotal: (state, action) => {
      state.invoiceData.total = action.payload
    },
    setDiscount: (state, action) => {
      state.invoiceData.discount = action.payload
    },
    setAdjustment: (state, action) => {
      state.invoiceData.adjustment = action.payload
    },
    setPaid: (state, action) => {
      state.invoiceData.paid = action.payload
    },
    setNetAmount: (state, action) => {
      state.invoiceData.netAmount = action.payload
    },
    setPriceAfterDiscount: (state, action) => {
      state.invoiceData.afterDiscount = action.payload
    },
  },
})

export const {
  resetState,
  setName,
  setAge,
  setContact,
  setReferredBy,
  setCheckedTest,
  setInvoiceData,
  setPatientData,
  setError,
  setDiscount,
  setAdjustment,
  setPaid,
  setTotal,
  setNetAmount,
  setPriceAfterDiscount,
} = invoiceSlice.actions

export default invoiceSlice.reducer
