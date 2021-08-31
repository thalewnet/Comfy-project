import React from 'react';
import styled from 'styled-components';
import slip from '../image/slip.jpg';
const Decoration = styled.div`
  * {
    margin: 0;
  }

  .order-container {
    width: 100%;
    background: whitesmoke;
    padding: 20px;
    border: 2px solid #ccc;
    margin-bottom: 20px;
  }

  .order-name {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  .order-info-container {
    display: flex;
  }

  .order-info {
    width: 100%;
    margin: 20px;
  }
  .order-details {
    width: 90%;
    height: 100px;
    margin-bottom: 20px;
    padding: 10px;
    background: rgba(178, 147, 133, 0.2);
    border: 1px solid black;
    border-radius: 5px;
  }
  .customer-address {
    width: 90%;
    height: 100px;
    padding: 10px;
    background: rgba(178, 147, 133, 0.2);
    border: 1px solid black;
    border-radius: 5px;
  }
  .tracking {
    margin: 10px 0;
  }
  .tracking label {
    font-size: 18px;
    font-weight: 500;
    margin-right: 10px;
  }

  .order-check-status p {
    font-size: 18px;
    font-weight: 500;
  }
  .status-check {
    margin-top: 10px;
    margin-left: 20px;
  }
  .order-check-status .status-check label {
    padding: 0px 20px 0px 10px;
  }
  .update-btn {
    width: 90%;
    background: #5c9db1;
    border-radius: 5px;
    height: 30px;
    margin-top: 15px;
    color: whitesmoke;
  }

  .slip img {
    width: 200px;
    height: 328px;
  }
`;
function Adminorderedit() {
  return (
    <Decoration>
      <div className="order-container">
        <div className="order-name">Order: CFF-001</div>
        <div className="order-info-container">
          <div className="slip">
            <img src={slip} alt="" />
          </div>
          <div className="order-info">
            <div className="order-details">
              <p>1.Doimonchong Honey process Light roast Whole bean 500 grams</p>
              <p>2.MaeChanTai Washed / Wat process Light roast Medium ground 500 grams</p>
              <p>3.Doichang Washed / Wat process Light roast Fined ground 250 grams</p>
              <p>Total: 1090 &#3647;</p>
            </div>
            <div className="customer-address">
              <p>Thapanaphong Lewgaseamsant</p>
              <p>134/99 Pracharat 1 Soi14 BangSue BangSue 10800</p>
              <p>Telphone: 094181827</p>
            </div>
          </div>
        </div>
        <div className="tracking">
          <label for="track">Tracking number:</label>
          <input type="text" name="track" />
        </div>
        <div className="order-check-status">
          <p>Order status:</p>
          <form>
            <div className="status-check">
              <input type="checkbox" id="slip" name="slip" value="slipchecked" />
              <label for="slip">Checking Slip payment</label>
              <input type="checkbox" id="shipping" name="ship" value="shippingchecked" />
              <label for="ship"> Waitting for Shipping</label>
              <input type="checkbox" id="done" name="done" value="donechecked" />
              <label for="done"> Done</label>
            </div>
            <button className="update-btn">Updated</button>
          </form>
        </div>
      </div>
    </Decoration>
  );
}

export default Adminorderedit;
