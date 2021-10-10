import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Cargo from '../image/cargo.png';
import Admintable from '../component/Admintable.js';
import { Link } from 'react-router-dom';
import axios from '../config/axios';
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

  .text-box {
    width: 80%;
    margin: 0 auto;
  }
  .topics {
    width: 90%;
    margin: 0 auto;
    margin-top: 10px;
    font-weight: 500;
    font-size: 20px;
  }

  .container {
    margin: 0 auto;
    margin-top: 5px;
    width: 80%;
    min-height: 375px;
    /* background-color: #F8F8F8; */
    padding: 10px 0;
  }

  .container-inside {
    width: 90%;
    margin: 0 auto;
  }

  .btn {
    position: relative;
    width: 100%;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    line-height: 36px;
    padding: 0 16px;
    background-color: #384937;
    color: whitesmoke;
    margin-top: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    a {
      text-decoration: none;
    }
    &::before {
      content: '';
      position: absolute;
      left: 0%;
      top: -20px;
      width: 100%;
      border-top: 1px solid rgba(0, 0, 0, 0.65);
    }
  }

  .btn:hover {
    background-color: #456044;
  }
`;
function Adminorderstatus() {
  const [orderLists, setOrderLists] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/orders');
        setOrderLists(res.data.orders);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <Decoration>
      <div className="bar">
        <div className="inside">
          <img className="all" src={Cargo} alt="truck"></img>
          <p className="text-bar">Customer Order</p>
        </div>
      </div>
      <div className="text-box">
        <p className="topics">Order status</p>
      </div>

      <div className="container">
        <div className="container-inside">
          <Admintable orderLists={orderLists} />
          <Link to={'/'}>
            <button type="button" className="btn">
              Back to homepage
            </button>
          </Link>
        </div>
      </div>
    </Decoration>
  );
}

export default Adminorderstatus;
