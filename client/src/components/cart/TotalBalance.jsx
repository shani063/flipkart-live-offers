import { Box, Typography, styled} from "@mui/material";
import { useState, useEffect} from "react";

const Header = styled(Box)`
   padding: 15px 24px;
   background: #fff;
   border-bottom: 1px solid #f0f0f0;
`;

const Heading = styled(Typography)`
   color: #878787;
`;

const Container = styled(Box)`
   padding: 0 24px;
   background: #fff;
   & > p {
      padding-top: 20px;
      font-size: 14px;
   }
`;

const Price = styled(Box)`
   float: right;
`;

const Discount = styled(Typography)`
   color: green;
   padding-bottom: 10px;
   font-weight: 500;
`;

const TotalBalance = ({cartItems}) =>{

    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0);

    useEffect(()=> {
        totalAmount();
    }, [cartItems])

    const totalAmount = () => {
        let price = 0, discount = 0;
        cartItems.map(item =>{
            price += item.price.mrp;
            discount += (item.price.mrp - item.price.cost);
        });
        setPrice(price);
        setDiscount(discount);
    }

    return(
        <Box>
            <Header>
               <Heading>PRICE DETAILS</Heading>
            </Header>
            <Container>
                <Typography>Price ({cartItems?.length} item)
                   <Price component="span">₹{price}</Price>
                </Typography>

                <Typography>Discount
                   <Price component="span">-₹{discount}</Price>
                </Typography>

                <Typography style={{paddingBottom: 20}}>Delivery Charges
                   <Price component="span">₹40</Price>
                </Typography>

                <Typography style={{fontSize: 18, paddingBottom: 10, fontWeight: 600, borderTop: '1px solid #f0f0f0'}}>Total Amount
                   <Price component="span">₹{price - discount + 40}</Price>
                </Typography>
                <Discount>You will save ₹{discount - 40} on this order</Discount>
            </Container>
        </Box>
    )
}

export default TotalBalance;