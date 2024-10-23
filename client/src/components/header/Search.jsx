import { InputBase, Box, List,ListItem, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions/productActions';

import { Link } from 'react-router-dom';

const SearchContainer = styled(Box)(({theme}) =>({
   display: 'flex',
   background: '#fff',
   width: '38%',
   borderRadius: 2,
   marginLeft: 10,
   [theme.breakpoints.down('lg')]:{
       width: '60%',
    }
  }));

const InputSearchBase = styled(InputBase)`
    padding-left: 20px;
    width: 100%;
    font-size: unset;
`;

const SearchIconWrapper = styled(Box)`
    color: #2874f0;
    display: flex;
    align-items: center;
    padding: 5px;
`

const ListWrapper = styled(List)`
    position: absolute;
    background: #ffffff;
    color: #000;
    margin-top: 36px;
`;

const Search = () => {

    const [text, setText] = useState('');

    const getText = (text) =>{
        setText(text);
    }

    const { products } = useSelector(state => state.getProducts);

    const dispatch = useDispatch();

    useEffect (() => {
        dispatch(getProducts());
    },[dispatch]);

    return(
        <SearchContainer>
          <InputSearchBase 
              placeholder='Search for products, brands and more' 
              onChange={(e) => getText(e.target.value)}
              value={text}
          />
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          {
            text &&
               <ListWrapper>
                {
                  products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                    <ListItem>
                      <Link to={`/product/${product.id}`} 
                      onClick={() => setText('')}
                      style={{color:'inherit',textDecoration: 'none'}}
                      >
                        {product.title.longTitle}
                      </Link>
                    </ListItem>
                  ))
                }
               </ListWrapper>
          }
        </SearchContainer>
       
    )
}

export default Search;