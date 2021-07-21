import React from 'react'
import styled from 'styled-components'
import Navbar from '../component/Navbar.js'
import Footer from '../component/Footer.js'
import Path from '../component/Path'
import truck from '../image/truck.png'

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

    select {
        width: 100%;
        height: 25px;
        display: flex;
        font-size: 13px;
        border-radius: 5px;
        box-sizing: border-box;
        background: rgba(190, 188, 188, 0.33);
        border: 1.5px solid #B29385;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        margin-top: 3px;
        margin-bottom: 18px;;
    }
    
    label {
        font-size: 12px;
        font-weight: 600;
    }
         
    textarea {
        width: 100%;
        height: 60px;
        resize: none;
        display: flex;
        font-size: 13px;
        border-radius: 5px;
        box-sizing: border-box;
        background: rgba(190, 188, 188, 0.33);
        border: 1.5px solid #B29385;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        margin-top: 3px;
        margin-bottom: 18px;;
    }

    
`

function Delivery() {
    return (
        <Decoration>
        <Navbar/>
        <Path/>
        <div>
            <div className="bar">
             <div className="inside">
                <img className="all" src={truck} alt="truck"></img>
                <p className="text-bar">Shipping Address</p>
                </div>
             </div>  
             <p className="topics">Address</p>
            <div className="container">
            <form className='box'>
                <div className="form">
                    <label for="name">Name :</label>
                    <input type="text" id="name" placeholder="Name - Lastname"/></div>
                <div className="form">
                    <label for="phone">Phone number :</label>
                    <input type="text" id="phone" placeholder="Phone number"/></div>
                <div className="form">
                    <label for="address">Address :</label>
                    <input type="text" id="address" placeholder="Address"/></div>
                <div className="form">
                    <label for="province">Province :</label>
                    <select name="province" id='province'>
                            <option value="">Please Select</option>
                            <option value="Bangkok">Bangkok</option>
                    </select>
                    </div>
                <div className="form"> 
                    <label for="district">District :</label>
                    <select name="district" id='district'>
                            <option value="">Please Select</option>
                            <option value="Bangsue">Bang Sue</option>
                    </select>
                    </div>
                <div className="form"> 
                    <label for="sub-district">Sub-district :</label>
                    <select name="sub-district" id='sub-district'>
                            <option value="">Please Select</option>
                            <option value="Bangsue">Bang Sue</option>
                    </select></div>
                <div className="form"> 
                    <label for="postnum">Post number:</label>
                    <select name="postnum" id='postnum'>
                            <option value="">Please Select</option>
                            <option value="10800">10800</option>
                    </select></div>
                    <div className="form">
                    <label for="details">Detail information:</label>
                    <textarea id="details" name="details" placeholder="More information"></textarea>
                    </div>
                <div className="form"><a href="/cart/delivery-payment"><button type='button' className="btn">Confirm Shipping Address</button></a></div>
                </form>
            </div>
        </div>
        <Footer/>
        </Decoration>
    )
}

export default Delivery
