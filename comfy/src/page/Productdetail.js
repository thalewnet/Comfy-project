import React from 'react';
import styled from 'styled-components';
import image from '../image/product.jpg';
import Path from '../component/Path';
import { Link } from 'react-router-dom';
const Decoration = styled.div`
  padding-top: 64px;

  .container {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: 80%;
  }

  .product-amount {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    max-width: 500px;
    border-bottom: 1px solid black;

    button {
      width: 45px;
      height: 40px;
      font-size: 24px;
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

    p {
      margin: 20px 20px 15px 20px;
      font-size: 24px;
    }
  }
  .product-detail {
    max-width: 500px;
    font-size: 14px;
  }

  .product-choice {
    margin: 0 auto;
    max-width: 500px;
    background-color: #f8f8f8;
    margin-left: 40px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 20px;
    width: 90%;
  }

  h1 {
    position: relative;
    top: 10px;
    margin: 0 0 0 15px;
    /* text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
  }

  form {
    margin: 30px 0 20px 20px;
  }

  .topic {
    display: flex;
    margin-bottom: 10px;

    span {
      margin: 0;
      font-size: 16px;
      font-weight: 500;
    }
    .specific {
      color: red;
      font-size: 12px;
    }
  }

  .specific {
    color: lime;
    font-weight: 300;
    font-size: 8px;
    padding-left: 5px;
  }

  .controlinput {
    margin: 10px 7px;
  }

  label {
    padding-left: 10px;
  }
  .totalprice {
    display: flex;
    justify-content: flex-start;

    .price {
      font-size: 24px;
      font-weight: 700;
      padding: 20px 15px 20px 15px;
    }
  }

  .btn-group {
    display: flex;
    justify-content: center;
    margin-top: 10px;

    .btn {
      text-decoration: none;
      margin-right: 20px;
      color: whitesmoke;
      background: #204d48;
      border: 2px solid #204d48;
      padding: 8px 16px;
      border-radius: 8px;
    }

    .btnaddtocart {
      background-color: #204d48;
      color: whitesmoke;
      border-radius: 8px;
      font-family: Roboto;
      font-style: normal;
      padding: 0 16px;
      font-size: 16px;
    }
  }

  .btnaddtocart:hover {
    background-color: #245855;
  }
  .btn:hover {
    background-color: #245855;
  }

  @media (max-width: 1110px) {
    .container {
      flex-direction: column;
      justify-content: center;
      margin: 0 auto;
      width: 80%;
    }

    .col-right {
      max-width: 500px;
    }

    .product-choice {
      margin: 0;
      padding: 0;
      background: none;
      box-shadow: none;
    }

    h1 {
      margin: 0;
    }
    .btn-group {
      justify-content: flex-start;
    }

    .product-detail {
      padding-bottom: 10px;
      border-bottom: 1px solid black;
    }

    form {
      margin-left: 0px;
    }
  }
`;
function Productdetail() {
  return (
    <Decoration>
      <Path />
      <div className="container">
        <div className="col-left">
          <div className="product-figure">
            <img src={image} alt="producrfigue" />
          </div>
          <div className="product-amount">
            <button className="btnsub">-</button>
            <p>1</p>
            <button className="btnadd">+</button>
          </div>
          <div className="product-info">
            <h3>Product details</h3>
            <div className="product-detail">
              เมล็ดกาแฟดอยม่อนจอง มาจากจังหวัดเชียงใหม่ โดยกาแฟดอยม่อนจองจะมีรสชาติดี หอมละมุน คล้ายกลิ่นดอกไม้ป่า
              และเมื่อผ่านกระบวนการ Process กาแฟ แต่ละ Process ยิ่งทำให้กาแฟมีเอกลักษณ์ของรสชาติที่แตกต่างกัน
              <br />
              Altitude: 1,200 m
              <br />
              Taste note: Chocolate, Nutty Sweet and Low acidity
              <br />
              Light roast: Berry , Orange , Flower , BrownSugar
              <br />
              Medium roast: Chocolate , Caramel , Nutty
              <br />
              Dark roast: Chocolate , Caramel , Nutty
              <br />
              Brewing Methods: Fillter, Espresso, Moka Pot,
            </div>
          </div>
        </div>
        <div className="col-right">
          <div className="product-choice">
            <div className="product-name">
              <h1>Doi Mon Chong</h1>
            </div>
            <div className="processing">
              <form>
                <div className="topic">
                  <span>Coffee processing</span>
                  <span className="specific">*</span>
                </div>
                <div className="controlinput">
                  <input type="radio" id="wetprocess" name="coffeeprocessing" value="wetprocess" />
                  <label htmlFor="wetprocess">Washed / Wet process</label>
                  <br />
                </div>
                <div className="controlinput">
                  <input type="radio" id="dryprocess" name="coffeeprocessing" value="naturalprocess" />
                  <label htmlFor="dryprocess">Natural/ Dry process</label>
                  <br />
                </div>

                <div className="controlinput">
                  <input type="radio" id="honeyprocess" name="coffeeprocessing" value="honeyprocess" />
                  <label htmlFor="honeyprocess">Honey process</label>
                </div>
              </form>
            </div>
            <div className="roasting">
              <form>
                <div className="topic">
                  <span>Roasting Level</span>
                  <span className="specific">*</span>
                </div>
                <div className="controlinput">
                  <input type="radio" id="light" name="roastinglevel" value="lightroast" />
                  <label htmlFor="light">Light roast</label>
                  <br />
                </div>
                <div className="controlinput">
                  <input type="radio" id="medium" name="roastinglevel" value="mediumroast" />
                  <label htmlFor="medium">Medium roast</label>
                  <br />
                </div>
                <div className="controlinput">
                  <input type="radio" id="dark" name="roastinglevel" value="darkroast" />
                  <label htmlFor="dark">Dark roast</label>
                </div>
              </form>
            </div>
            <div className="grinding">
              <form>
                <div className="topic">
                  <span>Grind Level</span>
                  <span className="specific">*</span>
                </div>
                <div className="controlinput">
                  <input type="radio" id="whole" name="grindlevel" value="wholebean" />
                  <label htmlFor="whole">Whole bean</label>
                  <br />
                </div>
                <div className="controlinput">
                  <input type="radio" id="fined" name="grindlevel" value="finedground" />
                  <label htmlFor="fined">Fined ground</label>
                  <br />
                </div>
                <div className="controlinput">
                  <input type="radio" id="dark" name="grindlevel" value="mediumground" />
                  <label htmlFor="dark">Medium ground</label>
                </div>
                <div className="controlinput">
                  <input type="radio" id="dark" name="grindlevel" value="coarseground" />
                  <label htmlFor="dark">Coarse ground</label>
                </div>
              </form>
            </div>
            <div className="weighing">
              <form>
                <div className="topic">
                  <span>Weight</span>
                  <span className="specific">*</span>
                </div>
                <div className="controlinput">
                  <input type="radio" id="100" name="weight" value="100gram" />
                  <label htmlFor="100">100 grams</label>
                  <br />
                </div>
                <div className="controlinput">
                  <input type="radio" id="250" name="weight" value="250gram" />
                  <label htmlFor="250">250 grams</label>
                  <br />
                </div>
                <div className="controlinput">
                  <input type="radio" id="500" name="weight" value="500gram" />
                  <label htmlFor="500">500 grams</label>
                </div>
                <div className="controlinput">
                  <input type="radio" id="1000" name="weight" value="1kilogram" />
                  <label htmlFor="1000">1 kilogram</label>
                </div>
              </form>
            </div>
            <div className="totalprice">
              <div className="price">Price</div>
              <div className="price">500</div>
              <div className="price">Baht</div>
            </div>
            <div className="btn-group">
              <Link to={'/localproducts'} className="btn">
                Continue Shopping
              </Link>
              <button className="btnaddtocart">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </Decoration>
  );
}

export default Productdetail;
