import React, { useContext, useEffect, useState } from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CartContext, { cartContextWrap } from "../../Context/CartContext";
import { motion } from "framer-motion";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuItemCart from "./MenuItemCart";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

function Cart() {
  const { cart } = useContext(cartContextWrap);
  const [qty, setqty] = useState(0);
  const [cartValue, setcartValue] = useState([{}]);
  const [totalPrice, settotalPrice] = useState(0);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // animate the badge when the number changes with framermotion
  useEffect(() => {
    console.log(cart);
    const count = cart.map((entries) => {
      if (entries.orders) {
        return entries.orders;
      }
    });
    const price = cart.map((entries) => {
      if (entries.details != "") {
        const cals = entries.details.price * entries.orders;
        return cals;
      }
      return 0;
    });
    console.log("price:", price);
    const totalprice = price.reduce((a, b) => a + b, 0);
    settotalPrice(totalprice);
    const mainCartValue = cart.filter((entries) => entries.details);
    setcartValue(mainCartValue);
    const ss = count.reduce((a, b) => a + b, 0);
    if (ss) {
      setqty(ss);
    }
  }, [cart]);

  useEffect(() => {}, [qty, cartValue, totalPrice]);

  return (
    <>
      <IconButton
        aria-label="cart"
        onClick={handleClick}
        className="w-[35px] h-[35px]"
      >
        <motion.div animate={{ scale: 1 }}>
          <StyledBadge badgeContent={qty - 1} color="secondary">
            <ShoppingCartOutlinedIcon />
          </StyledBadge>
        </motion.div>
      </IconButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        className="min-w-[20rem]"
      >
        {cartValue.map((item) => {
          if (item.details) {
            return (
              <MenuItemCart
                key={item.details.id}
                item={item.details}
                orders={item.orders}
              />
            );
          }
        })}

        <div className="flex justify-between px-4 py-2">
          <p className="uppercase font-semibold text-gray-300">Total</p>
          <p className="font-bold">GHS {totalPrice}.00</p>
        </div>
        <div className="w-full flex justify-end px-2">
          <button className="text-sm hover:bg-gray-800 bg-gray-600 p-2 rounded-md text-white">
            Checkout
          </button>
        </div>
      </Menu>
    </>
  );
}

export default Cart;
