import React from 'react'
import styled from 'styled-components'
import Navbar from '../component/Navbar.js'
import Footer from '../component/Footer.js'
import register1 from '../image/register1.jpg'
import Logincompo from '../component/Logincomponent.js'

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
   .login-container {
      background-color: #fff;
      box-shadow: 0 5px 10px rgba(0,0,0,0.25);
      width: 50%; 
   }

   @media (max-width: 1090px ) {
    .image-container{
      display: none;
    }
    .login-container {
       width: 100%;
       margin: 0 auto;

   }
   }

   @media (max-width: 730px ) {
    .image-container{
      display: none;
   }
   
   /* .register  {
       width: 80%;
       display: flex;
       flex-direction: column;
       padding-top: 50px;
       align-items: center;
       h1 {
           text-align: center;
           }

       a{
            color: rgb(24, 119, 242);
            text-decoration: none;
            font-size: 12px;
           
         }
        span {
            font-size: 12px;
            
        }
        
       .form {
            text-align: center;
         }
      
       input{
         
           width: 100%;
           margin-bottom: 25px;
           line-height: 1.8;
           border-radius: 5px;
           box-sizing: border-box;
           background: rgba(190, 188, 188, 0.33);
           border: 1.5px solid #B29385;
           box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
       }

       .btn {
            margin: 0 auto;
            width: 100%;
            border-radius: 5px;
            font-size: 19px;
            line-height: 36px;
            padding: 0 16px;
            border: none;
            background-color: #384937;
            color: whitesmoke;
            margin: 10px 0px; ;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
       }
       }

      .forgot{
        text-align:end
      }
       .btn:hover{
           background-color: #456044;
       }

       a:hover{
                text-decoration: underline;
            } */

}
`

function Login() {
    return (
        <Decoration>
        <Navbar/>
        <div>
         <div className="main-container">
            <div className="image-container">
             <img src={register1} alt=""/>
            </div>

            <div className="login-container">
                <Logincompo/>
            </div>
               
                {/* <div className="register">
                    <h1>Log in</h1>
                <form className="form">
                <div><input type="text" placeholder="Enter your email"/></div>
                <div><input type="password" placeholder=" Enter your password"/></div>
                <div className="forgot"><a className="forgot" href="./forgot">Forgotten password?</a></div>
                <div>
                    <button type="submit" className="btn">Log in</button>
                </div>
                <a className="newaccount" href="./register">Create new account</a>
                <span> For new experience flavors of coffee </span>
                </form>
                </div> */}
         </div>
        </div>
        <Footer/>
        </Decoration>
    )
}

export default Login
