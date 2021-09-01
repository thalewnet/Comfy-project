import React from 'react';

function InputTextInfo({ title, type, id, text }) {
  return (
    <div className="form">
      <label htmlFor={id}>{title}</label>
      <input type={type} id={id} placeholder={text} />
    </div>
  );
}

export default InputTextInfo;
