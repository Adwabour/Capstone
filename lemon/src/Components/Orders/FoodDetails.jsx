import React, { useState, useContext } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { cartContextWrap } from "../Context/CartContext";

function FoodDetails() {
  const [qty, setqty] = useState(1);
  const [price, setprice] = useState(12);
  const { cart, setcart } = useContext(cartContextWrap);

  return (
    <div className="flex flex-col items-center p-10 gap-4">
      <div className="w-[18rem] h-[18rem] rounded-full  overflow-hidden object-cover">
        <img
          src="https://images.unsplash.com/photo-1521136828306-f7b6db30f4ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Food image"
          className="w-full h-full object-fit h-full object-cover "
        />
      </div>
      <div className="flex justify-between items-center w-full">
        <h2>Name of Food</h2>
        <p>${price}.00</p>
      </div>
      <div>
        <p className="text-sm text-gray-400 font-light">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
          incidunt assumenda, atque sequi aliquid laborum libero eveniet ex sint
          alias?
        </p>
      </div>

      <div className="flex justify-between items-center w-full mt-6">
        <div className="flex gap-3 items-center">
          <p htmlFor="qty" className="font-bold text-md">
            Qty
          </p>
          <div className="flex flex-col items-center justify-between relative">
            <KeyboardArrowUpIcon
              className="top-[-10px] absolute text-gray-600 cursor-pointer"
              onClick={() => {
                setqty(qty + 1);
              }}
            />
            <p className="font-semibold text-[2rem] text-green-400">{qty}</p>
            <KeyboardArrowDownIcon
              className="bottom-[-10px] absolute text-gray-600 font-lg cursor-pointer"
              onClick={() => {
                if (qty > 1) {
                  setqty(qty - 1);
                }
              }}
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <p className="uppercase font-bold text-lg text-gray-300">Total</p>
          <p className="font-semibold">${price * qty}.00</p>
        </div>
      </div>

      <div className="w-full flex justify-between gap-5 items-center mt-8">
        <button
          className="w-1/2 bg-green-500 uppercase border-none rounded 
    cursor-pointer h-10 text-white font-semibold active:bg-green-800 hover:bg-green-400"
          onClick={() => {
            setcart(cart + qty);
          }}
        >
          Order
        </button>
        <button
          className="w-1/2 bg-gray-200 uppercase border-none rounded 
    cursor-pointer h-10 text-gray font-semibold active:bg-gray-300 hover:bg-gray-100"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default FoodDetails;
