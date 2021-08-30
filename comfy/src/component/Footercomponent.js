import React from 'react';
import styled from 'styled-components';
import footorlogo from '../image/footerlogo.png';
import { faFacebookSquare, faLine, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
const Decoration = styled.div`
  footer {
    /* position: fixed; */
    margin-top: 50px;
    background: #b29385;
    width: 100%;
    bottom: 0;
    left: 0;
  }

  footer .contect {
    margin: 0 auto;
    padding: 30px 40px 40px 40px;
  }
  .content {
    width: 80%;
    margin: 0 auto;
    display: flex;
  }
  .content .top {
    /* display: flex; */
  }

  .content .top .logo-detail img {
    height: 60px;
    margin-top: 10px;
  }

  .content .top .media-icons {
    display: flex;
  }

  .content .top .media-icons a {
    height: 40px;
    width: 40px;
    color: #fff;
    background: red;
    margin: 0 8px;
    border-radius: 50%;
    text-align: center;
    line-height: 40px;
    font-size: 17px;
    text-decoration: none;
    transition: all 0.4s ease;
  }

  .content .top .media-icons a:nth-child(1) {
    background: #4267b2;
  }
  .content .top .media-icons a:nth-child(1):hover {
    color: #4267b2;
    background: #fff;
  }
  .content .top .media-icons a:nth-child(2) {
    background: #e1306c;
  }
  .content .top .media-icons a:nth-child(2):hover {
    color: #e1306c;
    background: #fff;
  }
  .content .top .media-icons a:nth-child(3) {
    background: #00c300;
  }
  .content .top .media-icons a:nth-child(3):hover {
    color: #00c300;
    background: #fff;
  }

  .content .link-boxes {
    width: 100%;
    display: flex;
  }

  .content .link-boxes .box {
    /* background: red; */
  }

  .content .link-boxes .box .link-name {
    color: #fff;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 10px;
    position: relative;
    opacity: 0.7;
    &:before {
      content: '';
      position: absolute;
      left: 0px;
      bottom: -2px;
      height: 2px;
      width: 35px;
      background: #fff;
    }
  }

  .content .link-boxes .box li {
    list-style: none;
  }
  .content .link-boxes .box li a {
    text-decoration: none;
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;
    opacity: 0.8;
    transition: all 0.4s ease;
  }

  .content .link-boxes .box li a:hover {
    opacity: 1;
    text-decoration: underline;
  }
  .cr-text {
    text-align: center;
    font-size: 10px;
    font-weight: 300;
    color: #fff;
    opacity: 0.8;
    margin: 0;
    padding: 8px;
  }
  @media (max-width: 550px) {
    .content {
      display: flex;
      flex-direction: column;
    }

    .content .link-boxes .box {
      padding-left: 20px;
    }
  }
`;

function Footercomponent() {
  return (
    <Decoration>
      <footer>
        <div className="content">
          <div className="top">
            <div className="logo-detail">
              <img src={footorlogo} alt="" />
            </div>
            <div className="media-icons">
              <Link to={'#'}>
                <i>
                  <FontAwesomeIcon icon={faFacebookSquare} />
                </i>
              </Link>
              <Link to={'#'}>
                <i>
                  <FontAwesomeIcon icon={faInstagram} />
                </i>
              </Link>
              <Link to={'#'}>
                <i>
                  <FontAwesomeIcon icon={faLine} />
                </i>
              </Link>
            </div>
          </div>

          <div className="link-boxes">
            <ul className="box">
              <li className="link-name">Shopping</li>
              <li>
                <Link to={'/allproducts'}>All products</Link>
              </li>
              <li>
                <Link to={'/localproducts'}>Local products</Link>
              </li>
              <li>
                <Link to={'/importproducts'}>Improted product</Link>
              </li>
            </ul>
            <ul className="box">
              <li className="link-name">Support</li>
              <li>
                <Link to={'/contact'}>Contact us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom detail">
          <p className="cr-text">COMFY THAILAND., Copyright &copy; 2021</p>
        </div>
      </footer>
    </Decoration>
  );
}

export default Footercomponent;
