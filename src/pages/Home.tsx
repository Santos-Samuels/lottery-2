import { Filter, RecentBetList, AppContainer } from "@components/index";
import { useEffect, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  & section h3 {
    text-transform: uppercase;
    white-space: nowrap;
  }

  & section div:first-child {
    display: flex;
    flex-direction: column;
  }

  & section:first-child section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (min-width: 950px) {
    & section h3 {
      margin-right: 50px;
    }

    & section div:first-child {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

const Home: React.FC = () => {
  const valid = false;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  
  console.log(windowWidth);
  
  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
    return () => window.removeEventListener("resize", () => setWindowWidth(window.innerWidth));
  }, [])

  if (valid) return <Navigate replace to="/login" />;

  return (
    <AppContainer>
      <Container>
        <section>
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
        </section>

        <RecentBetList />
      </Container>
    </AppContainer>
  );
};

export default Home;
