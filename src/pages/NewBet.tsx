import { AppContainer, TypeButtonList, BallsList, Cart, ActionButtonList, CartModal } from '@components/index'
import { useApp } from '@src/hooks/useapp';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContent = styled.header`
  margin: 20px 0 5px;

  & p:first-child {
    text-transform: uppercase;
    font-size: 20px;
  }

  & div {
    margin: 20px 0;
  }

  & p:nth-child(2) {
    font-size: 15px;
  }

  @media (min-width: 820px) {
    margin: 30px 0 15px;

    & div {
      margin: 30px 0;
    }
  }
`

const Content = styled.div`
  @media (min-width: 950px) {
    display: grid;
    grid-template-columns: auto 35%;
    
    & section:first-child {
      margin-right: 35px;
    }
  }

  @media (min-width: 1100px) {
    grid-template-columns: auto 30%;
  }
`

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & button {
    font-size: 20px;
    background-color: transparent;
    border: 1px solid #868686;
    color: #868686;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s;
  }

  & button:hover {
    background-color: #868686;
    color: #FFFFFF;
  }
`

const NewBet: React.FC = () => {
  const {windowWidth, currentGameRole, currentBet} = useApp()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const TOKEN = localStorage.getItem('TOKEN') === 'undefined' ? null : localStorage.getItem('TOKEN')

  if (!TOKEN) return <Navigate replace to="/login" />;

  return (
    <AppContainer>
      <Content>
        <section>
          <HeaderContent>
            <Div>
              <p><strong>New bet</strong> for <span>{currentGameRole.type}</span></p>
              
              {windowWidth < 950 && <button onClick={() => setIsModalOpen(!isModalOpen)}><i className="bi bi-cart3" /></button>}
            </Div>

            <div>
              <h4>Choose a game</h4> <br />
              <TypeButtonList isToggleable={false}/>
            </div>
            
            <p>
              <strong>Fill your bet</strong> <br />
              {currentGameRole.description}
            </p>
          </HeaderContent>

          <BallsList />

          <ActionButtonList />
        </section>

        <section>
          {windowWidth >= 950 ? <Cart /> : <CartModal isOpen={isModalOpen} closeModalHandler={() => setIsModalOpen(!isModalOpen)} />}
        </section>
      </Content>
    </AppContainer>
  );
};

export default NewBet;