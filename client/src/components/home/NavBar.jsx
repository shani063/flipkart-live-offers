import { Box, Typography, styled} from "@mui/material";
import { navData } from "../../constants/data";

const Component = styled(Box)(({theme}) => ({
   display: 'flex',
   padding: '0 130px 0 130px',
   justifyContent: 'space-between',
   overflow: 'hidden',
   background:'#fff',
   [theme.breakpoints.down('lg')]:{
       padding: 0,
   }
  }));

const Conatiner = styled(Box)`
   padding: 12px 8px;
   text-align: center;
`;

const Text = styled(Typography)`
     font-size: 14px;
     font-weight: 600;
     font-family: inherit;
`;

const NavBar = () => {
    return (
      <Component>
          {
            navData.map(data =>(
                <Conatiner>
                    <img src = {data.url} alt="nav" style = {{ width: 64}}/>
                    <Text>{data.text}</Text>
                </Conatiner>
            ))
          }
      </Component>
    );
}

export default NavBar;