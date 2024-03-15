import { createSlice } from "@reduxjs/toolkit"

const searchSlice = createSlice({
  name: "search",
  initialState: {
    keyword: "",
    type: "invoiceId",
  },
  reducers: {
    setKeyword(state, action) {
      state.keyword = action.payload
    },
    setType(state, action) {
      state.type = action.payload
    },
  },
})

export const { setKeyword, setType } = searchSlice.actions
export default searchSlice.reducer
