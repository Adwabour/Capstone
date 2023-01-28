import React, { useContext, useEffect, useState } from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CartContext, { cartContextWrap } from "../../Context/CartContext";
import { motion } from "framer-motion";

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
  // animate the badge when the number changes with framermotion
  useEffect(() => {
    console.log(cart);
    const count = cart.map((entries) => {
      if (entries.orders) {
        return entries.orders;
      }
    });
    const ss = count.reduce((a, b) => a + b, 0);
    if (ss) {
      setqty(ss);
    }
  }, [cart]);

  useEffect(() => {}, [qty]);

  return (
    <IconButton aria-label="cart">
      <motion.div animate={{ scale: 1 }}>
        <StyledBadge badgeContent={qty - 1} color="secondary">
          <ShoppingCartOutlinedIcon />
        </StyledBadge>
      </motion.div>
    </IconButton>
  );
}

export default Cart;
