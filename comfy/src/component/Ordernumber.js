import React from 'react';
import styled from 'styled-components';

const Decoration = styled.div`
  .container2 {
    background: rgba(232, 231, 231, 0.85);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: 2px solid #cb925d;
    box-sizing: border-box;
    border-radius: 10px;
    width: 90%;
    margin-bottom: 15px;
  }

  .orderhead {
    margin: 0;
    margin: 10px 0 10px 20px;
    font-weight: bold;
    font-size: 18px;
  }

  .orderdetail {
    margin: 10px 0 20px 30px;

    .head {
      margin: 0;
      font-size: 16;
      margin-bottom: 5px;
    }

    .detail {
      margin: 0;
      margin-top: 10px;
      font-size: 14px;

      li {
        margin-bottom: 5px;
      }
    }
  }

  .tracking {
    margin: 20px 0 0 20px;

    .head {
      margin: 0;
      font-size: 16;
      margin-bottom: 5px;
    }

    .detail {
      margin: 0;
      margin-top: 10px;
      font-size: 14px;
      padding-left: 25px;
    }
  }
`;

function Ordernumber({ order, item }) {
  console.log(item);
  const { OrderItems, ispaid, issent, isverified } = item;

  const arrOrderdetail = OrderItems.map(
    (item) =>
      `${item.Sku.Product.name} ${item.Sku.process} ${item.roast} roast ${item.grind} ${item.weight} grams `
  );

  const orderStatus4 = () => {
    if (!ispaid) return 'Waiting for payment confirm';
    if (isverified) return 'Waiting for packing and shipping';
    if (issent) return 'Your order has been delivered';
  };

  const status = orderStatus4();

  return (
    <Decoration>
      <div>
        <div className="container2">
          <p className="orderhead">Order : {order}</p>
          <div className="orderdetail">
            <p className="head">Order details</p>
            <ul className="detail">
              {arrOrderdetail ? (
                arrOrderdetail.map((item, idx) => <li key={idx}>{item}</li>)
              ) : (
                <li>-</li>
              )}

              <li>{`Total: ${item.totalPrice} Baht`} </li>
            </ul>
          </div>
          <div className="orderdetail">
            <p className="head">Tracking number</p>
            <ul className="detail">
              {item.trackingNumber ? (
                <li>{item.trackingNumber}</li>
              ) : (
                <li> - </li>
              )}
            </ul>
          </div>

          <div className="orderdetail">
            <p className="head">Order status</p>
            <ul className="detail">
              <li> {status} </li>
            </ul>
          </div>
        </div>
      </div>
    </Decoration>
  );
}

export default Ordernumber;
