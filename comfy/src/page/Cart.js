import React from 'react'
import styled from 'styled-components'
import Footercomponent from '../component/Footercomponent.js'
import Navbarcomponent from '../component/Navbarcomponent.js'
import Path from '../component/Path'
import cart from '../image/cart.png'
import Cardcart from '../component/Cardcart.js'
import Cartdetailcomponent from '../component/Cartdetailcomponent.js'

const Decoration = styled.div `
    padding-top: 64px;
    .bar {
            width: 80%;
            margin: 0 auto;
            margin-top: 10px;
            position: relative;

            &::before {
          content: "";
          position: absolute;
          bottom: 0px;
          width: 100%;
          border-bottom: 2px solid rgba(0, 0, 0, 0.65);
        }
        }

    .inside {
                display: flex;
                align-items: center;
                padding-left: 20px;
            }

    .all {
            width: 35px;
            height: 35px;
            padding-right: 10px;  
        }

    .text-bar{
        font-weight: 500;
        }

    .text-box {
        width: 80%;
        margin: 0 auto;
    }
    .topics{
        width: 100%;
        margin: 0 auto;
        margin-top: 10px;
        font-weight: 500;
        font-size: 20px;
    }
    .component-container{
        width: 80%;
        margin: 0 auto;
    }


    .container-ship {
        margin: 0 auto;
        width: 80%;
        display: flex;
        padding: 10px 0px;
        position: relative;
        border-bottom: 1px solid black;
        .typeship {
            margin: 0;
            margin-right: 20px;
            margin-left: 65px;
            font-weight: 500;
            font-size: 20px;
        }
    }
     .controlinput {
         margin-bottom: 8px;
     }

     .form {
         margin: 0 auto;
         width: 80%;
     }

     .btn {
             position: relative;
             width: 100%;
             border: none;
             border-radius: 5px;
             font-size: 16px;
             line-height: 36px;
             padding: 0 16px;
             background-color: #384937;
             color: whitesmoke;
             margin-top: 20px;
             box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
             cursor: pointer;
             
             &::before {
            content: "";
            position: absolute;
            left: 0%;
            top: -20px;
            width: 100%;
            border-top: 1px solid rgba(0, 0, 0, 0.65);
        }
             a {
               text-decoration: none; 
             }
        }
    
    .btn:hover{
            background-color: #456044
     }

    `


function Cart() {
    return (
        <Decoration>
        <Navbarcomponent/>
        <Path/>
        <div>
         <div className="bar">
             <div className="inside">
                <img className="all" src={cart} alt="cart"/>
                <p className="text-bar">Shopping cart</p>
                </div>
             </div>
             <div className="text-box">
                <p className="topics">Check out</p>
             </div> 
        <div className="component-container">
         <Cartdetailcomponent/>
         </div>
        <div className="form"><a href="/cart-delivery">
            <button type='button' className="btn">Confirm Order</button></a>
        </div>
        </div>
        <Footercomponent/>
        </Decoration>
    )
}

export default Cart
