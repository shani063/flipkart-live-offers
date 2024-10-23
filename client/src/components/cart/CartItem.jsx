import { Box, Typography,Button, styled } from "@mui/material";
import { useDispatch } from "react-redux";


import { addEllipsis } from "../../utils/common-utils";
import GroupedButton from "./ButtonGroup";
import { removeFromCart } from "../../redux/actions/cartActions";


const Component = styled(Box)(({theme})=> ({
    borderTop: '1px solid #f0f0f0',
    display: 'flex',
    background: '#fff',
    padding: 10,
    [theme.breakpoints.down('sm')]:{
        display:'block',
        borderTop: '2px solid #f0f0f0',
    }
}));

const LeftComponent = styled(Box)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    margin: 20,
    [theme.breakpoints.down('sm')]:
    {
        alignItems:'center'
    }
}));

const SmallText =styled(Typography)`
    color: #878787; 
    font-size: 14px;
    margin-top: 10px;
`;

const Remove = styled(Button)`
    margin-top: 20px;
    font-size: 16px;
    color: #000;
    font-weight: 600;
`;

const CartItem = ({ item }) =>{

      const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

      const dispatch = useDispatch();

      const removeItemFromCart = (id) =>{
         dispatch(removeFromCart(id));
      }


      return(
        <Component>
            <LeftComponent>
              <img src={item.url} alt="product" style={{height: 120, width: 120}}/>
              <GroupedButton />
            </LeftComponent>
            <Box m={'20px'}>
               <Typography>{addEllipsis(item.title.longTitle)}</Typography>
               <SmallText>Seller:RetailNet
                  <Box component="span"><img src={fassured} alt="fassured" style={{width: 50, marginLeft: 10}} /></Box>
                </SmallText>
                <Typography style={{margin: '20px 0'}}>
                    <Box component="span" style={{fontSize: 18,fontWeight: 600}}>₹{item.price.cost}</Box>&nbsp;&nbsp;
                    <Box component="span" style={{color: '#878787'}}><strike>₹{item.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                    <Box component="span" style={{color: '#388E3C'}}>{item.price.discount}</Box>
                </Typography>
                <Remove onClick={()=> removeItemFromCart(item.id)}>Remove</Remove>
            </Box>
        </Component>
      )
}

export default CartItem;