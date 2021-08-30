import React from 'react';
import styled from 'styled-components';

import Path from '../component/Path';
import credit from '../image/credit.png';

const Decoration = styled.div`
  padding-top: 64px;

  .bar {
    width: 80%;
    margin: 0 auto;
    margin-top: 10px;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      bottom: 0px;
      width: 100%;
      border-bottom: 2px solid rgba(0, 0, 0, 0.65);
    }
  }

  .inside {
    display: flex;
    align-items: center;
    padding-left: 20px;
  }

  .all {
    width: 35px;
    height: 35px;
    padding-right: 10px;
  }

  .text-bar {
    font-weight: 500;
  }

  .container {
    margin: 0 auto;
    margin-top: 5px;
    width: 80%;
    min-height: 450px;
    padding: 10px 0;
  }
  .boxes {
    width: 90%;
    margin: 0 auto;
  }
  .text1 {
    margin: 0;
    font-size: 40px;
    font-weight: 700;
  }
  .text2 {
    margin: 0;
    margin-top: 15px;
    font-size: 24px;
    font-weight: 500;
  }

  .btn {
    position: relative;
    bottom: -200px;
    width: 100%;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    line-height: 36px;
    padding: 0 16px;
    background-color: #384937;
    color: whitesmoke;
    margin-top: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    a {
      text-decoration: none;
    }
    &::before {
      content: '';
      position: absolute;
      left: 0%;
      top: -20px;
      width: 100%;
      border-top: 1px solid rgba(0, 0, 0, 0.65);
    }
  }

  .btn:hover {
    background-color: #456044;
  }

  @media (max-width: 780px) {
    .text1 {
      font-size: 36px;
    }
    .text2 {
      font-size: 20px;
    }
  }
  @media (max-width: 693px) {
    .text1 {
      font-size: 28px;
    }
    .text2 {
      font-size: 16px;
    }
  }
  @media (max-width: 543px) {
    .text1 {
      font-size: 24px;
    }
    .text2 {
      font-size: 14px;
    }
  }
`;
function Orderconfirm() {
  return (
    <Decoration>
      <Path />
      <div className="bar">
        <div className="inside">
          <img className="all" src={credit} alt="credit"></img>
          <p className="text-bar">Payment</p>
        </div>
      </div>

      <div className="container">
        <div className="boxes">
          <p className="text1">Your order has been confirmed </p>
          <p className="text2">You can check order status on "My order" </p>
          <a href="/homepage">
            <button type="button" className="btn">
              Back to homepage
            </button>
          </a>
        </div>
      </div>
    </Decoration>
  );
}

export default Orderconfirm;
