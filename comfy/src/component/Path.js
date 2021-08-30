import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Decoration = styled.div`
  .pathbox {
    display: flex;
    margin: 0 auto;
    width: 80%;
    margin-bottom: 10px;
  }
  .path {
    display: flex;
    margin-top: 10px;
    .ul-path {
      display: flex;
      padding-left: 10px;
    }
    li {
      list-style-type: none;
    }

    li::before {
      content: '>';
    }

    li:first-child::before {
      content: '';
    }
    .path2,
    li {
      margin: 0;
      padding-left: 5px;
      font-size: 12px;
      font-weight: 700;
      box-sizing: border-box;
      text-decoration: none;
      color: black;
    }
  }

  /* .ul-path li a:hover{
       text-decoration: underline;
   } */
`;

function Path() {
  return (
    <Decoration>
      <div className="pathbox">
        <div className="path">
          <ul className="ul-path">
            <li>
              <Link to={'/homepage'} className="path2">
                Homepage
              </Link>
            </li>
            <li>
              <Link to={'/localproducts'} className="path2">
                Local Coffee Bean
              </Link>
            </li>
            <li>
              <Link to={'/localproducts/productname'} className="path2">
                Doi Mon Chong
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Decoration>
  );
}

export default Path;
