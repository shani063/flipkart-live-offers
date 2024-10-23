import { useSelector, useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import { buyProduct } from "../../redux/actions/productActions";

import {Box,Typography, Grid, styled, Button} from "@mui/material";

//components
import CartItem from "./CartItem";
import TotalBalance from "./TotalBalance";
import EmptyCart from "./EmptyCart";

const Container = styled(Grid)(({theme}) => ({
    padding: '2% 7%',
    display: 'flex',
    [theme.breakpoints.down('sm')]:{
        padding: '5% 5%',
    }
}));

const Header = styled(Box)`
    padding: 15px  24px;
    background: #fff;
    padding-left: 30px;
`;

const Footer = styled(Box)`
   background: #fff;
   padding: 16px 22px;
   box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
   border-top: 1px solid #f0f0f0;
   display: flex;
`;

const StyledButton = styled(Button)(({theme}) => ({
   marginLeft: 'auto',
   background: '#fb641b',
   color: '#fff',
   padding: '1% 12%',
   borderRadius: '2px',
   [theme.breakpoints.down('lg')]:{
      margin: 'auto',
   },
   [theme.breakpoints.down('sm')]:{
        margin: 'auto',
     },
}));

const LeftComponent = styled(Grid)(({theme}) => ({
   paddingRight: 15,
   
   [theme.breakpoints.down('md')]:{
       paddingRight: 0,
       paddingBottom: 15,
   }
}));

const Cart = () => {

    const { cartItems } = useSelector(state => state.cart);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const placeOrder = () =>{
        dispatch(buyProduct(cartItems));
        navigate('/payment');
    }

    return(
        <> 
            { cartItems.length ?
                    <Container container>
                        <LeftComponent item lg={8} md={8} sm={12} xs={12}>
                            <Header>
                                <Typography>My Cart({cartItems.length})</Typography>
                            </Header>
                            {
                                cartItems.map(item => (
                                    <CartItem item= {item}/>
                                ))
                            }
                            <Footer>
                                <StyledButton variant="contained" onClick={()=> placeOrder()}>Place Order</StyledButton>
                            </Footer>
                        </LeftComponent>

                        <Grid item lg={4} md={4} sm={12} xs={12}>
                              <TotalBalance cartItems={ cartItems } />
                        </Grid>
                    </Container>

               :<EmptyCart />
            }
        </> 
    )
}

export default Cart;