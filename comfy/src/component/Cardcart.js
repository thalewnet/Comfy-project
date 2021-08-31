import React from 'react';
import styled from 'styled-components';
import cardcart from '../image/product.jpg';
import close from '../image/close.png';
import edit from '../image/edit.png';

const Decoration = styled.div`
  .container {
    border-top: 1px solid black;
    border-bottom: 0.5px solid black;
    padding: 10px 0;
    display: flex;
    width: 80%;
    margin: 0 auto;
  }

  .figure {
    width: 240px;
    margin: 0 15px;
  }

  .edit {
    width: 21px;
    height: 20px;
    padding-right: 10px;
  }
  .close {
    width: 18px;
    height: 19px;
  }

  .btnunit {
    display: flex;
    /* justify-content: space-between; */
    align-items: center;

    button {
      width: 28px;
      height: 25px;
      font-size: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      border: none;
      background-color: #c4c4c4;
    }

    .btnadd {
      background-color: #eecb14;
    }

    .unit {
      /* display: flex;
           justify-content: center;
           align-items: center;
           text-align:justify; */
      margin: 0px 20px 0px 20px;
      font-size: 18px;
    }

    .head {
      margin: 0;
      font-size: 18px;
      font-weight: 500;
      padding-right: 5px;
    }
  }

  .col-70 {
    flex: 30%;
    position: relative;
  }
  .firstline {
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .productname {
      margin: 0;
      font-weight: bold;
      font-size: 24px;
      line-height: 37px;
    }
  }

  .secondline {
    .detail {
      margin: 0;
      margin-top: 10px;
      font-size: 14px;
    }
  }

  .thirdline {
    .weight {
      font-size: 14px;
    }
  }
  .fourthline {
    position: absolute;
    margin: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    width: 100%;

    .price {
      margin: 0;
      font-size: 20px;
      font-weight: 500;
      /* padding-left: 250px; */
    }
  }
`;
function Cardcart() {
  return (
    <Decoration>
      <div className="container">
        <div className="col-30">
          <img className="figure" src={cardcart} alt="cardcart" />
        </div>
        <div className="col-70">
          <div className="firstline">
            <p className="productname">Doi Mon Chong Coffee Bean</p>
            <div className="icon">
              <a href="/localproducts/productname">
                <img className="edit" src={edit} alt="edit" />
              </a>
              <img className="close" src={close} alt="close" />
            </div>
          </div>
          <div className="secondline">
            <p className="detail">Product detail: Natural process Medium roast Whole Bean</p>
          </div>
          <div className="thirdline">
            <p className="weight">Weight : 500 grams</p>
          </div>
          <div className="fourthline">
            <div className="btnunit">
              <p className="head">Net amount :</p>
              <button className="btnadd">+</button>
              <p className="unit">1</p>
              <button className="btnsub">-</button>
            </div>
            <div className="orderprice">
              <p className="price">Price: 500 Baht</p>
            </div>
          </div>
        </div>
      </div>
    </Decoration>
  );
}

export default Cardcart;
