import { useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import { DataContext } from '../../context/DataProvider';
import {AppBar,Badge, Toolbar,  Box, Typography, IconButton, Drawer, List, ListItem,Button, styled } from '@mui/material';
import Search from './Search';
import CustomButtons from './CustomButtons';
import Profile from './Profile';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { Menu } from '@mui/icons-material';

import { Link } from 'react-router-dom';
import LoginDialog from '../login/LoginDialog';



const StyledHeader = styled(AppBar)`
    background: #2874f0;
    height: 55px;
`
const Component = styled(Link)(({theme})=> ({
    marginLeft: '12%',
    lineHeight: 0,
    textDecoration: 'none',
    color: 'inherit',
    [(theme.breakpoints.down('md'))]:
    {
        marginLeft: '1%'
    }
}));

const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
`
const CustomButtonWrapper = styled(Box)(({theme}) =>({
    margin: '0 9% 0 auto',
    [theme.breakpoints.down('xl')]:{
        margin: '0 0 0 auto',
    },
    [theme.breakpoints.down('lg')]:{
        display:'none',
    }
}));
    

const PlusImage = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 4,
});

const MenuButton = styled(IconButton)(({theme}) =>({
    display: 'none',
    color: 'inherit',
    [theme.breakpoints.down('lg')]:{
        display: 'block',
    }
}))

const DrawerBox = styled(Box)`
    width: 200px;
`;

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

const Container = styled(Link)(({theme})=> ({
    display: 'flex',
    textDecoration: 'none',
    color: 'inherit',
}));


const Header = () => {

    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    const [open, setOpen] = useState(false);

    const { cartItems } = useSelector(state => state.cart);

    const handleOpen = () =>{
         setOpen(true);
    }

    const {loginDialog, setLoginDialog,account, setAccount} = useContext(DataContext);

    const handleClose = () =>{
         setOpen(false);
    }

    

    const list = () =>(
        <DrawerBox>
            <List>
                <ListItem onClick={()=>account ? setOpen(true) :handleClose }>
                    {
                    account ? <Profile account = {account} setAccount = {setAccount}/> : 
                    <LoginButton variant='contianed' onClick={()=> setLoginDialog(true)}>Login</LoginButton>
                    }
                </ListItem>
                <ListItem onClick={handleClose}>
                    <Typography>Become a Seller</Typography>
                </ListItem>
                <ListItem onClick={handleClose}>
                    <Typography>More</Typography>
                </ListItem>
                <ListItem onClick={handleClose}>
                    <Container to="/cart">
                       <Badge badgeContent={cartItems?.length} color='secondary'><ShoppingCartIcon/></Badge>
                    <Typography style={{marginLeft: 10,}}>Cart</Typography>
                </Container>
                </ListItem>
            </List>
        </DrawerBox>
    )

     return (
            <Box>
                <StyledHeader>
                    <Toolbar style={{minHeight: 55}}>
                        <MenuButton onClick={handleOpen}>
                            <Menu />
                        </MenuButton>
                        <Drawer anchor="left" open = {open} onClose={handleClose}>
                            {list()}
                        </Drawer>
                        {/* logo */}
                        <Component to='/'>
                            <img src={logoURL} alt='logo' style={{width: 75}}/>
                            <Box style={{display: 'flex'}}>
                                <SubHeading>Explore&nbsp;
                                    <Box component="span" style={{color: '#FFE500'}}>Plus</Box>
                                </SubHeading>
                                <PlusImage src={subURL} alt='sub-logo' />
                            </Box>
                        </Component>

                        {/* searchbar */}
                        <Search />
                        <CustomButtonWrapper>
                            <CustomButtons />
                        </CustomButtonWrapper>
                    </Toolbar>
                </StyledHeader>
                <LoginDialog open = {loginDialog} setOpen = {setOpen}/>
            </Box>
            
     );
}

export default Header;