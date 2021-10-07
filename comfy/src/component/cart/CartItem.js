// import axios from '../../config/axios';
import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { OrderContext } from '../../contexts/orderContext';
function CartItem({ item, setCartLists, cartLists, setCalPrice, calPrice }) {
  console.log(item);
  const { checkOutItems, setCheckOutItems } = useContext(OrderContext);
  const history = useHistory();
  const handleSelectedItem = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setCheckOutItems((cur) => [...cur, +value]);
      setCalPrice((cur) => [...cur, +(+item.price).toFixed(2)]);
    } else {
      const result = checkOutItems.filter((x) => x !== +value);
      const idx = calPrice.findIndex((x) => x === +item.price);
      setCheckOutItems(result);
      if (idx === -1) {
        const arrResult = calPrice.filter((x) => x !== +item.price);
        const arrResult1 = arrResult.map((x) => x);
        setCalPrice(arrResult1);
      } else {
        calPrice.splice(idx, 1);
        setCalPrice(calPrice);
      }
    }
  };

  const handleClickRemove = async (id) => {
    try {
      console.log(calPrice);
      const resultItem = cartLists.filter((x) => x.id !== +id);
      const result = checkOutItems.filter((x) => x !== +id);
      const idx = calPrice.findIndex((x) => x === item.price);
      setCartLists(resultItem);
      setCheckOutItems(result);
      if (idx === -1) {
        const arrResult = calPrice.filter((x) => x !== +item.price);
        setCalPrice(arrResult);
      } else {
        const cloneCalPrice = [...calPrice];
        cloneCalPrice.splice(idx, 1);
        setCalPrice(cloneCalPrice);
      }

      // await axios.delete(`/carts/${item.id}`);
    } catch (err) {
      console.log(err);
    }
  };

  const productOption = `${item.Sku.process}  ${item.roast}  roast ${item.grind} ${item.weight} grams`;
  const handleClickToProduct = (e) => {
    try {
      e.preventDefault();
      history.push(`/editcart/${item.Sku.Product.id}/${item.id}`);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <tr>
      <td>
        <input
          type="checkbox"
          name="cartItem"
          onChange={handleSelectedItem}
          value={item.id}
        />
      </td>

      <td>
        <div className="cart-info">
          <img className="img-info" src={item.Sku.Product.imageUrl} alt="" />
          <div className="info-details">
            <p className="info-name">{item.Sku.Product.name}</p>
            <p className="info-choice">{productOption}</p>
            <p className="info-price">Weight : {item.weight} grams</p>
            <div className="btn-rmv-edt">
              <p
                className="btn-remove"
                onClick={() => handleClickRemove(item.id)}
                style={{ cursor: 'pointer' }}
              >
                Remove
              </p>
              <Link
                to={'/localproducts/productname'}
                className="btn-edit"
                onClick={handleClickToProduct}
              >
                Edit
              </Link>
            </div>
          </div>
        </div>
      </td>
      <td>
        <input type="text" value={item.amount} disabled />
      </td>
      <td>{item.price} &#3647;</td>
    </tr>
  );
}

export default CartItem;
