import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import Path from '../component/Path';
import credit from '../image/credit.png';
import { faFileUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useHistory } from 'react-router-dom';
import { OrderContext } from '../contexts/orderContext';
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
    display: flex;
    justify-content: center;
    /* background-color: #F8F8F8; */
    padding: 10px 0;
  }
  .boxes {
    width: 90%;
  }

  input[type='text'] {
    width: 100%;
    height: 35px;
    outline: none;
    border-radius: 5px;
    padding-left: 10px;
    border: 1px solid #ccc;
    border-bottom-width: 2px;
    font-size: 14px;
    box-sizing: border-box;
    background: rgba(178, 147, 133, 0.2);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
    margin-top: 3px;
    margin-bottom: 18px;
    transition: all 0.3s ease;
  }

  input:focus,
  input:valid {
    border-color: #b29385;
  }

  .upload-area {
    margin-top: 3px;
    border: 2px dashed #b29385;
    background: rgba(178, 147, 133, 0.2);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
    width: 100%;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .upload-icon {
    margin-top: 5px;
    font-size: 40px;
    color: burlywood;
  }

  .text {
    font-size: 16px;
    font-weight: 500;
  }

  .upload-area label.browse {
    margin-bottom: 5px;
    padding: 5px 15px;
    font-size: 12px;
    font-weight: 500;
    background: rgba(178, 147, 133, 0.1);
    border-radius: 10px;
    border: none;
    outline: none;
    color: black;
    cursor: pointer;
  }

  .preview-image {
    width: 200px;
    height: 300px;
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
    margin-top: 40px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;

    &::before {
      content: '';
      position: absolute;
      left: 0%;
      top: -20px;
      width: 100%;
      border-top: 1px solid rgba(0, 0, 0, 0.65);
    }
    a {
      text-decoration: none;
    }
  }

  .btn:hover {
    background-color: #456044;
  }
  .error-text {
    color: red;
    font-size: 12px;
    font-style: oblique;
  }

  @media (max-width: 1100px) {
    .topics {
      padding-left: 0px;
    }
  }
`;

function Payment() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const { shipment, checkOutItems, paymentPrice } = useContext(OrderContext); // เหลือใส่ cart order
  const [error, setError] = useState({});
  const history = useHistory();
  useEffect(() => {
    if (!selectedFile) {
      setPreview(null);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);
  const handleSelectImage = (e) => {
    setError({});
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(null);
      return;
    }

    setSelectedFile(e.target.files[0]);
  };

  const handleSubmittoCreateOrder = async (e) => {
    try {
      e.preventDefault();
      if (!selectedFile) {
        setError((cur) => ({ ...cur, photo: 'กรุณาแนบหลักฐานการโอน' }));
      } else {
        console.log(shipment);
        console.log(checkOutItems);
        console.log(+paymentPrice);

        const formData = new FormData();

        formData.append('address', shipment.address);
        formData.append('province', shipment.province);
        formData.append('district', shipment.district);
        formData.append('subdistrict', shipment.subdistrict);
        formData.append('zipcode', shipment.zipcode);
        formData.append('phonenumber', shipment.phonenumber);
        formData.append('comment', shipment.comment);
        formData.append('cloudinput', selectedFile);
        formData.append('totalprice', +paymentPrice);
        for (let i = 0; i < checkOutItems.length; i++) {
          formData.append('arrcartid', +checkOutItems[i]);
        }
        await axios.post('/orders', formData);
        history.push('/confirm');
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Decoration>
      <Path />
      <div className="bar">
        <div className="inside">
          <img className="all" src={credit} alt="credit"></img>
          <p className="text-bar">Payment</p>
        </div>
      </div>
      <div className="text-box">
        <p className="topics">Payment</p>
      </div>
      <div className="container">
        <form className="boxes">
          <div className="form">
            <label htmlFor="name">Account Name :</label>
            <input
              type="text"
              id="name"
              defaultValue="Comfy Coffee Co., Ltd."
              disabled
            />
          </div>
          <div className="form">
            <label htmlFor="accnum">Banking Account Number:</label>
            <input type="text" id="accnum" defaultValue="123-234563" disabled />
          </div>
          <div className="form">
            <label htmlFor="bank">Bank :</label>
            <input type="text" id="bank" defaultValue="KBank" disabled />
          </div>
          <div className="form">
            <label htmlFor="price">Price :</label>
            <input
              type="text"
              id="price"
              defaultValue={paymentPrice}
              disabled
            />
          </div>
          <div className="form">
            <label htmlFor="upload">Upload Payment Slip :</label>
            {error.photo && <span className="error-text">{error.photo}</span>}
            <div className="upload-area">
              <div className="upload-icon">
                <i>
                  <FontAwesomeIcon icon={faFileUpload} />
                </i>
              </div>

              <label htmlFor="upload" className="browse">
                Browse File
              </label>
              <input
                type="file"
                id="upload"
                onChange={handleSelectImage}
                hidden
              />
            </div>
            {selectedFile && (
              <img className="preview-image" src={preview} alt="" />
            )}
          </div>

          <div className="form">
            <Link to={'/cart/delivery/payment/confirm'}>
              <button
                type="button"
                className="btn"
                onClick={handleSubmittoCreateOrder}
              >
                Confirm payment
              </button>
            </Link>
          </div>
        </form>
      </div>
    </Decoration>
  );
}

export default Payment;
