import { ActionButton } from '@components/index'
import { useApp } from '@src/hooks/useapp';
import { Container } from './style';


const ActionButtonList: React.FC = () => {
  const {clearCurrentBet, completeCurrentBet, addCartItem} = useApp()

  return (
    <Container>
      <div>
        <ActionButton actionHandler={completeCurrentBet}>Complete game</ActionButton>
        <ActionButton actionHandler={clearCurrentBet}>Clear game</ActionButton>
      </div>

      <ActionButton fill={true} actionHandler={addCartItem}><i className='bi bi-cart3'/> Add to cart</ActionButton>
    </Container>
  );
};

export default ActionButtonList;