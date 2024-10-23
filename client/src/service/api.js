import axios from 'axios';

const URL = `${window.location.origin}`;

export const authenticateSignUp = async (data) =>
{
   try{
      return await axios.post(`${URL}/signup`, data)
   }
   catch(error)
   {
        console.log('Error while calling Signup API',error);
   }
}

export const authenticateLogin = async (data) =>
{
   try{
      return await axios.post(`${URL}/login`, data)
   }
   catch(error)
   {
        console.log('Error while calling Login API',error);
        return error.response;
   }
}

export const payUsingPaytm = async (data) => {
   try {
      let response = await axios.post(`${URL}/payment`, data);
      return response.data;
   } catch (error) {
      console.log('Error while calling payment Api',error);
   }
}