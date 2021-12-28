import { CartItem } from '@components/index'
import { useApp } from '@src/hooks/useapp';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Container = styled.div<{scrollType: string}>`
  margin: 0 15px;
  
  & div {
    max-height: 240px;
    overflow-y: ${props => props.scrollType};
  }

  & div::-webkit-scrollbar {
    width: 5px;
  }
    
  & div::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 30px;
  }
    
  & div::-webkit-scrollbar-thumb {
      background: #888; 
      border-radius: 30px;
  }
    
  & div::-webkit-scrollbar-thumb:hover {
      background: #555; 
  }
`

const EmpetyText = styled.h3`
  text-align: center;
  opacity: 0.4;
`

const CartList: React.FC = () => {
  const {cartItems} = useApp()
  const ref = useRef<HTMLHeadingElement>(null)

  if (cartItems.length === 0) return <EmpetyText>The cart is still empety</EmpetyText>
  
  return (
    <Container scrollType={ref.current?.clientHeight && ref.current?.clientHeight >= 230 ? 'scroll' : 'hidden'}>
      <div ref={ref}>
        {cartItems.map(item => <CartItem key={item.id} item={item} />)}
      </div>
    </Container>
  );
};

export default CartList;