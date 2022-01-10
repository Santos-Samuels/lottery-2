import { AppContainer, TypeButtonList, BallsList, Cart, ActionButtonList, CartModal, FeedbackMessage } from '@components/index'
import { useApp } from '@src/hooks/useapp';
import { useEffect, useState } from 'react';
import { Content, Div, HeaderContent } from './style';


const NewBet: React.FC = () => {
  const {windowWidth, currentGameId, getRoleById, updateCurrentTypeGame, lotteryRoles} = useApp()
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    updateCurrentTypeGame(lotteryRoles.types[0].id)
  }, [])

  return (
    <AppContainer>
      <Content>
        <section>
          <HeaderContent>
            <Div>
              <p><strong>New bet</strong> for <span>{getRoleById(currentGameId).type}</span></p>
              
              {windowWidth < 950 && <button onClick={() => setIsModalOpen(!isModalOpen)}><i className="bi bi-cart3" /></button>}
            </Div>

            <div>
              <h4>Choose a game</h4> <br />
              <TypeButtonList isToggleable={false}/>
            </div>
            
            <p>
              <strong>Fill your bet</strong> <br />
              {getRoleById(currentGameId).description}
            </p>
          </HeaderContent>

          <BallsList />

          <ActionButtonList />
        </section>

        <section>
          {windowWidth >= 950 ? <Cart /> : <CartModal isOpen={isModalOpen} closeModalHandler={() => setIsModalOpen(!isModalOpen)} />}
        </section>
      </Content>
      
      <FeedbackMessage />
    </AppContainer>
  );
};

export default NewBet;