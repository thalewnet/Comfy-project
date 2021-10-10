import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from '../config/axios';
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
    background: #396ce3;
    border-radius: 5px;
    height: 30px;
    margin-top: 15px;
    color: whitesmoke;
    cursor: pointer;
  }

  .slip img {
    width: 200px;
    height: 328px;
  }
  .text-status-false {
    color: red;
  }

  .text-status-true {
    color: lime;
  }

  .text-orderitems {
    font-size: 14px;
  }
`;
function Adminorderedit({ order, id }) {
  const [orderInfo, setOrderInfo] = useState({
    ispaid: order.ispaid,
    isverified: order.isverified,
    issent: order.issent,
    trackingNumber: order.trackingNumber,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/orders/adminorder/${id}`);
        console.log('fetch', res.data.order);
        setOrderInfo((cur) => ({
          ...cur,
          ispaid: res.data.order?.ispaid,
          isverified: res.data.order.isverified,
          issent: res.data.order.issent,
          trackingNumber: res.data.order.trackingNumber,
        }));
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  const arrOrderItems = order.OrderItems?.map(
    (item) =>
      `${item.Sku?.Product?.name} ${item.Sku?.process} ${item.roast} roast ${item.grind} grind ${item.weight} grams ${item.amount} ea`
  );
  const handleChangeInfo = (e) => {
    if (
      e.target.name === 'ispaid' ||
      e.target.name === 'issent' ||
      e.target.name === 'isverified'
    ) {
      setOrderInfo((cur) => ({ ...cur, [e.target.name]: e.target.checked }));
    } else {
      setOrderInfo((cur) => ({ ...cur, [e.target.name]: e.target.value }));
    }
  };

  const handleClickUpdatedOrder = async (e) => {
    try {
      e.preventDefault();
      console.log(orderInfo);
      await axios.put(`/orders/${id}`, orderInfo);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Decoration>
      <div className="order-container">
        <div className="order-name">Order: CF-{id}</div>
        <div className="order-info-container">
          <div className="slip">
            <img src={order.paymentSlip} alt="slip" />
          </div>
          <div className="order-info">
            <div className="order-details">
              {arrOrderItems?.map((item, idx) => (
                <p className="text-orderitems" key={idx}>{`${
                  idx + 1
                }. ${item}`}</p>
              ))}

              <p className="text-orderitems">
                Total: {order.totalPrice} &#3647;
              </p>
            </div>
            <div className="customer-address">
              <p className="text-orderitems">{`${order.User?.firstName} ${order.User?.lastName}`}</p>
              <p className="text-orderitems">{`${order.Shipment?.address} ${order.Shipment?.subdistrict} ${order.Shipment?.district} ${order.Shipment?.zipcode}`}</p>
              <p className="text-orderitems">
                Telphone: {order.Shipment?.phoneNumber}
              </p>
            </div>
          </div>
        </div>
        <div className="tracking">
          <label for="track">Tracking number:</label>
          <input
            type="text"
            name="trackingNumber"
            onChange={handleChangeInfo}
            disabled={orderInfo.issent ? true : false}
          />
        </div>
        <div className="order-check-status">
          <p>Order status:</p>
          <form>
            <div className="status-check">
              <input
                type="checkbox"
                id="slip"
                name="ispaid"
                onChange={handleChangeInfo}
                checked={orderInfo.ispaid ? true : false}
              />
              <label
                className={`text-status-${orderInfo.ispaid ? 'true' : 'false'}`}
                htmlFor="slip"
              >
                Check Slip payment
              </label>
              <input
                type="checkbox"
                id="verified"
                name="isverified"
                onChange={handleChangeInfo}
                checked={orderInfo.isverified ? true : false}
              />
              <label
                className={`text-status-${
                  orderInfo.isverified ? 'true' : 'false'
                }`}
                htmlFor="verified"
              >
                Verify order
              </label>
              <input
                type="checkbox"
                id="shipping"
                name="issent"
                onChange={handleChangeInfo}
                checked={orderInfo.issent ? true : false}
              />
              <label
                className={`text-status-${orderInfo.issent ? 'true' : 'false'}`}
                htmlFor="ship"
              >
                Shipping
              </label>
              <input
                type="checkbox"
                id="done"
                name="done"
                checked={
                  orderInfo.issent &&
                  orderInfo.ispaid &&
                  orderInfo.isverified &&
                  orderInfo.trackingNumber !== '' &&
                  orderInfo.trackingNumber !== null
                }
              />
              <label
                className={`text-status-${
                  orderInfo.issent &&
                  orderInfo.ispaid &&
                  orderInfo.isverified &&
                  orderInfo.trackingNumber !== '' &&
                  orderInfo.trackingNumber !== null
                    ? 'true'
                    : 'false'
                }`}
                htmlFor="done"
              >
                Done
              </label>
            </div>
            <button className="update-btn" onClick={handleClickUpdatedOrder}>
              Updated
            </button>
          </form>
        </div>
      </div>
    </Decoration>
  );
}

export default Adminorderedit;
