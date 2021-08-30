import React from 'react';
import styled from 'styled-components';
import register from '../image/register.jpg';
import Registercomponent from '../component/Registercomponent';

const Decoration = styled.div`
  padding-top: 64px;

  .main-container {
    margin: 0 auto;
    margin-top: 40px;
    width: 80%;

    display: flex;
    background-color: #f8f8f8;
  }

  /* .image-container{
       width: 90%;
       height: 100%;
     
   } */

  .image-container img {
    height: 100%;
    width: 100%;
  }
  .register-container {
    background-color: #fff;
    box-shadow: 0 0px 5px rgba(0, 0, 0, 0.25);
    width: 40%;
  }

  @media (max-width: 1090px) {
    .image-container {
      display: none;
    }
    .register-container {
      width: 100%;
      margin: 0 auto;
    }
  }

  @media (max-width: 730px) {
    .image-container {
      display: none;
    }
  }
`;
function Register() {
  return (
    <Decoration>
      <div className="main-container">
        <div className="image-container">
          <img src={register} alt="" />
        </div>
        <div className="register-container">
          <Registercomponent />
        </div>
      </div>
    </Decoration>
  );
}

export default Register;
