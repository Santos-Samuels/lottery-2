import { CartList } from '@components/index'
import { useApp } from '@src/hooks/useapp';
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Container = styled.div`
  font-style: italic;
  background-color: #FFFFFF;
  border: 1px solid #E2E2E2;
  border-radius: 10px;
  width: 100%;
`
const SaveButton = styled.button`
  font-size: 30px;
  background-color: #F4F4F4;
  color: #27C383;
  font-weight: 600;
  font-style: italic;
  border-top: 1px solid #E2E2E2;
  padding: 20px;
  width: 100%;
  border: none;
  border-radius: 0 0 10px 10px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #d8d7d7;
  }
`

const CartTitle = styled.p`
  font-size: 20px;
  text-transform: uppercase;
  margin: 30px 15px;
`

const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & i {
    font-size: 40px;
    cursor: pointer;
  }
`

const Cart: React.FC<{closeModal?: () => void}> = (props) => {
  const {cartTotal, windowWidth} = useApp()

  return (
    <Container>
      <CartHeader>
        <CartTitle><strong>cart</strong></CartTitle>
        {windowWidth < 950 && <i className="bi bi-x" onClick={props.closeModal} />}
      </CartHeader>

      <CartList />

      <CartTitle><strong>cart</strong> TOTAL: {cartTotal.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</CartTitle>
      
      <SaveButton>
        Save <i className="bi bi-arrow-right" />
      </SaveButton>
    </Container>
  );
};

export default Cart;