import React , {useState} from "react";
import { Box } from "@chakra-ui/react"
import { Button} from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Text} from '@chakra-ui/react'
import Cookies from 'universal-cookie';
import axios from 'axios';
// import welcome from '../images/welcome.png'
import { Center} from '@chakra-ui/react'


const cookies = new Cookies();
const initialState = {
  email :'',
  password: '',
  
  
}


function Login() {
  const [form, setForm] = useState(initialState);
  const [isLogin, setIsLogin] = useState(true);


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
const handleSubmit = async (e) => {
  e.preventDefault();

  const {  email, password} = form;
  console.log(form)
  const URL = 'https://techspace1.herokuapp.com/auth';
       

        const { data: { token, userId, hashedPassword } } = await axios.post(`${URL}/login`, {
             password, email: form.fullName
        });
       

        cookies.set('token', token);
        cookies.set('password', password);
        cookies.set('email', email);
        cookies.set('userId', userId);
        window.location.reload();

      }
    return (
        <Center h='100%' color= 'blue'>
            <Box w='100%' p={4} color='white' bg= '#f2f5f8' justifyContent='center'  m = {4}>

<Image
  
  boxSize='100%'
  src='/images/welcome.jpg'
  alt='welcome'
  objectFit='cover'
  justifyContent='center'
  alignItems='center'
  p='6px'
  

  objectPosition='center'

/>

<Text fontSize='40px' color='black' textAlign='start' p='4'>Log In</Text>  
{/* function PasswordInput() {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    <InputGroup size='md'>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
  )
} */}
  
  <Box p='4'>  
  <Input placeholder='Email Address' />  

  </Box > 
  <Box p='4'>
  <Input placeholder='Password'  />  

  </Box>
     <Text fontSize='20px' color='blue' textAlign='end' p='4'>Forgot Password?</Text>  
  <Box  bg= '#281E63'>
  <Button color='white' size='lg'  bg="#281E63">
    Login
  </Button>
    </Box>
    

</Box>
</Center>
    )
}
export default Login


