import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Path from '../component/Path';
import axios from '../config/axios';
import { faFileUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Decoration = styled.div`
  padding-top: 64px;

  .container {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: 80%;
  }
  .preview-image {
    width: 500px;
    height: 400px;
  }
  .product-input {
    margin: 0 auto;
    max-width: 500px;
    background-color: #f8f8f8;
    margin-left: 40px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 20px;
    width: 90%;
  }

  .controlinput {
    border: 1px solid black;
    border-radius: 5px;
    margin: 5px 0;
    padding: 10px;
  }

  .price-input {
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 12px;
    margin: 10px 0px;
    background: #c4c4c4;
    border: none;
    height: 30px;
  }

  .productname-input {
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    margin: 10px 0px;
    background: #c4c4c4;
    border: none;
    height: 40px;
  }
  .details-input {
    background: #c4c4c4;
    border: none;
    height: 80px;
    width: 100%;
  }
  .update-btn {
    width: 100%;
    background: #204d48;
    border-radius: 5px;
    height: 30px;
    margin-top: 15px;
    color: whitesmoke;
  }

  .btn-active {
    background: #228b22;
    color: white;
    margin-right: 5px;
    cursor: pointer;
  }

  .btn-active:hover {
    background: #3cb371;
  }

  .btn-inactive {
    background: #ff0033;
    color: white;
    margin-right: 5px;
    cursor: pointer;
  }

  .btn-inactive:hover {
    background: #ff6666;
  }

  .btn-edit {
    background: #ffcc00;
    color: white;
    margin-right: 5px;
    cursor: pointer;
  }

  .btn-edit:hover {
    background: #ffff33;
  }

  .upload-area {
    margin-top: 3px;
    border: 2px dashed #b29385;
    background: rgba(178, 147, 133, 0.2);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
    width: 500px;
    height: 100px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .upload-icon {
    margin-top: 5px;
    font-size: 40px;
    color: burlywood;
  }

  .text {
    font-size: 16px;
    font-weight: 500;
  }

  .upload-area .browse {
    margin-bottom: 5px;
    padding: 5px 15px;
    font-size: 12px;
    font-weight: 500;
    background: rgba(178, 147, 133, 0.1);
    border-radius: 10px;
    border: none;
    outline: none;
    color: black;
    cursor: pointer;
  }
  .process-active {
    color: black;
  }
  .process-inactive {
    color: lightgray;
  }
  @media (max-width: 1110px) {
    .container {
      flex-direction: column;
      justify-content: center;
      margin: 0 auto;
      width: 80%;
    }

    .col-right {
      max-width: 500px;
    }

    .product-choice {
      margin: 0;
      padding: 0;
      background: none;
      box-shadow: none;
    }

    h1 {
      margin: 0;
    }
    .btn-group {
      justify-content: flex-start;
    }

    .product-detail {
      padding-bottom: 10px;
      border-bottom: 1px solid black;
    }

    form {
      margin-left: 0px;
    }
  }
`;
function AdminCreateProduct() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(null);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const handleSelectImage = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(null);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };

  const [product, setProduct] = useState({
    name: '',
    type: '',
    description: '',
    process: ['Washed / Wet process', 'Natural / Dry process', 'Honey Process'],
    wetprice: '',
    dryprice: '',
    honeyprice: '',
    wetstatus: false,
    drystatus: false,
    honeystatus: false,
  });
  console.log(product);

  const handleChangeProduct = (e) => {
    setProduct((cur) => ({ ...cur, [e.target.name]: e.target.value }));
  };

  const handleSubmitProduct = async (e) => {
    try {
      console.log('Insubmit', product);
      e.preventDefault();
      const formData = new FormData();

      formData.append('name', product.name);
      formData.append('type', product.type);
      formData.append('description', product.description);
      formData.append('cloudinput', selectedFile); // ชื่อ key จะต้องตรงกับชื่อใน Middleware จะต้องตรงกับใน '' ของ upload.sigle('xxxxxxxx')
      formData.append('process', product.process);
      formData.append('price', [
        product.wetprice,
        product.dryprice,
        product.honeyprice,
      ]);
      formData.append('status', [
        product.wetstatus,
        product.drystatus,
        product.honeystatus,
      ]);
      //   for (var pair of formData.entries()) {
      //     console.log(pair[0] + ', ' + pair[1]);
      //   }
      const res = await axios.post('/products/create-product', formData);
      console.log('Front-End', res.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Decoration>
      <Path />
      <form onSubmit={handleSubmitProduct}>
        <div className="container">
          <div className="col-left">
            {selectedFile && (
              <img className="preview-image" src={preview} alt="" />
            )}
            <div>
              <div className="upload-area">
                <div className="upload-icon">
                  <i>
                    <FontAwesomeIcon icon={faFileUpload} />
                  </i>
                </div>
                <label htmlFor="upload" className="browse">
                  Browse file
                </label>
                <input
                  type="file"
                  id="upload"
                  onChange={handleSelectImage}
                  hidden
                />
              </div>
            </div>
          </div>

          <div className="col-right">
            <div className="product-input">
              <div className="product-name">
                <h3>Product Name:</h3>
                <input
                  className="productname-input"
                  type="text"
                  name="name"
                  placeholder="Product name"
                  value={product.name}
                  onChange={handleChangeProduct}
                />
              </div>
              <h3>Product type:</h3>
              <input
                type="radio"
                id="local"
                name="type"
                value="local"
                onChange={handleChangeProduct}
              />
              <label htmlFor="local">Local product</label>
              <br />
              <input
                type="radio"
                id="import"
                name="type"
                value="import"
                onChange={handleChangeProduct}
              />
              <label htmlFor="import">Imported product</label>
              <br />

              <div className="processing">
                <h3>Coffee Process</h3>
                <div className="controlinput">
                  <label
                    className={`process-${
                      product.wetstatus ? 'active' : 'inactive'
                    }`}
                    htmlFor="wetprocess"
                  >
                    Washed / Wet process
                  </label>
                  <input
                    className="price-input"
                    type="text"
                    id="wetprocess"
                    name="wetprice"
                    placeholder="Enter price"
                    value={product.wetprice}
                    onChange={handleChangeProduct}
                    disabled={!product.wetstatus}
                  />
                  <button
                    className="btn-active"
                    onClick={() =>
                      setProduct((cur) => ({ ...cur, wetstatus: true }))
                    }
                  >
                    Active
                  </button>
                  <button
                    className="btn-inactive"
                    onClick={() =>
                      setProduct((cur) => ({ ...cur, wetstatus: false }))
                    }
                  >
                    Inactive
                  </button>
                  <button className="btn-edit">Edit</button>
                </div>
                <div className="controlinput">
                  <label
                    className={`process-${
                      product.drystatus ? 'active' : 'inactive'
                    }`}
                    htmlFor="dryprocess"
                  >
                    Natural/ Dry process
                  </label>
                  <input
                    className="price-input"
                    type="text"
                    id="dryprocess"
                    name="dryprice"
                    placeholder="Enter price"
                    value={product.dryprice}
                    onChange={handleChangeProduct}
                    disabled={!product.drystatus}
                  />
                  <button
                    className="btn-active"
                    onClick={() =>
                      setProduct((cur) => ({ ...cur, drystatus: true }))
                    }
                  >
                    Active
                  </button>
                  <button
                    className="btn-inactive"
                    onClick={() =>
                      setProduct((cur) => ({ ...cur, drystatus: false }))
                    }
                  >
                    Inactive
                  </button>
                  <button className="btn-edit">Edit</button>
                </div>

                <div className="controlinput">
                  <label
                    className={`process-${
                      product.honeystatus ? 'active' : 'inactive'
                    }`}
                    htmlFor="honeyprocess"
                  >
                    Honey process
                  </label>
                  <input
                    className="price-input"
                    type="text"
                    placeholder="Enter price"
                    id="honeyprocess"
                    name="honeyprice"
                    value={product.honeyprice}
                    onChange={handleChangeProduct}
                    disabled={!product.honeystatus}
                  />
                  <button
                    className="btn-active"
                    onClick={() =>
                      setProduct((cur) => ({ ...cur, honeystatus: true }))
                    }
                  >
                    Active
                  </button>
                  <button
                    className="btn-inactive"
                    onClick={() =>
                      setProduct((cur) => ({ ...cur, honeystatus: false }))
                    }
                  >
                    Inactive
                  </button>
                  <button className="btn-edit">Edit</button>
                </div>

                <h3>Product details</h3>
                <input
                  className="details-input"
                  type="text"
                  placeholder="Specific Product description"
                  name="description"
                  value={product.description}
                  onChange={handleChangeProduct}
                />
                <button className="update-btn">Create</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Decoration>
  );
}

export default AdminCreateProduct;
