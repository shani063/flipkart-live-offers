import { Box,Button,Grid,TextField, Typography,styled } from "@mui/material";
import RefreshIcon from '@mui/icons-material/Refresh';
import IconButton from '@mui/material/IconButton';
import { useSelector } from "react-redux";
import { useState, useEffect} from "react";
import Slip from "./Slip";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";

const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0, // Extra small devices (portrait phones, less than 600px)
        sm: 600, // Small devices (landscape phones, 600px and above)
        md: 960, // Medium devices (tablets, 960px and above)
        lg: 1350, // Large devices (desktops, 1280px and above)
        xl: 1920, // Extra large devices (large desktops, 1920px and above)
      },
    },
  });

const Container = styled(Grid)(({theme})=>({
    display: 'flex',
    padding:'2% 7%',
    width: '100%',
    [(theme.breakpoints.down('lg'))]:{
        display: 'block',
    },
    [(theme.breakpoints.down('md'))]:{
        padding:'2% 5%',
    },
    [(theme.breakpoints.down('sm'))]:{
        padding:'2% 3%',
    }
}));

const LeftComponent = styled(Box)`
    background: #fff;
    box-shadow: 0px 2px 5px 2px #e4e7ed;

`;

const Header = styled(Box)`
    padding: 15px  24px;
    background: #2874f0;
    color: #fff;
    padding-left: 30px;
    font-weight: 600;
`;

const RightComponent = styled(Grid)(({theme})=>({
   paddingLeft: 15,
   [(theme.breakpoints.down('lg'))]:{
      paddingLeft: 0,
      paddingTop: 15,
   }  
}));

const UPIOptions = styled(Box)`
    padding: 20px  24px;
    display: flex;
    align-items: center;
    gap: 15px;
`;


const UPIInputBox = styled(Box)(({theme})=>({
   border: '1px solid #2874f0',
   background: '#fff',
   marginTop: '2%',
   height: 50,
   width: '40%',
   display: 'flex',
   alignItems: 'center',
   gap: 2,
   [[theme.breakpoints.down('md')]]:
   {
      width: '50%'
   },
   [[theme.breakpoints.down('sm')]]:
   {
      width: '90%'
   }

}));


const UPIInput = styled('input')(({theme}) => ({
    height: '90%',
    width: '80%',
    border: 'none',
    outline: 'none',
    paddingLeft: 15,
    fontSize: 15,
}));

const StyledButton = styled(Button)(({theme})=> ({
    background: '#fb641b',
    color: '#fff',
    fontWeight: 600,
    borderRadius: 2,
    fontSize: 16,
    padding: '15px 70px', 
    margin: '5px 30px',
    [(theme.breakpoints.down('sm'))]:{
        padding: '10px 40px',
    }
}));

const StyledButtonTwo = styled(Button)(({theme})=> ({
    background: '#fb641b',
    color: '#fff',
    fontWeight: 600,
    borderRadius: 2,
    fontSize: 16,
    padding: '15px 83px', 
    marginTop: 10,
    [(theme.breakpoints.down('sm'))]:{
        padding: '10px 40px',
    }
}));

const UPISelection = styled(Box)`
   margin-top: 10px;
   display: flex;
   gap: 10px;
   align-items: center;
   cursor: pointer;
`;

const UPIBox = styled(Box)(({theme})=>({
    display: 'flex',
    gap: 20,
    paddingLeft: '40px',
    alignItems: 'center',
    [(theme.breakpoints.down('md'))]:{
        display: 'block',
    }
}));


const UPIPayButton = styled(Button)(({theme})=>({
    height: 50,
    padding: '0 70px',
    marginTop: '2%',
    borderRadius: 2,
    fontWeight: 600,
    fontSize: 16,
    [(theme.breakpoints.down('sm'))]:{
        padding: '0 50px'
    }
}));

const OptionsBox = styled(Box)`
    border-bottom: 1px solid #e4e7ed;
    cursor: pointer;
`;

const CardBox = styled(Box)`
    padding: 20px  24px;
    display: flex;
    align-items: center;
`;

const CardDrawer = styled(Box)`
    padding-left: 65px;
    padding-bottom: 30px;
`;

const CardNumberInput = styled(TextField)(({theme})=>({
    width: 320,
    '& > div':{
       borderRadius: 2,
    },
    [(theme.breakpoints.down('sm'))]:{
        width: 270,
    },
}));

const ValidityBox = styled(Box)(({theme})=>({
    marginTop: 15,
    display:'flex',
    alignItems: 'center',
    [(theme.breakpoints.down('sm'))]:{
        display: 'block',
    },
}));

const ValidThrough = styled(Box)(({theme})=>({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
   border: '1px solid #C4C4C4',
   padding: '8px 15px',
   width: 220,
   height: 40,
   borderRadius: 2,
   '& > div': {
     width: '50%',
     display: 'flex',
     justifyContent: 'space-between'
   },
   '& > span':
   {
      color: '#878787'
   },
   '& > div > select': {
     border: 'none',
     width: 50,
     height: 35,
     fontSize: 16,
     fontWeight: 600,
   },
   [(theme.breakpoints.down('md'))]:{
      width: 240
   }
}));

const CVVField = styled(TextField)(({theme})=> ({
    marginLeft: 20,
    width: 120,
    '& > div':{
        borderRadius: 2,
     },
     [(theme.breakpoints.down('sm'))]:{
        marginLeft: 0,
        marginTop: 20,
     }
}));


const CODBox = styled(Box)(({theme})=>({
     display: 'flex',
     flexDirection: 'row',
     paddingLeft: 65,
     paddingBottom: 30,
     [(theme.breakpoints.down('md'))]:
     {
        display: 'block',
     }
}));

const CaptchaView = styled(TextField)(({theme})=>({
    width: 200,
    '& > div':{
        borderRadius: 2,
        '& > input': {
            fontSize: 20,
            fontWeight: 1000,
            color: 'green',
            cursor: 'not-allowed'
        }
    }
}));

const CaptchaField = styled(TextField)(({theme})=>({
    marginLeft: 20,
    width: 230,
    '& > div':{
        fontSize: 20,
        fontWeight: 600,
        borderRadius: 2
     },
     [(theme.breakpoints.down('md'))]:{
        marginLeft: 0,
        marginTop: 20
    }
}));

const CODButton = styled(Button)(({theme})=>({
    padding: '10px 70px', 
    marginLeft: 20,
    background: '#fb641b',
    color: '#fff',
    fontWeight: 600,
    borderRadius: 2,
    fontSize: 16,
    [(theme.breakpoints.down('md'))]:{
        marginLeft: 0,
        marginTop: 20,
        padding: '15px 70px',
    }
}));


const PaymentForm = () =>{

    const { products } = useSelector(state => state.buy);

    const navigate = useNavigate();

    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0);

    useEffect(()=> {
        totalAmount();
    }, [products])

    const totalAmount = () => {
        let price = 0, discount = 0;
        products.map(item =>{
            price += item.price.mrp;
            discount += (item.price.mrp - item.price.cost);
        });
        setPrice(price);
        setDiscount(discount);
    }

    const [upiDrawer, setUpiDrawer] = useState(false);

    const [cardDrawer, setCardDrawer] = useState(false);

    const [codDrawer, setCODDrawer] = useState(false);

    const [phonePe , setPhonePe] = useState(false);

    const [upiIdOption, setUpiIdOption] = useState(false);

    const handleUPISelection = (option) =>{
        setPhonePe(false);
        setUpiIdOption(false);
        option === 'phonepe' ? setPhonePe(true) : setUpiIdOption(true);
    }

    const handleSwitching = (choice) =>{
        setUpiDrawer(false);
        setCardDrawer(false);
        setCODDrawer(false);
        switch(choice)
        {
            case 'upi':
                setUpiDrawer(true);
                break;
            case 'card':
                setCardDrawer(true);
                break;
            case 'cod':
                setCODDrawer(true);
                break;
            default:
                return null;
        }
    }

    const [cardNumber, setCardNumber] = useState('');

    const handleCardNumberChange = (event) => {
        setCardNumber(event.target.value);
      };

    const [focus, setFocus] = useState(false);

    const handleFocus = () => {
        setFocus(true);
    };

    const handleBlur = () => {
        if(!cardNumber)
        {
            setFocus(false);
        }
    }
    
    const generateRandomString = (length) =>{
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
      }

    const regenerateCaptcha = () => {
        setCaptcha(generateRandomString(6));
    };

    const handlePayment = () => {
        navigate('/transaction');
    }

    const [captachaValue, setCaptchaValue] = useState('');

    const [captcha, setCaptcha] = useState(generateRandomString(6));

    const [captchaFocus, setCaptchaFocus] = useState(false);



    const upiSlider = 'https://static-assets-web.flixcart.com/fk-p-linchpin-web/batman-returns/logos/UPI.gif';

    const months = ['01','02','03','04','05','06','07','08','09','10','11','12']

    const date = new Date().getFullYear()+" ";

    const year = Number(date.substring(2));

    const years = []

    for(let i=year; i < year+20; i++)
    {
        years.push(
          <option value={i}>{i}</option>
        );
    }

    const [cvv, setCvv] = useState('');
    const [cvvfocus, setCvvFocus] = useState(false);

    return(
        <ThemeProvider theme={theme}>
        <Container container>
            <Grid item lg={8} md={12} sm={12} xs={12}>
                <LeftComponent>
                   <Header>PAYMENT OPTIONS</Header>

                   {/*------------------------------ upi options----------------------------------- */}
                    <OptionsBox styled={{background: upiDrawer ? '#f5f7fa' : '#fff'}}>
                        <UPIOptions onClick={()=>handleSwitching('upi')}>
                            <input style={{ width: '20px', height: '20px'}} type="radio" checked={upiDrawer === true} name="options" />
                            <img src={upiSlider} style={{height: 25}} alt="Your GIF" /><Typography>UPI</Typography>
                        </UPIOptions>
                        { upiDrawer &&
                            <CardDrawer>
                                <Typography style={{fontWeight: 600}}>Choose an option</Typography>

                                <UPISelection onClick={()=>handleUPISelection('phonepe')}><input style={{ width: '20px', height: '20px'}} type="radio" name="toggle" checked={phonePe === true}/><Typography>PhonePe</Typography></UPISelection>
                                {phonePe && <StyledButton variant="contained" onClick={handlePayment} >Continue</StyledButton>}

                                <UPISelection onClick={()=>handleUPISelection('upiid')} ><input style={{ width: '20px', height: '20px'}} type="radio" name="toggle" checked={upiIdOption === true} /><Typography>Your UPI ID</Typography></UPISelection>
                                {upiIdOption && <UPIBox>
                                    <UPIInputBox><UPIInput type="text" placeholder="Enter UPI ID"/><Button>Verify</Button></UPIInputBox>
                                    <UPIPayButton variant="contained" onClick={handlePayment} >PAY ₹{price - discount + 40}</UPIPayButton>
                                    </UPIBox>}

                            </CardDrawer>
                        }
                        
                    </OptionsBox>
                    
                    {/* -------------------------------------Card Option---------------------------------- */}
                    <OptionsBox >
                        <CardBox onClick={()=>handleSwitching('card')}>
                            <input 
                            style={{ width: '20px', height: '20px', marginRight: '15px' }}
                             type="radio"
                              name="options" 
                              checked={cardDrawer === true}/> 
                              <Typography>Credit / Debit / ATM Card</Typography>
                        </CardBox>
                         {cardDrawer &&  
                            <CardDrawer>
                               <CardNumberInput
                                    id="card-number"
                                    label="Enter Card Number"
                                    variant="outlined"
                                    value={cardNumber}
                                    onChange={handleCardNumberChange}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    InputLabelProps={{
                                        shrink: focus ? true : false,
                                    }}
                                />

                                <ValidityBox>
                                   <ValidThrough>
                                      <Box component="span">Valid thru</Box>
                                      <Box>
                                        <select onChange={(e)=> console.log(e.target.value)}>
                                            <option disabled selected>MM</option>
                                            {
                                                months.map((month, index) => (
                                                  <option value={month}>{month}</option>
                                                ))
                                            }
                                        </select>
                                        <select onChange={(e)=> console.log(e.target.value)}>
                                            <option disabled selected>YY</option>
                                            {years}
                                        </select>
                                      </Box>
                                   </ValidThrough>
                                   <CVVField
                                        id="cvv"
                                        label="CVV"
                                        value={cvv}
                                        onChange={(e)=>setCvv(e.target.value)}
                                        onFocus={()=>setCvvFocus(true)}
                                        onBlur={() => cvv ? setCvvFocus(true) : setCvvFocus(false)}
                                        variant="outlined"
                                        InputLabelProps={{
                                            shrink: cvvfocus ? true : false
                                        }}
                                    />
                                </ValidityBox> 
                                <StyledButtonTwo variant="contained" onClick={handlePayment} >PAY ₹{price - discount + 40}</StyledButtonTwo>   
                            </CardDrawer>
                         }
                    </OptionsBox>

                    {/* -----------------------------------------COD------------------------------------------ */}
                    <OptionsBox>
                        <CardBox onClick={()=>handleSwitching('cod')}>
                            <input 
                            style={{ width: '20px', height: '20px', marginRight: '15px' }}
                             type="radio"
                              name="options" 
                              checked={codDrawer === true}/> 
                              <Typography>Cash on Delivery</Typography>
                        </CardBox>
                        {
                        codDrawer &&
                          <CODBox>
                            <Box><CaptchaView 
                                id="catpcha"
                                value={captcha}
                                InputProps={{
                                    readOnly: true,
                                    endAdornment: (
                                    <IconButton onClick={regenerateCaptcha} edge="end">
                                        <RefreshIcon style={{color:' #2874f0'}} />
                                    </IconButton>
                                    ),
                                }}
                            /></Box>
                            
                            <Box><CaptchaField 
                                id="captcha"
                                label="Enter the characters"
                                value={captachaValue}
                                onChange={(e)=>setCaptchaValue(e.target.value)}
                                onFocus={()=>setCaptchaFocus(true)}
                                onBlur={() => captachaValue ? setCaptchaFocus(true) : setCaptchaFocus(false)}
                                variant="outlined"
                                InputLabelProps={{
                                    shrink: captchaFocus ? true : false
                                }}/>
                            </Box>
                            <CODButton variant="contained" onClick={handlePayment} >PAY ₹{price - discount + 40}</CODButton>
                          </CODBox>
                        }

                    </OptionsBox>
                </LeftComponent>
            </Grid>

            <RightComponent item lg={4} md={12} sm={12} xs={12}>
                     <Slip price={price} count={products.length} discount={discount} />  
            </RightComponent>
        </Container>
        </ThemeProvider>
    )
}

export default PaymentForm;