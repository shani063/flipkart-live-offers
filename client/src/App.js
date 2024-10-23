import Header from './components/header/Header'
import Home from './components/home/Home';
import DetailView from './components/details/DetailView';
import Cart from './components/cart/Cart';
import PaymentForm from './components/paytm/PaymentForm';
import TransactionStatus  from './components/paytm/TransactionStatus';  

import {Box} from '@mui/material';

import DataProvider from './context/DataProvider';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
 

  
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{marginTop: 55}}>
          <Routes>
            <Route path='/' element = {<Home />} />
            <Route path='/product/:id' element = {<DetailView />} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/payment' element={<PaymentForm/>} />
            <Route path='/transaction' element={<TransactionStatus/>} />
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
