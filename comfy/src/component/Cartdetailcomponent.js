import React from 'react';
import styled from 'styled-components';
import Cartcard from '../image/product.jpg';
import Cartcard2 from '../image/product2.jpg';
import Cartcard3 from '../image/product3.jpg';
import CartItem from '../component/cart/CartItem';
import SummaryCart from './cart/SummaryCart';
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
const MOCK_DATA = [
  {
    img: Cartcard,
    id: 1,
    name: 'Doi Mon Chong',
    choice: 'Honey process Light roast Whole bean 500 grams',
    price: 500,
  },
  {
    img: Cartcard3,
    id: 2,
    name: 'Mae Chan Tai',
    choice: 'Washed / Wet Process Light roast Medium ground 500 grams',
    price: 350,
  },
  {
    img: Cartcard2,
    id: 3,
    name: 'Doi Chang',
    choice: 'Washed / Wat process Light roast Fined ground 250 grams',
    price: 240,
  },
];
function Cartdetailcomponent() {
  return (
    <Decoration>
      <div className="cart-container">
        <table className="cart-table">
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
          {/* Product1 */}
          {MOCK_DATA.map((item) => (
            <CartItem key={item.id} info={item} />
          ))}
        </table>

        {/* <div className="shipping">
                    <table className="shipping-table">
                        <tr>
                            <td>
                                <input  type="radio" id="regular" name="shipping" value="regular"/>
                                <label for="regular">Regular shipping</label>
                            </td>
                            <td>30 &#3647;</td> 
                        </tr>
                        <tr>
                            <td> 
                                <input type="radio" id="express" name="shipping" value="ems"/>
                                <label for="express">EMS shipping</label>
                                </td>
                            <td>50 &#3647;</td>
                        </tr>
                    </table>
                </div> */}

        <SummaryCart />
      </div>
    </Decoration>
  );
}

export default Cartdetailcomponent;
