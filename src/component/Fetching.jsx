import React, { useEffect, useState } from "react";
import "./Fetching.css";
const Fetching = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    let data = await fetch("https://fakestoreapi.com/products");
    let result = await data.json();
    console.log(result);
    setData(result);
  }
  return (
    <div className="container">
      {data.map((da) => (
        <div key={da.id} className="sub-container">
          <img src={da.image} alt="" />
          <h1>{da.title}</h1>
          <div className="context">
            <p>${da.price}</p>
            <p>{da.category}</p>
          </div>
          <button className="btn">Add To Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Fetching;
