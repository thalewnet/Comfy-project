import React from 'react'
import styled from 'styled-components'
import card3 from '../image/card3.jpg'

const Decoration = styled.div`
  a{
    position: relative;
    text-decoration: none;
    
  }

  .card {
    width: 550px;
    height: 450px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  } 

    .nameBox{
      position: absolute;
      width: 100%;
      height: 50px;
      bottom: 0;
      background: rgba(196, 196, 196, 0.49);
      display: flex;
      align-items: center;
  }
    .product {
        position: absolute;
        left: 25px;
        font-size: 28px;
        font-weight: 400;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        color: #FFFFFF;
    }

`
function Card3() {
    return (
        <Decoration>
        <div>
          <a href="./importproducts"><img className="card" src={card3} alt="productCard"/>
            <div className="nameBox">
              <span className="product">Imported Coffee Bean</span>
            </div>
            </a>
        </div>
        </Decoration>
    )
}

export default Card3
