import styled from 'styled-components';
import { darken } from 'polished';
import { black, blue, gray, gray_secondary, green_first, green_secondary, white } from '../../styles/colors';

export const Content = styled.div`
  max-width: 580px;
  width: 100%;
  margin: 100px auto;
  border-radius: 10px;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.1);
  background-color: ${white};
  padding-bottom: 25px;
  min-height: 700px;

  @media (max-width: 500px) {
    margin: auto;
    border-radius: 0px;
  }

  > h1 {
    font-family: 'Poppins', sans-serif;
    text-align: center;
    font-size: 26px;
    padding: 20px 0px 15px;
    border-bottom: 2px solid ${gray};
  }
`;

export const ProductsList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0px 25px;
`;

export const ProductItem = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 20px;

    > h2 {
      font-family: 'Poppins', sans-serif;
      font-size: 18px;
    }

    span {
      font-family: 'Poppins', sans-serif;
      
      &:first-of-type {
        margin-top: 5px;
        color: ${gray_secondary};
        font-size: 14px;
      }

      &:last-of-type {
        color: ${black};
        font-size: 16px;
        font-weight: 600;
      }
    }
  }

  > img {
    width: 145px;
    height: 145px;
    border: 2px solid ${gray};
    padding: 10px;
    object-fit: cover;
  }
`;

export const TotalBuyContainer = styled.div`
  > div:nth-child(1) {
    margin: 25px 0px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 2px solid ${gray};
    font-family: 'Poppins', sans-serif;
    padding: 35px 30px;

    > strong {
      font-size: 26px;
      color: ${black};
    }
  }

  border-bottom: 2px solid ${gray};
`;  

export const Button = styled.button`
  background: ${blue};
  font-size: 26px;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${white};
  outline: none;
  border: 0;
  width: 90%;
  margin: 30px auto 0px;
  border-radius: 10px;
  padding: 20px 10px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${darken(0.1, blue)};
  }
`;

export const FreeShippingMessage = styled.strong`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  padding-bottom: 40px;

  > strong {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 460px;
    background-color: ${green_secondary};
    color: ${green_first};
    min-height: 48px;
    padding: 4px 20px;
    margin: 0 auto;
    border-radius: 20px;
  }
`;

export const ChangeViewProductsOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;

  > button {
    background: ${blue};
    border: 1px solid ${blue};
    outline: none;
    color: ${white};
    font-weight: bold;
    padding: 10px;
    font-family: 'Poppins', sans-serif;
    border-radius: 8px;

    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: ${darken(0.1, blue)};
    }
  }
`;

export const ContainerLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;