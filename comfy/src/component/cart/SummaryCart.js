import React from 'react';

function SummaryCart({ totalPrice }) {
  return (
    <div className="total-price">
      <table className="total-table">
        <tr>
          <td>Subtotal</td>
          <td>{totalPrice} &#3647;</td>
        </tr>
        <tr>
          <td>Discount</td>
          <td>0 &#3647;</td>
        </tr>
        <tr>
          <td>Shipping fee</td>
          <td>0 &#3647;</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>{totalPrice} &#3647;</td>
        </tr>
      </table>
    </div>
  );
}

export default SummaryCart;
