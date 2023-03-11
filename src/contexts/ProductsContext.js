import { createContext, useState } from 'react';
import ProductsData from '../data/products.json'
import { useEffect } from 'react';

const ProductsContext = createContext()

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(ProductsData)
    const [cartItems, setCartItems] = useState(null)

    useEffect(() => {
        sessionStorage.setItem('products', JSON.stringify(products))
    }, [])

    return <ProductsContext.Provider
        value={{ products, cartItems, setProducts, setCartItems, }}
    >
        {children}
    </ProductsContext.Provider>
}
export default ProductsContext