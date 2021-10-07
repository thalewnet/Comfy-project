import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import Path from '../component/Path';
import truck from '../image/truck.png';
import { Link } from 'react-router-dom';
import { validateInput, validateShipmentObject } from '../services/validation';
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
    min-height: 550px;
    display: flex;
    justify-content: center;
    /* background-color: #F8F8F8; */
    padding: 10px 0;
  }
  .boxes {
    width: 90%;
  }

  input {
    width: 100%;
    height: 30px;
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
    margin-bottom: 15px;
    transition: all 0.3s ease;
  }

  form.box .form label {
    font-weight: 500;
  }

  select {
    width: 100%;
    height: 30px;
    display: flex;
    outline: none;
    font-size: 14px;
    border-radius: 5px;
    box-sizing: border-box;
    background: rgba(178, 147, 133, 0.2);
    border: 1px solid #ccc;
    border-bottom-width: 2px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
    margin-top: 3px;
    margin-bottom: 18px;
    transition: all 0.3s ease;
  }

  textarea {
    width: 100%;
    height: 60px;
    resize: none;
    display: flex;
    outline: none;
    font-size: 13px;
    padding-left: 10px;
    border-radius: 5px;
    box-sizing: border-box;
    background: rgba(178, 147, 133, 0.2);
    border: 1px solid #ccc;
    border-bottom-width: 2px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
    margin-top: 3px;
    margin-bottom: 18px;
  }

  input:focus,
  input:valid,
  select:focus,
  select:valid,
  textarea:focus,
  textarea:valid {
    border-color: #b29385;
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
    padding-left: 5px;
    margin-top: 0;
    margin-bottom: 5px;
  }
`;

function Delivery() {
  const [error, setError] = useState({});
  const { shipment, setShipment } = useContext(OrderContext);
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [subdistricts, setSubDistricts] = useState([]);
  const [zipCode, setZipCode] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/services/provinces');
        setProvinces(res.data.provinces);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleChangeShipment = async (e) => {
    const errMessage = validateInput(e.target.name, e.target.value);
    setError((cur) => ({ ...cur, [e.target.name]: errMessage }));

    if (e.target.name === 'province') {
      const res = await axios.get(
        `/services/districts?province=${e.target.value}`
      );
      console.log(res.data.amphoeList);
      setSubDistricts([]);
      setZipCode([]);
      setDistricts(res.data.amphoeList);
      setShipment((cur) => ({ ...cur, [e.target.name]: e.target.value }));
    }
    if (e.target.name === 'district') {
      setSubDistricts([]);
      setZipCode([]);
      const res = await axios.get(
        `services/subdistricts?province=${shipment.province}&amphoe=${e.target.value}`
      );
      setSubDistricts(res.data.districtLists);
      setZipCode([res.data.zipcode]);
      setShipment((cur) => ({ ...cur, [e.target.name]: e.target.value }));
    }
    setShipment((cur) => ({ ...cur, [e.target.name]: e.target.value }));
  };

  const handleSubmitShipment = (e) => {
    e.preventDefault();
    const errMessage = validateShipmentObject(shipment);
    setError(errMessage);
    console.log(shipment);
  };
  return (
    <Decoration>
      <Path />

      <div className="bar">
        <div className="inside">
          <img className="all" src={truck} alt="truck"></img>
          <p className="text-bar">Shipping Address</p>
        </div>
      </div>

      <div className="text-box">
        <p className="topics">Address</p>
      </div>

      <div className="container">
        <form className="boxes">
          <label htmlFor="address">Address :</label>
          {error.address && <span className="error-text">{error.address}</span>}
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Enter your address"
            value={shipment.address}
            onChange={handleChangeShipment}
          />
          <div className="form">
            <label htmlFor="province">Province :</label>
            {error.province && (
              <span className="error-text">{error.province}</span>
            )}
            <select name="province" onChange={handleChangeShipment}>
              <option value="">Please select </option>
              {provinces.map((item, idx) => (
                <option key={idx} value={item}>
                  {item}
                </option>
              ))}
              <option value="Bangkok">Bangkok</option>
            </select>
          </div>
          <div className="form">
            <label htmlFor="district">District :</label>
            {error.district && (
              <span className="error-text">{error.district}</span>
            )}
            <select name="district" onChange={handleChangeShipment}>
              <option value="">Please select </option>
              {districts.map((item, idx) => (
                <option key={idx} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="form">
            <label htmlFor="subdistrict">Sub-district :</label>
            {error.subdistrict && (
              <span className="error-text">{error.subdistrict}</span>
            )}
            <select name="subdistrict" onChange={handleChangeShipment}>
              <option value="">Please select </option>
              {subdistricts.map((item, idx) => (
                <option key={idx} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="form">
            <label htmlFor="zipcode">Post number:</label>
            {error.zipcode && (
              <span className="error-text">{error.zipcode}</span>
            )}
            <select name="zipcode" onChange={handleChangeShipment}>
              <option value="">Please select </option>
              {zipCode.map((item, idx) => (
                <option key={idx} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <label htmlFor="phone">Phone Number :</label>
          {error.phonenumber && (
            <span className="error-text">{error.phonenumber}</span>
          )}
          <input
            type="text"
            id="phone"
            name="phonenumber"
            placeholder="Enter your phone number"
            value={shipment.phonenumber}
            onChange={handleChangeShipment}
          />

          <div className="form">
            <label htmlFor="details">Detail information:</label>
            <textarea
              id="details"
              name="comment"
              placeholder="More information..."
              value={shipment.comment}
              onChange={handleChangeShipment}
            ></textarea>
          </div>
          <div className="form">
            <Link to={'/cart/delivery/payment'}>
              <button
                type="button"
                className="btn"
                onClick={handleSubmitShipment}
              >
                Confirm Shipping Address
              </button>
            </Link>
          </div>
        </form>
      </div>
    </Decoration>
  );
}

export default Delivery;
