import { Box,Button, Typography , styled} from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";

const Component = styled(Box)(({theme})=>({
   width: '100vw',
   height: '93.2vh',
   display: 'flex',
   alignItems:'center',
   justifyContent: 'center',
   margin: 0,

}));

const Container = styled(Box)(({theme})=>({
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [(theme.breakpoints.down('md'))]:{
      width: '80%'
    }
    ,
    [(theme.breakpoints.down('sm'))]:{
        width: '90%'
      }
 }));

const Demo = styled(Typography)(({theme})=>({
   fontFamily: 'Arial, Helvetica, sans-serif',
   fontWeight: 600,
   marginBottom: 15,
   [(theme.breakpoints.down('md'))]:{
     fontSize: 35,
   }
}));

const Buttons = styled(Box)(({theme})=>({
   marginTop: 15,
   width: 345,
   display: 'flex',
   flexDirection:'row',
   justifyContent: 'space-around',
   [(theme.breakpoints.down('sm'))]:{
      flexDirection:'column',
      alignItems: 'center',
      gap: 10,
   }
}));

const StyledButton = styled(Button)`
    height: 100%;
    padding: 15px 35px;
    border-radius: 2px;
    text-transform: capitalize;
    font-size: 16px;
    font-weight: 600;
`;

const Message = styled(Typography)(({theme})=>({
    textAlign:'center',
    [(theme.breakpoints.down('md'))]:
    {
        fontSize: 14,
    },

}))

const TransactionStatus = () =>{

    const navigate = useNavigate();

    const handleClick = () => {
         navigate('/')
    }
   
    return (
       <Component>
        <Container>
            <Demo variant="h3">Bank Demo</Demo>
            <Message>This is just a demo bank page.</Message>
            <Message>You can choose wheather to make this payment successful or not.</Message>
            <Buttons>
                <Box><StyledButton onClick={handleClick} style={{background: '#cdcdc9', color:'#00B9F1'}} variant="contained" startIcon={<CloseIcon/>}>Failure</StyledButton></Box>
                <Box><StyledButton onClick={handleClick} style={{background: '#00B9F1', color:'#fff'}} variant="contained" startIcon={<DoneIcon />}>Successful</StyledButton></Box>
            </Buttons>
         </Container>
       </Component>
    ) 
}

export default TransactionStatus;