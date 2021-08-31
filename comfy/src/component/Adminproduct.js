import React from 'react';
import styled from 'styled-components';

const Decoration = styled.div`
  input[type='text'] {
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    margin-bottom: 15px;
    background: #c4c4c4;
    border: none;
    height: 80px;
  }
  .update-btn {
    width: 100%;
    background: #204d48;
    border-radius: 5px;
    height: 30px;
    margin-top: 15px;
    color: whitesmoke;
  }
`;
function Adminproduct() {
  return (
    <Decoration>
      <form className="admin-update">
        <input type="text" placeholder="Specific Product description" />
        <input type="text" placeholder="Specific Product price" />
        <input type="text" placeholder="Specific Product stock" />
        <button className="update-btn">Updated</button>
      </form>
    </Decoration>
  );
}

export default Adminproduct;
