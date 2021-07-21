import React from 'react'
import styled from 'styled-components'
import Navbar from '../component/Navbar.js'
import Footer from '../component/Footer.js'
import register from '../image/register.jpg'

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
        padding-top: 20px;
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        
        h1 {
            text-align: center;
            }
        
        .box{
            
            width: 80%;
        }
        
        input{
            width: 100%;
            line-height: 1.8;
            border-radius: 5px;
            box-sizing: border-box;
            background: rgba(190, 188, 188, 0.33);
            border: 1.5px solid #B29385;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            margin-bottom: 18px;;
        }

        .btn {
            width: 100%;
             border: none;
             border-radius: 5px;
             font-size: 19px;
             line-height: 36px;
             padding: 0 16px;
             background-color: #384937;
             color: whitesmoke;
             margin-top: 20px;
             box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
        }
        .btn:hover{
            background-color: #456044
        }
    
`
function Register() {
    return (
        <Decoration>
        <Navbar/>
        <div>
            <div className="container">
                <div className="image">
                    <img src={register} alt=""/>
                </div>
                <div className="register">
                    <h1>Sign Up</h1>
                <form className='box'>
                <div className="form"><input type="text" placeholder="First Name"/></div>
                <div className="form"><input type="text" placeholder="Last Name"/></div>
                <div className="form"><input type="email" placeholder="Email"/></div>
                <div className="form"><input type="text" placeholder="Phone number"/></div>
                <div className="form"><input type="password" placeholder="Password"/></div>
                <div className="form"><input type="password" placeholder="Confirm password"/></div>
                <div className="form"><button type="submit" className="btn">Sign Up</button></div>
                </form>
                </div>
            </div>
        </div>
        <Footer/>
        </Decoration>
    )
    
}

export default Register


