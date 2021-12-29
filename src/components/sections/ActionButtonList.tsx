import { ActionButton } from '@components/index'
import { useApp } from '@src/hooks/useapp';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;

  & div {
    margin-bottom: 10px;
  }

  & div button {
    width: 48%;
  }

  & button:first-child {
    margin-right: 15px;
  }

  @media (min-width: 630px) {
    flex-direction: row;
    justify-content: space-between;

    & div button {
      width: auto;
    }
  }
`

const ActionButtonList: React.FC = () => {
  const {clearCurrentBet, completeCurrentBet, addToCart} = useApp()

  return (
    <Container>
      <div>
        <ActionButton fill={false} actionHandler={completeCurrentBet}>Complete game</ActionButton>
        <ActionButton fill={false} actionHandler={clearCurrentBet}>Clear game</ActionButton>
      </div>

      <ActionButton fill={true} actionHandler={addToCart}><i className='bi bi-cart3'/> Add to cart</ActionButton>
    </Container>
  );
};

export default ActionButtonList;