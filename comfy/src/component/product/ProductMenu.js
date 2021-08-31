import React from 'react';
import { Link } from 'react-router-dom';
function ProductMenu() {
  return (
    <div className="second-nav">
      <ul className="nav-product">
        <li>
          <Link to={'/allproduct'} className="allproduct">
            All Product
          </Link>
        </li>
        <li>
          <Link to={'/localproducts'} className="localproduct">
            Local Coffee Bean
          </Link>
        </li>
        <li>
          <Link to={'/importproducts'} className="importedproduct">
            Imported Coffee Bean
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default ProductMenu;
