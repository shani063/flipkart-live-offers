import { Box , Typography, styled} from "@mui/material";

const Component = styled(Box)(({theme})=> ({
   width: '90%',
   background: '#fff',
   [(theme.breakpoints.down('lg'))]:{
      width: '100%',
   }
}));

const Header = styled(Box)`
   padding: 15px 25px;
   border-bottom: 1px solid #e4e7ed;
   & > p{
     color: #878787;
     font-size: 18px;
   }
`;

const Bill = styled(Box)`
    padding: 20px 25px;
`;

const Row = styled(Box)`
   display: flex;
   padding-bottom: 20px;
   justify-content: space-between;
   & > p {
     font-size: 18px;
   }
`;

const Total = styled(Box)`
    display: flex;
    justify-content: space-between;
    padding-top: 15px;
    & > p {
        font-size: 20px;
      }
`;

const Slip = ({price,count, discount}) =>{
    return(
       <Component>
        <Header>
            <Typography>PRICE DETAILS</Typography>
        </Header>
        <Bill>
           <Row><Typography>Price ({count} items)</Typography><Typography> ₹{price - discount}</Typography></Row>
           <Row><Typography>Delivery Charges</Typography><Typography>₹40</Typography></Row>
           <hr style={{borderStyle: 'dashed', color: '#e4e7ed', borderWidth: '0.5px'}} />
           <Total><Typography>Amount Payable</Typography><Typography>₹{(price - discount) + 40}</Typography></Total>
        </Bill>   
       </Component>
    )
}

export default Slip;
