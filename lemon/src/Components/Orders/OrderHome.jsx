import React,{useState} from "react";
import Clipboard from "./Clipboard";
import FoodDetails from "./FoodDetails";
import Tile from "./Tile";
import {Menu} from "./MockData";
function OrderHome() {
  const [detailDish, setdetailDish] = useState(false)
  return (
    <main className="w-full flex h-[90%]">
      <section className="w-1/2 flex flex-col justify-center items-center  h-full">
        <FoodDetails values={detailDish}/>
      </section>
      <section className="w-full p-5 bg-gray-50 flex flex-col gap-1 z-50 overflow-hidden">
        <h2 className="font-semibold text-gray-500 text-xl mb-2">Available in the kitchen</h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 w-full gap-5 h-full overflow-y-scroll">
          {Menu.map((dish)=>{return(
            <Tile key={dish.id} item={dish} setdetailDish={setdetailDish}/>
          )})}

          {/* <Clipboard/> */}
        </div>
      </section>
    </main>
  );
}

export default OrderHome;
