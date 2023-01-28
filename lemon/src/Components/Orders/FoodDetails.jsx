import React, { useState, useContext, useEffect } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { cartContextWrap } from "../Context/CartContext";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import * as animationData from "../Lotties/cooking.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function FoodDetails({ values }) {
  const [qty, setqty] = useState(1);
  const [price, setprice] = useState(12);
  const [counter, setcounter] = useState(0);
  const { cart, setcart } = useContext(cartContextWrap);

  useEffect(() => {
    setqty(1);
    setcounter(0);
  }, [values]);

  return (
    <>
      {!values ? (
        <div className="flex flex-col gap-5 justify-center items-center">
          <Lottie options={defaultOptions} />
          <h2 className="text-4xl text-gray-300 font-bold text-center">
            Ready <br />
            for your <span className="text-gray-600">Order</span>
          </h2>
          <p className="text-light">Check out the menu and make your order</p>
        </div>
      ) : (
        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center p-10 gap-4 -z-1 lg:p-20 hidden md:flex"
        >
          <motion.div
            animate={{
              borderRadius: ["20%", "100%"],
            }}
            transition={{ duration: 1 }}
            className="w-[18rem] h-[18rem] rounded-full  overflow-hidden object-cover"
          >
            <img
              src={values.Image}
              alt="Food"
              className="w-full h-full object-fit object-cover "
            />
          </motion.div>
          <div className="flex justify-between items-center w-full">
            <h2 className="font-bold">{values.Name}</h2>
            <p>GHS {values.price}.00</p>
          </div>
          <div>
            <p className="text-sm text-gray-400 font-light">
              {values.description}
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

                <p className="font-semibold text-[2rem] text-black-400">
                  {qty}
                </p>
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
              <p className="font-semibold">GHS {values.price * qty}.00</p>
            </div>
          </div>

          <div className="w-full flex justify-center items-center h-2">
            {counter ? (
              <p className="text-[10px] text-gray-500 font-light">
                You have ordered{" "}
                <span className="font-semibold">
                  {counter} {counter > 1 ? "plates" : "plate"}
                </span>{" "}
              </p>
            ) : null}
          </div>

          <div className="w-full flex justify-between gap-5 items-center">
            <motion.button
              className="w-1/2 bg-black uppercase border-none rounded 
    cursor-pointer h-10 text-white font-semibold active:bg-green-800 hover:bg-green-400"
              onClick={() => {
                setcart([...cart, { orders: qty, details: values }]);
                setcounter(counter + qty);
              }}
            >
              Order
            </motion.button>
            <button
              className="w-1/2 bg-gray-200 uppercase border-none rounded 
    cursor-pointer h-10 text-gray font-semibold active:bg-gray-300 hover:bg-gray-100"
            >
              Cancel
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}

export default FoodDetails;
