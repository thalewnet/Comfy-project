import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Cartcard from '../image/product.jpg';
import Cartcard2 from '../image/product2.jpg';
import Cartcard3 from '../image/product3.jpg';

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
  td a.btn-remove {
    color: #ff523b;
    font-size: 12px;
    text-decoration: none;
  }
  td a.btn-edit {
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
          <tr>
            <td>
              <div className="cart-info">
                <img className="img-info" src={Cartcard} alt="" />
                <div className="info-details">
                  <p className="info-name">Doi Mon Chong</p>
                  <p className="info-choice">Honey process Light roast Whole bean 500 grams</p>
                  <p className="info-price">Price : 500 &#3647;</p>
                  <div className="btn-rmv-edt">
                    <p className="btn-remove">Remove</p>
                    <Link to={'/localproducts/productname'} className="btn-edit">
                      Edit
                    </Link>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <input type="number" value="1" />
            </td>
            <td>500 &#3647;</td>
          </tr>
          {/* Product2 */}
          <tr>
            <td>
              <div className="cart-info">
                <img className="img-info" src={Cartcard3} alt="" />
                <div className="info-details">
                  <p className="info-name">Mae Chan Tai</p>
                  <p className="info-choice">Washed / Wat process Light roast Medium ground 500 grams</p>
                  <p className="info-price">Price : 350 &#3647;</p>
                  <div className="btn-rmv-edt">
                    <p className="btn-remove">Remove</p>
                    <Link to={'/localproducts/productname'} className="btn-edit">
                      Edit
                    </Link>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <input type="number" value="1" />
            </td>
            <td>350 &#3647;</td>
          </tr>
          {/* Prodcut 3 */}
          <tr>
            <td>
              <div className="cart-info">
                <img className="img-info" src={Cartcard2} alt="" />
                <div className="info-details">
                  <p className="info-name">Doi Chang</p>
                  <p className="info-choice">Washed / Wat process Light roast Fined ground 250 grams</p>
                  <p className="info-price">Price : 240 &#3647;</p>
                  <div className="btn-rmv-edt">
                    <p className="btn-remove">Remove</p>
                    <Link to={'/localproducts/productname'} className="btn-edit">
                      Edit
                    </Link>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <input type="number" value="1" />
            </td>
            <td>240 &#3647;</td>
          </tr>
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

        <div className="total-price">
          <table className="total-table">
            <tr>
              <td>Subtotal</td>
              <td>1,090 &#3647;</td>
            </tr>
            <tr>
              <td>Discount</td>
              <td>0 &#3647;</td>
            </tr>
            <tr>
              <td>Shipping fee</td>
              <td>0 &#3647;</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>1,090 &#3647;</td>
            </tr>
          </table>
        </div>
      </div>
    </Decoration>
  );
}

export default Cartdetailcomponent;
