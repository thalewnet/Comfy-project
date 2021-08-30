import React from 'react';
import Branner from '../component/Branner.js';
import Card from '../component/Card.js';
import Card2 from '../component/Card2.js';
import Card3 from '../component/Card3.js';
import styled from 'styled-components';

const Decoration = styled.div`
  .main-container {
    display: flex;
    flex-direction: column;
    padding-top: 15px;
    width: 80%;
    margin: 0 auto;
  }

  .recommend {
    display: flex;
    justify-content: center;
    font-weight: normal;
    font-size: 24px;
    line-height: 42px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    position: relative;
  }

  .recommend:before {
    content: '';
    position: absolute;
    bottom: -2px;
    width: 100%;
    border-bottom: 1px solid black;
  }

  .item-card {
    display: flex;
    justify-content: flex-start;
    padding-top: 20px;
    flex-wrap: nowrap;
    flex-shrink: 1;
    overflow-x: scroll;
  }

  .lower {
    display: flex;
    margin-top: 70px;
    justify-content: space-evenly;
  }

  @media (max-width: 1050px) {
    .bs {
      margin-bottom: 15px;
    }
    .lower {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .lower .bs3 {
      margin-top: 30px;
    }
  }
`;

const suggest = ['Doi Mon Chong', 'Mae Chan Tai', 'Doi Chang', 'Bann Bann', 'Chumphon'];
function HomePage() {
  return (
    <Decoration>
      <Branner />
      <div className="main-container">
        <div className="upper">
          <span className="recommend">Recommend Products</span>
          <div className="item-card">
            {suggest.map((item, idx) => (
              <div className="bs" key={idx}>
                <Card name={item} />
              </div>
            ))}
          </div>
        </div>
        <div className="lower">
          <div className="bs2">
            <Card2 title={'Local Coffee Bean'} />
          </div>
          <div className="bs3">
            <Card3 title={'Imported Coffee Bean'} />
          </div>
        </div>
      </div>
    </Decoration>
  );
}

export default HomePage;
