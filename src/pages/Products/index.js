import React, { useState } from 'react';

import productsData from '../../data/products';
import currencyFormat from '../../utils/currencyFormat';
import { 
  Content,
  ProductsList,
  ProductItem,
  TotalBuyContainer,
  Button
} from './styles';

export default function Products() {
  const [cart, setCart] = useState({
    products: productsData.items.map(item => ({
      id: item.uniqueId,
      name: item.name,
      price: currencyFormat(item.price/100),
      sellingPrice: currencyFormat(item.sellingPrice/100),
      image: item.imageUrl
    })),
    total: currencyFormat(productsData.items.reduce((total, currentItem) => (total + currentItem.sellingPrice), 0)/100)
  });

  return (
      <Content>
        <h1>Meu carrinho</h1>
        <ProductsList>
          {cart.products.map(product => (
            <ProductItem key={String(product.id)}>
              <img src={product.image} alt={product.name} />
              <div>
                <h2>{product.name}</h2>
                <span>{product.price}</span>
                <span>{product.sellingPrice}</span>
              </div>
            </ProductItem>
          ))}
        </ProductsList>
        <TotalBuyContainer>
          <strong>Total</strong>
          <strong>{cart.total}</strong>
        </TotalBuyContainer>
        <Button>Finalizar compra</Button>
      </Content>
  )
}