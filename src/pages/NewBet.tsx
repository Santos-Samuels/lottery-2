import { AppContainer, TypeButtonList, BallsList, Cart } from '@components/index'
import styled from 'styled-components';

const HeaderContent = styled.header`
  margin: 20px 0;

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
    margin: 30px 0;

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
      margin-right: 20px;
    }
  }

  @media (min-width: 1100px) {
    grid-template-columns: auto 30%;
  }

  @media (min-width: 1300px) {
    grid-template-columns: auto 25%;
  }
`

const NewBet: React.FC = () => {

  return (
    <AppContainer>
      <Content>
        <section>
          <HeaderContent>
            <p><strong>New bet</strong> for mega-sena</p>

            <div>
              <h4>Choose a game</h4> <br />
              <TypeButtonList isToggleable={false}/>
            </div>
            
            <p>
              <strong>Fill your bet</strong> <br />
              Mark as many numbers as you want up to a maximum of 50. Win by hitting 15, 16, 17, 18, 19, 20 or none of the 20 numbers drawn.
            </p>
          </HeaderContent>

          <BallsList />
        </section>

        <section>
          <Cart />
        </section>
      </Content>
    </AppContainer>
  );
};

export default NewBet;