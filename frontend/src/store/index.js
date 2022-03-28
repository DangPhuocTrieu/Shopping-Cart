import { configureStore } from '@reduxjs/toolkit'
import productsReducer from '../components/Products/productSlice'
import cartReducer from '../components/Cart/cartSlice'

const rootReducer = {
    products: productsReducer,
    cart: cartReducer
}

const store = configureStore({
    reducer: rootReducer
})

export default store