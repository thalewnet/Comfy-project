import React from 'react'
import styled from 'styled-components'
import Logo from '../image/comfylogo.png'
import phone from '../image/telephone.png'
import { faTimes, faBars, faPhoneAlt, faShoppingCart, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Decoration = styled.div`
nav {
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 64px;
    background: #CB925D;
    box-shadow: -3px -3px 7px #ffffff, 3px 3px 5px #ceced1;
    z-index: 999;
}
.nav-container {
    height: 100%;
    width: 95%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
   
}
nav .logo-detail a {
    display: flex;
    align-items: center;
    height: 100%;
}

nav .logo-detail img.logo {
    height: 80%;
    transition: all 0.3s ease;
}

nav .nav-links {
    display: flex;
    justify-content: center;
    align-items: center;
}

nav .nav-links .links {
    
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    line-height: 64px;
    margin:0;
}

nav .nav-links .links li{
    list-style: none;
    display: flex;
    align-items: center;
    padding: 0 12px;
    font-size: 16px;
    transition: all 0.4s ease;
}

nav .nav-links .links li a {
    color: black;
    text-decoration: none;
    white-space: nowrap;
    font-weight: 400;
    display: flex;
    align-items: center;
    
}

nav .nav-links .links li a.product:hover{
        text-decoration: underline;
    }
nav .nav-links .links li a .icon-phone {
    font-size: 18px;
}
nav .nav-links .links li a .icon-cart {
    font-size: 23px;
}

nav .nav-links .links li a .icon-login {
    font-size: 23px;
}
nav .nav-links .links li a span {
    padding-left: 3px;
}
.btn-close,.mycart {
    display: none;
}

.btn-check,#check {
    display: none;
}
.btn-check {
    cursor: pointer;
}

@media (max-width: 1070px ) {


    nav .logo-detail img.logo {
    height: 75%;
    }

    nav .nav-links .links li{
        font-size: 14px; 
    }
  
    nav .nav-links .links li a .icon-phone {
    font-size: 15px;
    }
    nav .nav-links .links li a .icon-cart {
    font-size: 20px;
    }

    nav .nav-links .links li a .icon-login {
    font-size: 20px;
    }

    .btn-close  {
    display: none;
}
.btn-check,#check {
    display: none;
}
}

@media (max-width: 975px ) {
   
    nav .nav-links .links {
    display: block;
    position: fixed;
    background: lime;
    top:0;
    right:-100%;
    max-width: 200px;
    width: 100%;
    padding: 10px 15px 20px 20px;
    line-height: 50px;
    transition: all 0.6s ease;    
    }

    .btn-close{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: 25px;
      
    }

    .btn-check {
        display: block;
        font-size: 25px;
    }

    #check:checked ~ .links {
        right:0;
    }
    .mycart{
       display: block;
    }

    nav .nav-links .links li a .icon-phone ,
    nav .nav-links .links li a .icon-cart ,
    nav .nav-links .links li a .icon-login {
    display: none;
    }
}
`


function Navbarcomponent() {
    return (
        <Decoration>
        <div>
            <nav>
            <div className="nav-container">
             <div className="logo-detail">
                <a href="/homepage"><img className='logo' src={Logo} alt=""/></a>
             </div> 

             <div className="nav-links">
             <input type="checkbox" id='check'/>
              <ul className="links">
                    <div className="btn-close">
                    <label for="check"><FontAwesomeIcon icon={faTimes}/></label>
                    </div>
                    <li><a className="product" href="/allproducts">All Products</a></li>
                    <li><a className="product" href="/localproducts">Local Coffee Bean</a></li>
                    <li><a className="product" href="/importproducts">Imported Coffee Bean</a></li>
                    <li><a className="contact" href="/contact"><i className="icon-phone"><FontAwesomeIcon icon={faPhoneAlt}/></i><span>Contact us</span></a></li>
                    <li><a className="contact" href="/cart"><i className="icon-cart"><FontAwesomeIcon icon={faShoppingCart}/></i><span className="mycart">My cart</span></a></li>
                    <li><a className="contact" href="/login"><i className="icon-login"><FontAwesomeIcon icon={faUserCircle}/></i><span>Log - in</span></a></li>
                </ul>
                <div className="btn-menu">
                <label for="check" className="btn-check"><FontAwesomeIcon icon={faBars}/></label>
                </div>
             </div>
             </div>
            </nav>
         </div>
    </Decoration>
    )
}

export default Navbarcomponent
