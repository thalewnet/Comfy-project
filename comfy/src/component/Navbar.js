import React from 'react'
import styled from 'styled-components'
import Logo from '../image/comfylogo.png'
import phone from '../image/telephone.png'
import login from '../image/login.png'
import cart from '../image/cart.png'
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { Input,Button } from "@chakra-ui/react"


const Decoration = styled.div`
    position: fixed;
    top:0;
    width: 100%;
    z-index: 500;

    * {
        box-sizing: border-box;
    }
    nav {
        padding: 8px 40px 8px 40px;
        height: 64px;
        background-color: #CB925D; 
        display: flex;
        margin: 0;
        justify-content: space-between;
    }
 
    .logo {
        height: 100%;
        margin: 0;
    }

    ul {
        margin:0;
        list-style: none;
        display: flex;
        flex-wrap: nowrap;
    }

    li {
        margin-right: 2.5rem;
        line-height: 1;
    }

    .left {
        display: flex;
        align-items: center;
    }

    .right {
        display: flex;
        align-items: center;
        
        & > div{ 
            display: flex;
            margin-left: 1rem;
            align-items: center;
            height: 100%;
        }
        .right-icon {
            width: 25px;
            height: 25px;
        }
        
        label{
            padding-left: 5px;
            line-height: 1;
            
        }
        
        .cart{
            padding-right: 1rem;
            border-right: 1px solid black ;
        }
    }
    .product {
        text-decoration: none;
        color: black;
        transition: all 0.4s ease;
    }

    .product:hover {
        text-decoration: underline;
    }

    .contact-us {
        display: flex;
        align-items: center;
        text-decoration: none;
    }

    .btncontact, .btnlogin {
        text-decoration: none;
        color: black;
    }

    .btncontact:hover {
        text-decoration: none;
    }

    .btnlogin:hover{
        text-decoration: none;
    }

    /* @media (max-width: 1135px ) {


        ul.nav-product {
            display: block;
            position: fixed;
            top:0;
            left:0;
            width: 100%;
            max-width: 300px;
            padding-top: 45px;
            height: 100%;
            background: #ecf0f3;
            box-shadow: 0 3px 5px #b0b0b5;
            z-index: 12;
        }

        ul.nav-product a.product {
            display: block;
            background: red;
            margin-bottom: 20px;
            font-size: 16px;
            width: 100%;
            text-align: center;
            
        }

    } */
`   


function Navbar() {
  return (
    <Decoration>
    <div>
     <nav>
         <div className="left">
            <a className="logo" href="/homepage"><img className='logo' src={Logo} alt=""/></a>
           
        </div>

        <div className="right">

        <ul className="nav-product">
                <li><a className="product" href="/allproducts">All Products</a></li>
                <li><a className="product" href="/localproducts">Local Coffee Bean</a></li>
                <li><a className="product" href="/importproducts">Imported Coffee Bean</a></li>
            </ul>
             <div className="contact-us">
                <a href="/contact"><img className="right-icon" src={phone} alt=""/></a>
                <label><a className="btncontact" href="/contact">Contact us</a></label>
            </div>
        
            <div className="cart">
               <a href="/cart"><img className="right-icon" src={cart} alt=""/></a> 
             </div>
            <div className="login">
                 <a href="/login"><img className="right-icon" src={login} alt=""/></a>
                 <label><a className="btnlogin" href="/login">Log - in</a></label>
             </div>
        </div>
     </nav>
    </div>
    </Decoration>
  )
}

export default Navbar