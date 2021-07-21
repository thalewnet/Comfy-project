import React from 'react'
import styled from 'styled-components'
import card from '../image/card5.jpg'

const Decoration = styled.div`
  a{
    text-decoration: none;
  }
  .card {
    width: 350px;
    height: 410px;
    text-decoration: none;
    
  }

  .nameBox{
      margin-top: -3px;
      height: 40px;
      font-size: 10px;
      background: white;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      margin: 0 auto;
      display: flex;
      align-items: center;
      margin-bottom: 30px;

      .product {
        margin: 0 auto;
        color: black;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
    
      }
  } 



`
function Card4({name}) {
    return (
        <Decoration>
        <div>
            <a href="./localproducts/productname"><img className="card" src={card} alt="productCard"/>
            <div className="nameBox">
              <span className="product">{name}</span>
            </div>
            </a>
        </div>
        </Decoration>
    )
}

export default Card4
