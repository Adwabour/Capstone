import React from "react";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import { IconButton, Tooltip } from "@mui/material";

function Tile({ item, setdetailDish }) {
  return (
    <article className="bg-white  relative rounded w-full p-4 flex flex-col items-center gap-2 shadow-sm">
      <div className="w-full flex justify-center items-center">
        <img
          src={item.Image}
          alt="food"
          className="w-[120px] h-[120px] rounded-full object-cover border-solid-white shadow-sm"
          lazy
        />
      </div>
      <p className="w-full text-center font-semibold text-gray-600">
        {item.Name}
      </p>
      <p className="text-xs font-light text-gray-400 truncate text-ellipsis w-full">
        {item.description}
      </p>
      <p className="text-gray-500">GHS {item.price}.00</p>
      <Tooltip title="Order food">
        <IconButton className="group icon" onClick={() => setdetailDish(item)}>
          <ControlPointOutlinedIcon className="group-[.icon]:hover:text-green-500 text-gray-200" />
        </IconButton>
      </Tooltip>
    </article>
  );
}

export default Tile;
