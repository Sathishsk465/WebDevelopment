import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Food_item.css";

function Food_items(props) {
  const { addToCart } = useCart();
  const [purchased, setPurchased] = useState(false);
  const [afterbtn, setAfterbtn] = useState(true);
  const [quantity, setQuantity] = useState(1);

  function addCart(item) {
    addToCart({ ...item, quantity });
    setPurchased(true);
    setAfterbtn(false);
    alert(item.name + " is added to your cart");
  }

  return (
    props.name && (
      <div className="flex mx-auto sm:inline-flex sm:m-5 text-center  justify-between">
        <div
          id={props.id}
          className="card p-8 border hover:border-4 border-green-700 shadow-2xl rounded-xl w-80 bg-white"
        >
          <img
            src={props.image}
            alt="meals"
            className="p-0 w-90 h-50 inline-grid rounded-lg hover:scale-110 transition duration-300"
          />
          <h2 className="text-center text-green-700 text-2xl font-semibold mt-0">
            {props.name}
          </h2>
          <p className="text-center mt-0">
            Restaurant name :<b>{props.hotel}</b>
          </p>

          <div className="inline-flex">
            <p className="text-center font-bold mb-0">₹{props.price}</p>
            <div className="quantity-container inline-flex gap-1">
              <button
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                className="border-1 border-green-700 hover:bg-green-700 hover:text-white px-2 rounded"
              >
                −
              </button>
              <div className="text-green-700">{quantity}</div>
              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="border-1 border-green-700 hover:bg-green-700 hover:text-white px-2 rounded"
              >
                +
              </button>
            </div>
          </div>

          <button
            onClick={() => addCart(props)}
            className={`w-full px-5 py-2.5 rounded-2xl text-xl ${
              purchased
                ? "bg-white text-black"
                : "bg-green-700 text-white hover:bg-green-800"
            }`}
          >
            {purchased ? "Added" : "Add to Cart"}
          </button>

          {!afterbtn && (
            <Link to="/cart">
              <button className="w-full bg-green-700 text-white px-5 py-2.5 rounded-2xl text-xl hover:bg-green-800">
                Go to Cart
              </button>
            </Link>
          )}
        </div>
      </div>
    )
  );
}
//npx json-server --watch data/foodData.json --port 3000 --static ./data
export default Food_items;
