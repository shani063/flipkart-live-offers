import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {styled, Box} from '@mui/material';

//imports
import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";


import { getProducts } from "../../redux/actions/productActions";

const Conatiner = styled(Box)`
   padding: 10px 10px;
   background: #F2F2F2
`; 


const Home = () => {

    const {products} = useSelector(state => state.getProducts);
    
    const dispatch = useDispatch();

    useEffect (() =>{
        dispatch(getProducts());
    },[dispatch])

    return(
        <>
            <NavBar />
            <Conatiner>
                <Banner />
                <MidSlide products = {products} title="Deal of the Day" timer={true}/>
                <MidSection />
                <Slide products = {products} title="Discounts for you" timer={false}/>
                <Slide products = {products} title="Suggested Items" timer={false}/>
                <Slide products = {products} title="Top Selection" timer={false}/>
                <Slide products = {products} title="Recommended Item" timer={false}/>
                <Slide products = {products} title="Trending Offers" timer={false}/>
                <Slide products = {products} title="Season's top pics" timer={false}/>
                <Slide products = {products} title="Top Deals on Accessories" timer={false}/>
            </Conatiner>
            
        </>   
    );
}

export default Home;