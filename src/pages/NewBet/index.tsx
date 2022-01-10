import { AppContainer, TypeButtonList, BallsList, Cart, ActionButtonList, CartModal, Loading, FeedbackMessage } from '@components/index'
import { useApp } from '@src/hooks/useapp';
import api from '@src/shared/services/api';
import { ILotteryRoles, IRequestInfo } from '@src/shared/interfaces';
import { useEffect, useState } from 'react';
import { Content, Div, HeaderContent } from './style';


const initialRequestInfo: IRequestInfo<any, boolean> = {
  loading: true,
  data: null,
  error: false,
  success: false
}

const NewBet: React.FC = () => {
  const {windowWidth, currentGameId, getRoleById, setLotteryRoles} = useApp()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [requestInfo, setRequestInfo] = useState<IRequestInfo<any, boolean>>(initialRequestInfo)
  
  useEffect(() => {
    if (requestInfo.loading) {
      api.get<ILotteryRoles>('/cart_games').then(response => {
        setRequestInfo(prevInfo => {return { ...prevInfo, loading: false }})
        setLotteryRoles(response.data)
      })
    }
  }, [])
  
  if (requestInfo.loading) return <Loading />

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