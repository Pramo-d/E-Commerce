import React, { useState } from "react";

const Product = () => {
  const [productID, setProductID] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [DataList, setDataList] = useState([]);

  const submitHandler = (event) => {
    event.preventDefault();

    const Data = { productID, sellingPrice, productName, productCategory };
    console.log(Data);
    setDataList((prevList) => [...prevList, Data]);

    setProductID("");
    setSellingPrice("");
    setProductName("");
  };
  const productIDHandler = (event) => {
    setProductID(event.target.value);
  };
  const sellingPriceHandler = (event) => {
    setSellingPrice(event.target.value);
  };
  const productNameHandler = (event) => {
    setProductName(event.target.value);
  };
  const productCategoryHandler = (event) => {
    setProductCategory(event.target.value);
  };

  const handleDelete = (index) => {
    setDataList((prevList) => {
      const updatedList = [...prevList];
      updatedList.splice(index, 1);
      return updatedList;
    });
  };
  // var val = 0;
  // const amount = DataList.map((item) => {
  //   val += parseInt(item.sellingPrice);
  //   console.log(val);
  //   return val;
  // });

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>Product ID</label>
          <input type="number" value={productID} onChange={productIDHandler} />

          <label>Selling Price</label>
          <input
            type="number"
            value={sellingPrice}
            onChange={sellingPriceHandler}
          />

          <label>Product Name</label>
          <input
            type="text"
            value={productName}
            onChange={productNameHandler}
          />

          <label>Choose a Category</label>
          <select   onChange={productCategoryHandler}>
            <option id="Electronics" value={productCategory} >Electronics </option>
            <option id="Food"  >Food </option>
            <option  id="SkinCare">SkinCare</option>
          </select>
          <button type="submit">Add Product</button>
        </div>
      </form>

      <h3>Products:</h3>
      
      <h4 id="Electronics">
        Electronics Items
       
        <ul>
        {DataList.map((Data, index) => (
          <li key={index}>
            <p>
              {" "}
              {Data.sellingPrice} {Data.productCategory} {Data.productName}
            </p>
            <button onClick={handleDelete}>Delete Product</button>
          </li>
        ))}
      </ul>

      </h4>

      <h4 id="Food">
        Food Items
        <ul>
        {DataList.map((Data, index) => (
          <li key={index}>
            <p>
              {" "}
              {Data.sellingPrice} {Data.productCategory} {Data.productName}
            </p>
            <button onClick={handleDelete}>Delete Product</button>
          </li>
        ))}
      </ul>
        </h4>
      <h4 id="SkinCare">
        SkinCare Items
        <ul>
        {DataList.map((Data, index) => (
          <li key={index}>
            <p>
              {" "}
              {Data.sellingPrice} {Data.productCategory} {Data.productName}
            </p>
            <button onClick={handleDelete}>Delete Product</button>
          </li>
        ))}
      </ul>
        </h4>
     
      {/* <h4>Total Value Worth of Products:{amount}</h4> */}
    </div>
  );
};

export default Product;

 