import React from 'react'
import styled from 'styled-components'
import card from '../image/card1.jpg'

const Decoration = styled.div`

.card-container {
    width: 220px;
    overflow: hidden;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    transition: all 0.3s ease;
    position: relative;
  }

  .card-container:hover{
    transform: scale(1.02);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25) ;
  }
  
  .image-container img {
    overflow: hidden;
    height: 280px;
    width: 100%;
  }

    .card-title{
      position: absolute;
      width: 100%;
      height: 40px;
      bottom: 0;
      background: #FFFFFF;
      align-items: center;
      
  }
  
    .card-text {
        margin:0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        line-height: 40px;
        padding-left: 10px;
        font-size: 14px;
        font-weight: 400;
        color: black;
        text-decoration: none;
    }
 

`
function Card({name}) {
    return (
        <Decoration>
        <div>
        <div className="card-container">
              <div className="image-container">
                <a href="./localproducts"><img className="card" src={card} alt=""/></a>
              </div>
                <div className="card-title">
                  <a className="card-text "href="./localproducts">{name}</a>
              </div>
            </div>
        </div>
        </Decoration>
    )
}

export default Card
