import { Filter } from '@components/index'
import { useApp } from '@src/hooks/useapp';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Section = styled.section`
  & h3 {
    text-transform: uppercase;
    white-space: nowrap;
  }

  & div:first-child {
    display: flex;
    flex-direction: column;
  }

  &:first-child section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (min-width: 950px) {
    & h3 {
      margin-right: 50px;
    }

    & div:first-child {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
`

const HeaderRecentGame: React.FC = () => {
  const {windowWidth} = useApp()

  return (
    <Section>
      <div>
        <div>
          <section>
            <h3>Recent games</h3>
            {windowWidth < 950 && <h2>
              <Link
                to="/new-bet"
                style={{ textDecoration: "none", color: "#b5c401" }}
              >
                New Bet <i className="bi bi-arrow-right" />
              </Link>
            </h2>}
          </section>
          <Filter />
        </div>

        {windowWidth >= 950 && <h2>
          <Link
            to="/new-bet"
            style={{ textDecoration: "none", color: "#b5c401" }}
          >
            New Bet <i className="bi bi-arrow-right" />
          </Link>
        </h2>}
      </div>
    </Section>
  );
};

export default HeaderRecentGame;