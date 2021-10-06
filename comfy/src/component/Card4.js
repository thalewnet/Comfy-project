import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';

const Decoration = styled.div`
  .card-container {
    width: 320px;
    overflow: hidden;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    transition: all 0.3s ease;
    position: relative;
    margin-bottom: 20px;
  }

  .card-container:hover {
    transform: translateY(-5px);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
  }

  .image-container img {
    overflow: hidden;
    height: 390px;
    width: 100%;
  }

  .card-title {
    position: absolute;
    width: 100%;
    height: 40px;
    bottom: 0;
    background: #ffffff;
    align-items: center;
  }

  .card-text {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 40px;
    padding-left: 10px;
    font-size: 14px;
    font-weight: 400;
    color: black;
    text-decoration: none;
  }

  @media (max-width: 1330px) {
    .card {
      width: 280px;
      height: 340px;
    }
  }
  @media (max-width: 1138px) {
    .card {
      width: 260px;
      height: 320px;
    }
  }

  @media (max-width: 1055px) {
    .card {
      width: 240px;
      height: 300px;
    }
  }
`;
function Card4({ item }) {
  const { name, imageUrl, id } = item;
  const history = useHistory();
  const handleClickToProduct = (e) => {
    try {
      e.preventDefault();

      history.push(`/productname/${id}`);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Decoration>
      <div className="card-container">
        <div className="image-container">
          <Link
            to={'/localproducts/productname'}
            onClick={handleClickToProduct}
          >
            <img className="card" src={imageUrl} alt="" />
          </Link>
        </div>
        <div className="card-title">
          <Link
            to={'/localproducts/productname'}
            className="card-text "
            onClick={handleClickToProduct}
          >
            {name}
          </Link>
        </div>
      </div>
    </Decoration>
  );
}

export default Card4;
