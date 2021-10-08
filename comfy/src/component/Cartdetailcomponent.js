import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import CartItem from '../component/cart/CartItem';
import SummaryCart from './cart/SummaryCart';
import axios from '../config/axios';
import { getToken } from '../services/localStorage';
import { OrderContext } from '../contexts/orderContext';
const Decoration = styled.div`
  * {
    margin: 0;
  }

  .cart-container {
    margin: 0 auto;
    margin-top: 10px;
  }

  .cart-table {
    margin: auto;
    width: 100%;
    border-collapse: collapse;
  }

  .cart-info {
    display: flex;
    flex-wrap: wrap;
  }

  td .img-info {
    width: 170px;
    height: 150px;
    margin: 0 10px 0 0px;
  }

  th {
    text-align: left;
    padding: 5px;
    color: #fff;
    background: #b29385;
    font-weight: 400;
  }

  td {
    padding: 10px 5px;
  }

  td input {
    width: 60px;
    height: 20px;
    padding: 5px 8px;
  }
  .info-details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .info-name {
    font-size: 24px;
    font-weight: 500;
  }
  .info-choice {
    font-size: 12px;
  }
  .info-price {
    margin-top: 10px;
    font-weight: 500;
  }
  .btn-rmv-edt {
    display: flex;
  }
  td p.btn-remove {
    color: #ff523b;
    font-size: 12px;
    text-decoration: none;
  }
  td .btn-edit {
    color: blue;
    font-size: 12px;
    margin-left: 5px;
    text-decoration: none;
  }
  .btn-add {
    font-size: 12px;
    margin-left: 10px;
    border: 1px solid black;
    border-radius: 30%;
    background-color: #eecb14;
  }
  .btn-subtract {
    font-size: 12px;
    margin-left: 10px;
    border-radius: 30%;
    border: 1px solid black;
  }
  .total-price {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
  }

  .total-table {
    /* border-top: 2px solid black; */
    width: 100%;
    max-width: 380px;
  }

  td:last-child {
    text-align: right;
  }
  th:last-child {
    text-align: right;
  }

  .total-price .total-table td:first-child {
    font-weight: 600;
  }

  @media (max-width: 800px) {
    p.info-name {
      font-size: 16px;
    }

    p.info-choice {
      font-size: 10px;
    }
    p.info-price {
      display: none;
    }
  }
`;

function Cartdetailcomponent({ setError }) {
  const [cartLists, setCartLists] = useState([]);
  const [calPrice, setCalPrice] = useState([]);
  const totalPrice = calPrice.reduce((acc, item) => acc + +item, 0).toFixed(2);
  const { setPaymentPrice } = useContext(OrderContext);
  setPaymentPrice(totalPrice);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/carts', {
          headers: { authorization: `Bearer ${getToken()}` },
        });
        setCartLists(res.data.cartlist);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <Decoration>
      <div className="cart-container">
        <table className="cart-table">
          <tr>
            <th></th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
          {cartLists?.map((item, idx) => (
            <CartItem
              key={item.id}
              item={item}
              setCartLists={setCartLists}
              cartLists={cartLists}
              setCalPrice={setCalPrice}
              calPrice={calPrice}
              setError={setError}
            />
          ))}
        </table>
        <SummaryCart totalPrice={totalPrice} />
      </div>
    </Decoration>
  );
}

export default Cartdetailcomponent;
