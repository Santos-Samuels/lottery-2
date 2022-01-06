import { Filter } from '@components/index'
import { useApp } from '@src/hooks/useapp';
import { Link } from "react-router-dom";
import { Section } from './style';


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