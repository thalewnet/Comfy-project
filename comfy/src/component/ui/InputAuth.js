import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
const Decoration = styled.div`
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
`;
function InputAuth({ icon, type, text, name, value, setUser }) {
  const handleChangeInput = (e) => {
    setUser((cur) => ({ ...cur, [e.target.name]: e.target.value }));
  };
  return (
    <Decoration>
      <div className="input-box">
        <i>
          <FontAwesomeIcon icon={icon} />
        </i>
        <input
          type={type}
          placeholder={text}
          name={name}
          value={value}
          onChange={handleChangeInput}
          required
        />
      </div>
    </Decoration>
  );
}

export default InputAuth;
