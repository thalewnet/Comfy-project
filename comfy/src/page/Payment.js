import React from 'react'
import styled from 'styled-components'
import Navbar from '../component/Navbar.js'
import Footer from '../component/Footer.js'
import Path from '../component/Path'
import credit from '../image/credit.png'

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
        padding-left: 120px;
        margin-top: 10px;
        font-weight: 500;
        font-size: 20px;
    }

    .container {
        margin: 0 auto;
        margin-top: 5px;
        width: 80%;
        min-height: 550px;
        display: flex;
        justify-content: center;
        /* background-color: #F8F8F8; */
        padding: 10px 0;
    }
    .box{
            width: 90%;
        }
        
    input {
            width: 100%;
            line-height: 1.8;
            border-radius: 5px;
            box-sizing: border-box;
            background: rgba(190, 188, 188, 0.33);
            border: 1.5px solid #B29385;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            margin-top: 3px;
            margin-bottom: 18px;;
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
             margin-top: 40px;
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
     

`

function Payment() {
    return (
        <Decoration>
        <Navbar/>
        <Path/>
        <div>
            <div className="bar">
             <div className="inside">
                <img className="all" src={credit} alt="credit"></img>
                <p className="text-bar">Payment</p>
                </div>
             </div>  
             <p className="topics">Payment</p>
             <div className="container">
            <form className='box'>
                <div className="form">
                    <label for="name">Account name :</label>
                    <input type="text" id="name" value="Comfy Coffee Co., Ltd." readonly/></div>
                <div className="form">
                    <label for="accnum">Banking account number:</label>
                    <input type="text" id="accnum" value="123-234563" readonly/></div>
                <div className="form">
                    <label for="bank">Bank :</label>
                    <input type="text" id="bank" value="KBank" readonly/></div>
                <div className="form">
                    <label for="price">Price :</label>
                    <input type="text" id="price" value="580 Baht" readonly/></div>
                <div className="form">
                    <label for="upload">Upload payment slip :</label>
                    <input type="file" id="upload" multiple/></div>
             <div className="form"><a href="/cart-delivery-payment-confirm"><button type='button' className="btn">Confirm payment</button></a></div>
            </form>
            </div>
        </div>
        <Footer/>
        </Decoration>
    )
}

export default Payment
