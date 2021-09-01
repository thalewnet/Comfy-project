import React from 'react';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import InputAuth from './ui/InputAuth';

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
    width: 32px;
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
`;
function Forgotcomponent() {
  return (
    <Decoration>
      <div className="container">
        <form action="#">
          <div className="form-content">
            <div className="title">Forgot password</div>
            <div className="input-boxes">
              <InputAuth
                icon={faEnvelope}
                type="email"
                text="Enter your email"
              />

              <div className="button input-box">
                <input type="button" value="Send" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </Decoration>
  );
}

export default Forgotcomponent;
