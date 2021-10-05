import React, { useState, useContext } from 'react';
import axios from '../config/axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faUser,
  faMobileAlt,
  faKey,
} from '@fortawesome/free-solid-svg-icons';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { validateInput, validateRegisterObject } from '../services/validation';

const Decoration = styled.div`
  .container {
    position: relative;
    max-width: 850px;
    width: 100%;
    /* background-color: #fff;
    box-shadow: 0 5px 10px rgba(0,0,0,0.25); */
    padding: 70px 0px;
  }

  .container form {
    margin: 0 auto;
    height: 100%;
    width: 90%;
    background: #fff;
  }

  form .form-content .title {
    position: relative;
    font-size: 24px;
    font-weight: 500;
    color: #333;
  }

  form .form-content .title:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 25px;
    background: #cb925d;
  }

  form .form-content .input-boxes {
    margin-top: 30px;
  }

  form .form-content .input-box {
    display: flex;
    align-items: center;
    height: 50px;
    width: 100%;
    margin: 3px 0px;
  }

  .form-content .input-box input {
    height: 100%;
    width: 100%;
    outline: none;
    border: none;
    padding: 0 30px;
    font-size: 17px;
    font-weight: 500;
    border-bottom: 2px solid rgba(0, 0, 0, 0.25);
    transition: all 0.3s ease;
  }

  .form-content .input-box i {
    position: absolute;
    color: #cb925d;
    font-size: 17px;
  }

  form .form-content .text1,
  form .form-content .text2 {
    font-size: 14px;
    font-weight: 500;
    color: #333;
    margin-top: 10px;
  }

  form .form-content .text1 {
    text-align: right;
  }
  form .form-content .text2 {
    text-align: center;
  }
  form .form-content .text1 a,
  form .form-content .text2 a {
    text-decoration: none;
    color: blue;
  }

  form .form-content .text1 a:hover {
    text-decoration: underline;
  }
  form .form-content .text2 a:hover {
    text-decoration: underline;
  }

  .form-content .input-box input:focus,
  .form-content .input-box input:valid {
    border-color: #cb925d;
  }

  form .form-content .button {
    color: #fff;
    margin-top: 40px;
  }

  form .form-content .button input {
    color: #fff;
    background: #384937;
    border-radius: 6px;
    padding: 0;
    cursor: pointer;
    transition: all 0.4s ease;
  }

  form .form-content .button input:hover {
    background: #456044;
  }

  .error-text {
    color: red;
    font-size: 12px;
    font-style: oblique;
  }
`;
function Registercomponent() {
  const history = useHistory();
  const [input, setInput] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmpassword: '',
    phonenumber: '',
  });
  const [error, setError] = useState({});

  const handleChangeInput = (e) => {
    const errMessage = validateInput(e.target.name, e.target.value);
    setError((cur) => ({ ...cur, [e.target.name]: errMessage }));
    setInput((cur) => ({ ...cur, [e.target.name]: e.target.value }));
  };

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    console.log(input);
    const errMessage = validateRegisterObject(input);
    setError(errMessage);

    if (Object.keys(errMessage).length === 0) {
      try {
        console.log('ready for req');
        const res = await axios.post('/register', input);
        console.log(res.data);
        history.push('/login');
      } catch (err) {
        console.log('Login error:', err);
        console.dir(err);
      }
    }
  };
  return (
    <Decoration>
      <div>
        <div className="container">
          <form action="#">
            <div className="form-content">
              <div className="register-form">
                <div className="title">Registration</div>
                <div className="input-boxes">
                  <div className="input-box">
                    <i>
                      <FontAwesomeIcon icon={faUser} />
                    </i>
                    <input
                      type="text"
                      placeholder="Enter firstname"
                      name="firstname"
                      value={input.firstname}
                      onChange={handleChangeInput}
                      required
                      maxLength="10"
                    />
                  </div>
                  {error.firstname && (
                    <p className="error-text">{error.firstname}</p>
                  )}
                  <div className="input-box">
                    <i>
                      <FontAwesomeIcon icon={faUser} />
                    </i>
                    <input
                      type="text"
                      placeholder="Enter lastname"
                      name="lastname"
                      value={input.lastname}
                      onChange={handleChangeInput}
                      required
                    />
                  </div>
                  {error.lastname && (
                    <p className="error-text">{error.lastname}</p>
                  )}
                  <div className="input-box">
                    <i>
                      <FontAwesomeIcon icon={faEnvelope} />
                    </i>
                    <input
                      type="email"
                      placeholder="Enter an email"
                      name="email"
                      value={input.email}
                      onChange={handleChangeInput}
                      required
                    />
                  </div>
                  {error.email && <p className="error-text">{error.email}</p>}
                  <div className="input-box">
                    <i>
                      <FontAwesomeIcon icon={faMobileAlt} />
                    </i>
                    <input
                      type="text"
                      placeholder="Enter your phonenumber"
                      name="phonenumber"
                      value={input.phonenumber}
                      onChange={handleChangeInput}
                      required
                    />
                  </div>
                  {error.phonenumber && (
                    <p className="error-text">{error.phonenumber}</p>
                  )}
                  <div className="input-box">
                    <i>
                      <FontAwesomeIcon icon={faKey} />
                    </i>
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={input.password}
                      onChange={handleChangeInput}
                      required
                    />
                  </div>
                  {error.password && (
                    <p className="error-text">{error.password}</p>
                  )}
                  <div className="input-box">
                    <i>
                      <FontAwesomeIcon icon={faKey} />
                    </i>
                    <input
                      type="password"
                      placeholder="Confirm password"
                      name="confirmpassword"
                      value={input.confirmpassword}
                      onChange={handleChangeInput}
                      required
                    />
                  </div>
                  {error.confirmpassword && (
                    <p className="error-text">{error.confirmpassword}</p>
                  )}

                  <div className="button input-box">
                    <input
                      type="button"
                      value="Submit"
                      onClick={handleSubmitRegister}
                    />
                  </div>
                  <div className="text2">
                    Already have an account?
                    <Link to={'/login'}> Login now</Link>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Decoration>
  );
}

export default Registercomponent;
