import { createContext, useState } from 'react';

const ProductContext = createContext();

function ProductProvider({ children }) {
  const [cartItem, setCartItem] = useState({
    skuId: '',
    amount: '',
    productId: '',
    roast: '',
    grind: '',
    weight: '',
    price: '',
    userId: '',
  });
  return (
    <ProductContext.Provider value={{ cartItem, setCartItem }}>
      {children}
    </ProductContext.Provider>
  );
}

export { ProductContext, ProductProvider };
