import { useState } from "react";

import { Box, Button, styled } from "@mui/material";
import {ShoppingCart as Cart, FlashOn as Flash } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/actions/cartActions";
import { buyProduct } from "../../redux/actions/productActions";
import { payUsingPaytm } from "../../service/api";
import { post } from "../../utils/paytm";
import axios from "axios";

import { useDispatch } from "react-redux";

const LeftContainer = styled(Box)(({theme}) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('lg')]:{
        padding: '20px 40px',
    }
}));

const Image = styled('img')({
    width: '95%',
    padding: '15px',
})

const StyledButton = styled(Button)(({theme}) =>({
   width: '48%',
   height: 50,
   borderRadius: 2,
   marginTop: 20,
   [theme.breakpoints.down('sm')]:{
      width: '100%'
   }
}));


const ActionItem = ({product}) =>{

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);


    const { id } = product; 

    const addItemToCart = () => {
         dispatch(addToCart(id, quantity));
         navigate('/cart');
    }

    const buyNow = async ()  => {
        dispatch(buyProduct([product]));
        navigate('/payment');
        // let response = await payUsingPaytm({amount: 500, email: 'munzircnr710@gmail.com'});
        // let information = {
        //     action: 'https://securegw-stage.paytm.in/order/process',
        //     params: response,
        // }
        // console.log(response);
        // post(information);
        // redirectToPayment(information);
    }

    // const redirectToPayment = async ({ action, params }) => {
    //     try {
    //       const {data} = await axios.post(action, params);

          
    //     } catch (error) {
    //       console.error('Error fetching HTML:', error);
    //     }
    // };

    return (
        <LeftContainer>
            <Box style={{ padding: '15px 20px', border: '1px solid #f0f0f0',}}>
               <Image src={product.detailUrl}  alt="image" />
            </Box>
            <StyledButton variant="contained"
                          style = {{marginRight: '4%', backgroundColor: '#ff9f00'}}
                          onClick={()=> addItemToCart()}
                          ><Cart />Add to Cart</StyledButton>
            <StyledButton variant="contained"
             style = {{backgroundColor: '#fb541b'}}
             onClick={()=> buyNow()}>
             <Flash />Buy Now</StyledButton>
        </LeftContainer>
    )
}

export default ActionItem;