import React from "react";
import Cart from "./Cart";


function Headers() {
  return (
    <div className="h-[10%] flex justify-between pr-4 items-center  border-solid border-b-[.5px] border-t-0 border-x-0 border-gray-100 w-full">
      <div className="w-[20%] flex items-center">
        <img
          src="https://img.freepik.com/premium-vector/bow-tie-tuxedo-utensil-restaurant-logo_57043-22.jpg?w=1800"
          alt=""
          className="w-[40%] h-[80%]"
        />
        <p className="font-bold text-2xl">Little Lemon</p>
      </div>
      <div className="flex items-center gap-2">
        <nav>
          <ul className="flex gap-3 list-none">
            <li className="text-sm text-gray-500 hover:text-green-600 cursor-pointer">Home</li>
            <li className="text-sm text-gray-500 hover:text-green-600 cursor-pointer">About Us</li>
            <li className="text-sm text-gray-500 hover:text-green-600 cursor-pointer">Menu</li>
            <li className="text-sm text-gray-500 hover:text-green-600 cursor-pointer">Reservations</li>
            <li className="text-sm text-gray-500 hover:text-green-600 cursor-pointer">Profile</li>
          </ul>
        </nav>
        <Cart/>
      </div>
    </div>
  );
}

export default Headers;



