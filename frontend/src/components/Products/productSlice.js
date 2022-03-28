import { createSlice } from '@reduxjs/toolkit'

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        productList: [],
    },
    reducers: {
        saveProducts(state, action) {
            state.productList = action.payload
        },
    }
})

export default productsSlice.reducer
export const { saveProducts } = productsSlice.actions