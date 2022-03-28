import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartList: [],
    },
    reducers: {
        addToCart(state, action) {
            state.cartList.push(action.payload)
        },
        setQuantily(state, action) {
            const id = action.payload.id
            const cartItem = state.cartList.find(item => item.id === id)
            
            if(cartItem) {
                cartItem.quantily = action.payload.newQuantily
            }
        },
        deleteCartItem(state, action) {
            const id = action.payload
            state.cartList = state.cartList.filter(item => item.id !== id)
        },
        paymentCart(state) {
            state.cartList = []
        },
    }
})

export default cartSlice.reducer
export const { addToCart, setQuantily, deleteCartItem, paymentCart } = cartSlice.actions