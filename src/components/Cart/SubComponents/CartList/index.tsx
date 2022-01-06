import { CartItem } from '@components/index'
import { useApp } from '@src/hooks/useapp';
import { useRef } from 'react';
import { Container, EmpetyText } from './style';

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