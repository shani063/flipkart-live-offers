import { useContext } from 'react';
import { useSelector } from 'react-redux';

import {Badge, Box, Button, Typography, styled } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


import { DataContext } from '../../context/DataProvider';
import Profile from './Profile';
import { Link } from 'react-router-dom';


const Wrapper = styled(Box)(({theme}) =>({
   display:'flex',
   margin: '0 3% 0 auto',
   alignItems: 'center',

   '& > *':
   {
      marginLeft: '40px !important',
      fontSize: 16,
      alignItems: 'center'
   },
   
}));

const Container = styled(Link)(({theme})=> ({
    display: 'flex',
    textDecoration: 'none',
    color: 'inherit',
}));

const LoginButton = styled(Button)`
     color: #2874f0;
     background: #fff;
     text-transform: none;
     padding: 5px 40px;
     border-radius: 2px;
     box-shadow: none;
     font-weight: 600;
     height: 30px;
     
`;

const CustomButtons = () =>
{

    const {setLoginDialog} = useContext(DataContext);

    const {account, setAccount} = useContext(DataContext);

    const { cartItems } = useSelector(state => state.cart);

    const openDialog = () =>{
       setLoginDialog(true);
    }

    return(
         <Wrapper>
            {
               account ? <Profile account = {account} setAccount = {setAccount}/> : 
               <LoginButton variant='contianed' onClick={()=> openDialog()}>Login</LoginButton>
            }
            <Typography style={{width: 135}}>Become a Seller</Typography>
            <Typography>More</Typography>

            <Container to="/cart">
               <Badge badgeContent={cartItems?.length} color='secondary'><ShoppingCartIcon/></Badge>
                <Typography style={{marginLeft: 10,}}>Cart</Typography>
            </Container>
         </Wrapper>
    )
}

export default CustomButtons