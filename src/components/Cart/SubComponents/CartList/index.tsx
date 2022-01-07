import { CartItem } from '@components/index'
import { useApp } from '@src/hooks/useapp';
import { useEffect, useRef, useState } from 'react';
import { Container, EmpetyText } from './style';

const CartList: React.FC = () => {
  const {cartItems} = useApp()
  const ref = useRef<HTMLHeadingElement>(null)
  const [scrollType, setScrollType] = useState('hidden')

  useEffect(() => {
    if (ref.current?.clientHeight! >= 230)
      setScrollType('scroll')
    else setScrollType('hidden')
  }, [cartItems])

  if (cartItems.length === 0) return <EmpetyText>The cart is still empety</EmpetyText>

  return (
    <Container scrollType={scrollType}>
      <div ref={ref}>
        {cartItems.map(item => <CartItem key={item.id} item={item} />)}
      </div>
    </Container>
  );
};

export default CartList;