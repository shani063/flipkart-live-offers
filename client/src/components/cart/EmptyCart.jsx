import { Box, Typography, styled } from "@mui/material"

const Component = styled(Box)(({theme})=> ({

    height: '65vh',
    width: '80%',
    background: '#fff',
    margin: '80px auto',
    [theme.breakpoints.down('md')]:{
        width: '90%',
    },
    [theme.breakpoints.down('sm')]:{
        width: '90%',
        height: '50vh'
    }
}));

const Container =  styled(Box)`
    text-align: center;
    padding-top: 70px;
`;

const Image = styled('img')(({theme}) =>({
    width: '20%',
    [theme.breakpoints.down('lg')]:
    {
        width: '30%',
    },
    [theme.breakpoints.down('sm')]:
    {
        width: '70%',
    },
    [theme.breakpoints.down('md')]:
    {
        width: '50%',
    }
}));


const EmptyCart = () => {

    const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';

    return(
        <Component>
            <Container>
                <Image src={imgurl} alt="Empty"/>
                <Typography style={{fontSize: 20, fontWeight: 600}}>Your cart is Empty</Typography>
                <Typography style={{fontSize: 14, color: '#878787'}}>Add items to it now</Typography>
            </Container>
        </Component>
    )
}

export default EmptyCart;