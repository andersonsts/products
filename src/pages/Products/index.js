import { useCallback, useEffect, useMemo, useState } from 'react';
import Loader from 'react-loader-spinner';

import { getAllProductsInCart } from '../../services/products.service';
import { blue } from '../../styles/colors';
import currencyFormat from '../../utils/currencyFormat';

import { 
  Content,
  ProductsList,
  ProductItem,
  TotalBuyContainer,
  Button,
  FreeShippingMessage,
  ChangeViewProductsOption,
  ContainerLoader
} from './styles';

export default function Products() {
  const [optionSelected, setOptionSelected] = useState('acima');
  const [cart, setCart] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);
      const cartData = await getAllProductsInCart({ option: optionSelected }); 

      setCart({...cartData});
      setLoading(false);
    }

    loadProducts();
  }, [optionSelected])
  
  const total = useMemo(() => {
    return {
      valueWithFormatCurrency: currencyFormat(cart.total),
      valueWithoutFormatCurrency: cart.total 
    }
  }, [cart]);

  const products = useMemo(() => {
    if(cart.products && cart.products.length > 0) {
      return cart.products.map(product => 
        ({ ...product, 
          price: currencyFormat(product.price), 
          sellingPrice: currencyFormat(product.sellingPrice) 
        })
      )
    }

    return [];
  }, [cart])

  const handleChangeOption = useCallback(() => {
    optionSelected === 'acima' ? setOptionSelected('abaixo') : setOptionSelected('acima')
  }, [optionSelected])

  return (
    <Content>
      <h1>Meu carrinho</h1>

      {!loading ? (
        <>
          <ChangeViewProductsOption>
            <button type="button" onClick={handleChangeOption}>
              {optionSelected === 'acima' ? 'Mudar p/ produtos abaixo de R$ 10,00' : 'Mudar p/ produtos acima de R$ 10,00'}
            </button>
          </ChangeViewProductsOption>

          <ProductsList>
            {products.map(product => (
              <ProductItem key={String(product.id)}>
                <img src={product.imageUrl} alt={product.name} />
                <div>
                  <h2>{product.name}</h2>
                  <span>{product.price}</span>
                  <span>{product.sellingPrice}</span>
                </div>
              </ProductItem>
            ))}
          </ProductsList>

          <TotalBuyContainer>
            <div>
              <strong>Total</strong>
              <strong>{total.valueWithFormatCurrency}</strong>
            </div>

            {total.valueWithoutFormatCurrency > 10 && 
              <FreeShippingMessage>
                <strong>
                  Parabéns, sua compra tem frente grátis!
                </strong>
              </FreeShippingMessage>
            }
          </TotalBuyContainer>

          <Button>Finalizar compra</Button>
        </>
      ) : (
        <ContainerLoader>
          <Loader 
            type="ThreeDots"
            color={blue}
            height={60}
            width={60}
          />
        </ContainerLoader>
      )}
    </Content>
  )
}