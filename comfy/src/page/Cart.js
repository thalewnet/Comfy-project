import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Cartdetailcomponent from '../component/Cartdetailcomponent';
import Path from '../component/Path';
import { OrderContext } from '../contexts/orderContext';
import cart from '../image/cart.png';

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

  .text-box {
    width: 80%;
    margin: 0 auto;
    display: flex;
  }
  .topics {
    width: 100%;
    margin: 0 auto;
    margin-top: 10px;
    font-weight: 500;
    font-size: 20px;
  }
  .component-container {
    width: 80%;
    margin: 0 auto;
  }

  .container-ship {
    margin: 0 auto;
    width: 80%;
    display: flex;
    padding: 10px 0px;
    position: relative;
    border-bottom: 1px solid black;
    .typeship {
      margin: 0;
      margin-right: 20px;
      margin-left: 65px;
      font-weight: 500;
      font-size: 20px;
    }
  }
  .controlinput {
    margin-bottom: 8px;
  }

  .form {
    margin: 0 auto;
    width: 80%;
  }

  .btn {
    position: relative;
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

    &::before {
      content: '';
      position: absolute;
      left: 0%;
      top: -20px;
      width: 100%;
      border-top: 1px solid rgba(0, 0, 0, 0.65);
    }
    a {
      text-decoration: none;
    }
  }

  .btn:hover {
    background-color: #456044;
  }
  .error-text {
    color: red;
    font-size: 16px;
    font-style: oblique;
    margin-right: 10px;
  }
`;

function Cart() {
  const { checkOutItems } = useContext(OrderContext);
  const [error, setError] = useState({});
  const history = useHistory();
  const handleSummaryOrder = (e) => {
    e.preventDefault();
    if (checkOutItems.length === 0) {
      setError((cur) => ({
        ...cur,
        checkout: 'กรุณาเลือกสินค้าอย่างน้อย 1 ชิ้น',
      }));
    } else {
      history.push('/delivery');
      // console.log(checkOutItems);
    }
  };
  return (
    <Decoration>
      <Path />
      <div className="bar">
        <div className="inside">
          <img className="all" src={cart} alt="cart" />
          <p className="text-bar">Shopping cart</p>
        </div>
      </div>

      <div className="text-box">
        <p className="topics">Check out</p>
        {error.checkout && <div className="error-text">{error.checkout}</div>}
      </div>

      <div className="component-container">
        <Cartdetailcomponent setError={setError} />
      </div>

      <div className="form">
        <Link to={'/cart/delivery'}>
          <button type="button" className="btn" onClick={handleSummaryOrder}>
            Confirm Order
          </button>
        </Link>
      </div>
    </Decoration>
  );
}

export default Cart;
