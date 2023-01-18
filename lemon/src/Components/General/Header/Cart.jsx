import React,{useContext} from 'react'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CartContext, { cartContextWrap } from '../../Context/CartContext';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

function Cart() {
    const {cart} = useContext(cartContextWrap)
    console.log('Cart; ',cart)

  return (
    <IconButton aria-label="cart">
    <StyledBadge badgeContent={cart} color="secondary">
      <ShoppingCartOutlinedIcon />
    </StyledBadge>
  </IconButton>
  )
}

export default Cart