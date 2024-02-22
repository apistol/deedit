import axios from 'axios';

export const signUpRegister = async (formData) => {
  try {
    const endpointSignUp = 'http://localhost:3000/auth/signup';

    const resData = await axios.post(endpointSignUp, formData);

    console.log('JWT Token', resData.data.token);
    return resData;
  } catch (error) {
    console.error('Registration error:', error.response?.data || error.message);
  }
};
