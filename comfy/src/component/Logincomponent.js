import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from '../config/axios';
import { validateInput, validateLoginObject } from '../services/validation';
import { setToken, getToken } from '../services/localStorage';
import { AuthContext } from '../contexts/authContext';
import jwt_decode from 'jwt-decode';
const Decoration = styled.div`
  .container {
    position: relative;
    max-width: 850px;
    width: 100%;
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

  .text1,
  .text2 {
    font-size: 14px;
    font-weight: 500;
    color: #333;
    margin-top: 10px;
  }

  .text1 {
    text-align: right;
  }
  .text2 {
    text-align: center;
  }
  .text1 a,
  .text2 a {
    text-decoration: none;
    color: blue;
  }

  .text1 a:hover {
    text-decoration: underline;
  }
  .text2 a:hover {
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
  .input-box {
    display: flex;
    align-items: center;
    height: 50px;
    width: 100%;
    margin: 3px 0px;
  }

  .input-box input {
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

  .input-box i {
    position: absolute;
    color: #cb925d;
    font-size: 17px;
  }

  .error-text {
    color: red;
    font-size: 12px;
    font-style: oblique;
  }
`;
function Logincomponent() {
  const [input, setInput] = useState({ email: '', password: '' });
  const [error, setError] = useState({});
  const { setUser } = useContext(AuthContext);
  const history = useHistory();
  const handleChangeInput = (e) => {
    const errMessage = validateInput(e.target.name, e.target.value);
    setError((cur) => ({ ...cur, [e.target.name]: errMessage }));
    setInput((cur) => ({ ...cur, [e.target.name]: e.target.value }));
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    // console.log(input);
    const errMessage = validateLoginObject(input);
    setError(errMessage);
    if (Object.keys(errMessage).length === 0) {
      try {
        console.log('ready for req');
        const res = await axios.post('/login', input);
        setToken(res.data.token);
        setUser(jwt_decode(getToken()));
        history.push('/');
      } catch (err) {
        console.log('Login error:', err);
        console.dir(err);
      }
    }
  };
  return (
    <Decoration>
      <div className="container">
        <form>
          <div className="form-content">
            <div className="title">Login</div>
            <div className="input-boxes">
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
                  <FontAwesomeIcon icon={faKey} />
                </i>
                <input
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  value={input.password}
                  onChange={handleChangeInput}
                  required
                />
              </div>
              {error.password && <p className="error-text">{error.password}</p>}
              <div className="text1">
                <Link to={'/forgot'} className="text-forget">
                  Forgot passsword?
                </Link>
              </div>
              <div className="button input-box">
                <input
                  type="button"
                  value="Submit"
                  onClick={handleSubmitLogin}
                />
              </div>

              <div className="text2">
                Don't have an account?
                <Link to={'/register'}> Signup now</Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Decoration>
  );
}

export default Logincomponent;
