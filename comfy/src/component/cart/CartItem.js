import React from 'react';
import { Link } from 'react-router-dom';
function cartItem({ info }) {
  const { img, name, choice, price } = info;
  return (
    <tr>
      <td>
        <div className="cart-info">
          <img className="img-info" src={img} alt="" />
          <div className="info-details">
            <p className="info-name">{name}</p>
            <p className="info-choice">{choice}</p>
            <p className="info-price">Price : {price} &#3647;</p>
            <div className="btn-rmv-edt">
              <p className="btn-remove">Remove</p>
              <Link to={'/localproducts/productname'} className="btn-edit">
                Edit
              </Link>
            </div>
          </div>
        </div>
      </td>
      <td>
        <input type="number" value="1" />
      </td>
      <td>{price} &#3647;</td>
    </tr>
  );
}

export default cartItem;
