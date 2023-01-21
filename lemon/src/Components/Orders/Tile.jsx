import React from "react";

function Tile() {
  return (
    <article className="bg-white rounded w-full p-4 flex flex-col items-center gap-2 shadow-sm">
      <img
        src="https://images.unsplash.com/photo-1654155291974-31c746662d34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80"
        alt="food"
        className="w-full"
      />
      <div className="flex justify-between items-center w-full">
        <p>Name of food</p>
        <p>$12.00</p>
      </div>
      <div>
        <button
          className="w-full bg-[#8bc34a] uppercase border-none rounded 
  cursor-pointer h-7 text-white active:[#6f9e39] hover:[#97cf56]"
  onClick={()=>console.log('clicked me')}
        >
          Add
        </button>
      </div>
    </article>
  );
}

export default Tile;
