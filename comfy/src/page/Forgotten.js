import React from 'react'
import styled from 'styled-components'
import Navbar from '../component/Navbar.js'
import Footer from '../component/Footer.js'
import register2 from '../image/register2.jpg'
import Forgotcomponent from '../component/Forgotcomponent.js'

const Decoration = styled.div`
      padding-top: 64px;
   
   .main-container {
       margin: 0 auto;
       margin-top: 40px;
       width: 80%;
       min-height: 550px;
       display: flex;
       background-color: #F8F8F8;
   }
   .image-container{
       width: 90%;
       height: 100%;
       background:red;
       position: relative;
   }

   .image-container img{
      position: absolute;
      width: 100%;
      object-fit: cover;
   }
   .forgot-container {
      background-color: #fff;
      box-shadow: 0 5px 10px rgba(0,0,0,0.25);
      width: 50%; 
   }

   @media (max-width: 1090px ) {
    .image-container{
      display: none;
    }
    .forgot-container {
       width: 100%;
       margin: 0 auto;

   }
   }

   @media (max-width: 730px ) {
    .image-container{
      display: none;
   }

}
        
`

function Forgotten() {
    return (
        <Decoration>
        <Navbar/>
        <div>
         <div className="main-container">
                <div className="image-container">
                    <img src={register2} alt=""/>
                </div>

                <div className="forgot-container">
                <Forgotcomponent/>
                </div>
                {/* <div className="register">
                    <h1>Forgot password</h1>
               <form className="form">
                    <input type="text" placeholder="Email"/>
                    <button type="submit" className="btn">Send</button>
                </form>
            </div> */}
         </div>
        </div>
        <Footer/>
        </Decoration>
    )
}

export default Forgotten
