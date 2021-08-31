import React from 'react';
import styled from 'styled-components';
import Path from '../component/Path';
import local from '../image/thailand.png';
import Card4 from '../component/Card4.js';
import { Link } from 'react-router-dom';
import ProductMenu from '../component/product/ProductMenu';
const Decoration = styled.div`
  padding-top: 64px;

  .second-nav {
    width: 80%;
    margin: 0 auto;
    background-color: #cda58b;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  }

  ul.nav-product {
    margin: 0 15px;
    list-style: none;
    display: flex;
    flex-wrap: nowrap;
    height: 40px;
    transition: all 1s ease;
  }

  .nav-product li {
    margin: 0rem 2.5rem;
    line-height: 1.5;
    display: flex;
    align-items: center;
    position: relative;
    white-space: nowrap;
    transition: all 1s ease;

    a {
      text-decoration: none;
      color: black;
    }
  }
  .localproduct {
    &::before {
      content: '';
      position: absolute;
      bottom: 5px;
      left: -10%;
      width: 120%;
      border-bottom: 2px solid rgba(0, 0, 0, 0.65);
    }
  }
  .productbar {
    width: 80%;
    margin: 0 auto;
    margin-top: 20px;
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

  .text-productbar {
    font-weight: 500;
  }

  .item-card {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    padding-top: 35px;
    flex-wrap: wrap;
  }

  @media (max-width: 995px) {
    .item-card {
      justify-content: space-around;
    }
  }
  @media (max-width: 890px) {
    .nav-product li {
      font-size: 14px;
    }
  }

  @media (max-width: 765px) {
    /* .second-nav{
               display: none;
           } */
    .nav-product li a.allproduct,
    .nav-product li a.importedproduct {
      display: none;
    }
  }
`;

const MOCK_LOCAL = ['Doi Mon Chong', 'Mae Chan Tai', 'Doi Chang', 'Doi Chang', 'Doi Chang', 'Doi Chang'];
function Localproduct() {
  return (
    <Decoration>
      <Path />
      <ProductMenu />
      <div className="productbar">
        <div className="inside">
          <img className="all" src={local} alt="allrpoduct"></img>
          <p className="text-productbar">Local Coffee Beans</p>
        </div>
      </div>

      <div className="item-card">
        {MOCK_LOCAL.map((item, idx) => (
          <div className="bs" key={idx}>
            <Card4 name={item} />
          </div>
        ))}
      </div>
    </Decoration>
  );
}

export default Localproduct;
