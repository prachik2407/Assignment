import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';

const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const history = useHistory();

  const onSubmit = (data) => {
    const { username, password } = data;
    // Dummy authentication logic
    if (username === 'user' && password === 'password') {
      history.push('/active-orders');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <Box maxW="sm" mx="auto" mt={10} p={5} borderWidth={1} borderRadius="md">
      <Heading mb={6}>Login</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={4}>
          <FormControl id="username" isInvalid={errors.username}>
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              placeholder="Enter your username"
              {...register('username', { required: 'Username is required' })}
            />
            {errors.username && <Text color="red.500">{errors.username.message}</Text>}
          </FormControl>

          <FormControl id="password" isInvalid={errors.password}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              {...register('password', { required: 'Password is required' })}
            />
            {errors.password && <Text color="red.500">{errors.password.message}</Text>}
          </FormControl>

          <Button type="submit" colorScheme="teal" width="full">Login</Button>
        </VStack>
      </form>
    </Box>
  );
};

export default LoginPage;
