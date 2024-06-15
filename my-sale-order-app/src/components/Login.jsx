import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Input, FormLabel } from '@chakra-ui/react';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // Dummy authentication
    if (data.username === 'admin' && data.password === 'password') {
      localStorage.setItem('authenticated', true);
      navigate('/sale-orders');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Box p={4}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormLabel>Username</FormLabel>
        <Input {...register('username', { required: true })} />
        <FormLabel>Password</FormLabel>
        <Input type="password" {...register('password', { required: true })} />
        <Button mt={4} type="submit">Login</Button>
      </form>
    </Box>
  );
};

export default Login;
