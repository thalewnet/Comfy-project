import React from 'react'
import styled from 'styled-components'
import Navbar from '../component/Navbar.js'
import Footer from '../component/Footer.js'
import register2 from '../image/register2.jpg'

const Decoration = styled.div`
      padding-top: 64px;
   
   .container {
       margin: 0 auto;
       margin-top: 40px;
       width: 80%;
       min-height: 550px;
       display: flex;
       background-color: #F8F8F8;
   }
   img {
       height: 550px;
   }

   .register  {
       width: 80%;
       display: flex;
       flex-direction: column;
        padding-top: 70px;
       

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
         padding-left: 50px;
         padding-bottom: 20px;
       }
      
       input{
           width: 85%;
           margin-bottom: 15px;
           line-height: 1.8;
           border-radius: 5px;
           box-sizing: border-box;
           background: rgba(190, 188, 188, 0.33);
           border: 1.5px solid #B29385;
           box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
       }

       .btn {
            width: 85%;
            border-radius: 5px;
            font-size: 19px;
            line-height: 36px;
            padding: 0 16px;
            border: none;
            background-color: #384937;
            color: whitesmoke;
            margin-top: 10px;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
       }
         
       }

       .btn:hover{
           background-color: #456044;
       }

       a:hover{
                text-decoration: underline;
            }
        
`

function Forgotten() {
    return (
        <Decoration>
        <Navbar/>
        <div>
         <div className="container">
                <div className="image">
                    <img src={register2} alt=""/>
                </div>
                <div className="register">
                    <h1>Forgot password</h1>
               <form className="form">
                    <input type="text" placeholder="Email"/>
                    <button type="submit" className="btn">Send</button>
                </form>
            </div>
         </div>
        </div>
        <Footer/>
        </Decoration>
    )
}

export default Forgotten
