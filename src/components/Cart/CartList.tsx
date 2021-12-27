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

const CartList: React.FC = () => {
  const {cartItems} = useApp()
  const ref = useRef<HTMLHeadingElement>(null)
  
  const scrollHandler = () => {
    if (ref.current?.clientHeight && ref.current?.clientHeight >= 230) return 'scroll'

    return 'hidden'
  }

  

  // useEffect(() => {
  //   console.log(ref.current?.clientWidth);
  // }, [ref.current?.clientHeight])

  return (
    <Container scrollType={ref.current?.clientHeight && ref.current?.clientHeight >= 230 ? 'scroll' : 'hidden'}>
      <div ref={ref}>
        {cartItems.map(item => <CartItem key={item.id} item={item} />)}
      </div>
    </Container>
  );
};

export default CartList;