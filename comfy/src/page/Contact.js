import React from 'react';
import styled from 'styled-components';
import Path from '../component/Path';
import telephone from '../image/telephone.png';
import line from '../image/line.png';
import facebook from '../image/facebook.png';
import instagram from '../image/instagram.png';
import { Link } from 'react-router-dom';
const Decoration = styled.div`
  padding-top: 64px;

  .bar {
    width: 80%;
    margin: 0 auto;
    margin-top: 10px;
    position: relative;

    &::before {
      content: '';
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

  .text-bar {
    font-weight: 500;
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

  .container-inside {
    width: 90%;
  }

  .icon {
    width: 40px;
    height: 40px;
  }

  .social-inside {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  .social {
    margin-left: 20px;
    color: black;
    text-decoration: none;
    font-weight: 500;
  }
  .box {
    margin: 10px 0 30px 0;
  }
  .head {
    margin: 0;
    font-size: 16px;
    font-weight: 500;
    padding-bottom: 10px;
  }

  .detail {
    margin: 0;
    padding-left: 25px;
  }
`;

function Contact() {
  return (
    <Decoration>
      <Path />
      <div className="bar">
        <div className="inside">
          <img className="all" src={telephone} alt="credit"></img>
          <p className="text-bar">Contact us</p>
        </div>
      </div>

      <div className="container">
        <div className="container-inside">
          <div className="box">
            <p className="head">Contact address</p>
            <p className="detail">134/99 Pracharat 1 Soi 14, Pracharat 1 road Bangsue, Bangsue, Bangkok 10800</p>
          </div>
          <div className="box">
            <p className="head">Phone contact</p>
            <p className="detail">094-018-1827</p>
          </div>

          <Link to={'#'} className="social">
            <div className="social-inside">
              <img className="icon" src={facebook} alt="fb" />
              <Link to={'#'} className="social">
                Comfy Coffee
              </Link>
            </div>
          </Link>

          <Link to={'#'} className="social">
            <div className="social-inside">
              <img className="icon" src={instagram} alt="instagram" />
              <Link to={'#'} className="social">
                Comfycoffee
              </Link>
            </div>
          </Link>

          <Link to={'#'} className="social">
            <div className="social-inside">
              <img className="icon" src={line} alt="line" />
              <Link to={'#'} className="social">
                Comfycoffee
              </Link>
            </div>
          </Link>

          <div className="box">
            <p className="head">Office hour</p>
            <p className="detail">Every day 09.00 AM - 5.00 PM </p>
          </div>
        </div>
      </div>
    </Decoration>
  );
}

export default Contact;
