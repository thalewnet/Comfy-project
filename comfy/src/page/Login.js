import React from 'react'
import styled from 'styled-components'
import Navbar from '../component/Navbar.js'
import Footer from '../component/Footer.js'
import register1 from '../image/register1.jpg'
import Logincompo from '../component/Logincomponent.js'
import Footercomponent from '../component/Footercomponent.js'
import Navbarcomponent from '../component/Navbarcomponent.js'
const Decoration = styled.div`
      padding-top: 64px;
   
   .main-container {
       margin: 0 auto;
       margin-top: 40px;
       width: 80%;  
       display: flex;
       background-color: #F8F8F8;
   }

   .image-container{
       /* width: 100%;
       background:red; */
   }

   .image-container img{
      width: 100%;
      height: 100%;
      object-fit: cover;
   }
   .login-container {
      background-color: #fff;
      box-shadow: 0 0px 5px rgba(0,0,0,0.25);
      width: 50%; 
   }

   @media (max-width: 1190px ) {

    .image-container{
      display: none;
    }

    .main-container {
        background-color: #fff;
    }
    .login-container {
       width: 70%;
       margin: 0 auto;
   }

   }

   @media (max-width: 730px ) {
    .image-container{
      display: none;
   }
   
}
`

function Login() {
    return (
        <Decoration>
        <Navbarcomponent/>
        <div>
         <div className="main-container">
            <div className="image-container">
             <img src={register1} alt=""/>
            </div>

            <div className="login-container">
                <Logincompo/>
            </div>
         </div>
        </div>
        <Footercomponent/>
        </Decoration>
    )
}

export default Login
