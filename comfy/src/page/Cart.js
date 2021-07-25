import React from 'react'
import styled from 'styled-components'
import Navbar from '../component/Navbar.js'
import Footer from '../component/Footer.js'
import Path from '../component/Path'
import cart from '../image/cart.png'
import Cardcart from '../component/Cardcart.js'
import Footercomponent from '../component/Footercomponent.js'
import Navbarcomponent from '../component/Navbarcomponent.js'

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

    .topics{
        width: 80%;
        margin: 0 auto;
        padding-left: 50px;
        margin-top: 10px;
        font-weight: 500;
        font-size: 20px;
        margin-bottom: 10px;
        
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

     .summary {
         margin: 0 auto;
         width: 80%;
         display: flex;
         flex-direction: column;
         justify-content: flex-end;
         align-items: flex-end;
         margin-top: 10px;

         .line{
             display: flex;
             justify-content: space-between;
             width: 30%;
             
           
         }
            * {
             margin:0;
             font-size: 16px;
             font-weight: 500;
             margin-bottom: 5px;

             .total, .totalform {
                 font-size: 20px;
                 font-weight: 700;
             }
         }


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
         <p className="topics">Check out</p>
         <Cardcart/>
         <Cardcart/>
         <div className="container-ship">
             <div className="shipping">
                <p className="typeship">Select shipping type :</p>
             </div>
            <form>
            <div className="controlinput">
                <input type="radio" id="regular" name="shippingtype" value="regular"/>
                <label for="regular">Send a package regularly </label><br/>
            </div>
            <div className="controlinput">
                <input type="radio" id="ems" name="shippingtype" value="EMS"/>
                <label for="ems">Send a package express</label><br/>
                </div>
             </form>
         </div>
         <div className="summary">
             <div className="line">
                <p className="priceform">Sub-total</p>
                <p className="subtotal">860 Baht</p>
            </div>
            <div className="line">
                <p className="priceform">Discount</p>
                <p className="discount">0 Baht</p>
            </div>
            <div className="line">
                <p className="priceform">Shipping fee</p>
                <p className="shippingfee">0 Baht</p>
            </div>
            <div className="line">
                <p className="totalform">Total</p>
                <p className="total">860 Baht</p>
            </div>
         </div>
        <div className="form"><a href="/cart-delivery"><button type='button' className="btn">Confirm Order</button></a></div>
        </div>
        
        <Footercomponent/>
        </Decoration>
    )
}

export default Cart
