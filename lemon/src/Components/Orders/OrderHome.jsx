import React from "react";
import FoodDetails from "./FoodDetails";
import Tile from "./Tile";

function OrderHome() {
  return (
    <container className="w-full flex h-[90%]">
      <section className="w-1/2 flex flex-col justify-center items-center  h-full">
        <FoodDetails />
      </section>
      <section className="w-full p-5 bg-gray-50 flex flex-col gap-1">
        <h2>Available in the kitchen</h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 w-full gap-5">
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
        </div>
      </section>
    </container>
  );
}

export default OrderHome;
