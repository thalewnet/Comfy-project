import React from 'react'
import styled from 'styled-components'

const Decoration = styled.div `
    .container2 {
        background: rgba(232, 231, 231, 0.85);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border: 2px solid #CB925D;
        box-sizing: border-box;
        border-radius: 10px;
        width: 90%;
        margin-bottom: 15px;
        
    }

    .orderhead {
        margin:0;
        margin: 10px 0 10px 20px; 
        font-weight: bold;
        font-size: 18px;
    }

    .orderdetail {
        margin: 10px 0 20px 30px;

        .head {
            margin:0;
            font-size: 16;
            margin-bottom: 5px;
        }

        .detail {
            margin:0;
            margin-top: 10px;
            font-size: 14px;

            li{
                margin-bottom: 5px;
            }
        }
    }

    .tracking {
        margin: 20px 0 0 20px;

        .head {
            margin:0;
            font-size: 16;
            margin-bottom: 5px;
        }

        .detail {
            margin:0;
            margin-top: 10px;
            font-size: 14px;
            padding-left: 25px;
        }
    }
`
    
function Ordernumber({order}) {
    return (
        <Decoration>
        <div>
            <div className="container2">
              <p className="orderhead">Order : {order}</p>
               <div className="orderdetail">
                   <p className="head">Order details</p>
                   <ul className="detail">
                       <li>Doi Mon Chong Bean Natural/Dry proceess Medium roast 1 kilogram </li>
                       <li>Mae Chan Tai Bean Honey proceess Light roast Whole bean 500 grams</li>  
                   </ul>
               </div>
               <div className="orderdetail">
                    <p className="head">Tracking number</p>
                    <ul className="detail">
                        <li>EV468641024TH</li>
                     </ul>
               </div>

               <div className="orderdetail">
               <p className="head">Order status</p>
               <ul className="detail">
                  <li> Waitting for payment confirm </li> {/* Waiting for shipment / Shipped/ Delivered */}
                </ul>
               </div>
            </div>
        </div>
        </Decoration>
    )
}

export default Ordernumber
