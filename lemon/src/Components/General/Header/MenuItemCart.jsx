import React from "react";


function MenuItemCart({item,orders}) {
  return (
    <div className="w-[20rem] flex justify-between p-3  border-b border-gray-200 cursor-pointer mx-1 group">
      <div className="flex gap-4 items-center">
        <div className="w-[40px] h-[40px] overflow-hidden rounded-full  flex items-center justify-center">
          <img src={item.Image} alt="" className="object-cover w-full h-full" />
        </div>
        <div>
          <p className="text-sm">{item.Name}</p>
          <p className="text-xs font-light text-gray-400">
            {orders} {orders > 1 ? "Plates" : "Plate"} Added
          </p>
        </div>
      </div>
      <div>
        <p className="text-sm group-hover:text-green-700">GHS {item.price * orders}.00</p>
      </div>
    </div>
  );
}

export default MenuItemCart;
