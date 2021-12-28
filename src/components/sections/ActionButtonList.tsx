import { ActionButton } from '@components/index'
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
  return (
    <Container>
      <div>
        <ActionButton fill={false}>Complete game</ActionButton>
        <ActionButton fill={false}>Clear game</ActionButton>
      </div>

      <ActionButton fill={true}><i className='bi bi-cart3'/> Add to cart</ActionButton>
    </Container>
  );
};

export default ActionButtonList;