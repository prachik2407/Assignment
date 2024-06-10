import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  useDisclosure,
} from '@chakra-ui/react';

const createOrder = async (newOrder) => {
  const response = await fetch('/api/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newOrder),
  });
  if (!response.ok) {
    throw new Error('Failed to create order');
  }
  return response.json();
};

const CreateOrderModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const queryClient = useQueryClient();
  const mutation = useMutation(createOrder, {
    onSuccess: () => {
      queryClient.invalidateQueries(['activeOrders']);
      onClose();
      reset();
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <>
      <Button onClick={onOpen} colorScheme="teal" mb={4}>Create Order</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Order</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form id="create-order-form" onSubmit={handleSubmit(onSubmit)}>
              <FormControl id="customer" isInvalid={errors.customer} mb={4}>
                <FormLabel>Customer Name</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter customer name"
                  {...register('customer', { required: 'Customer name is required' })}
                />
                {errors.customer && <span>{errors.customer.message}</span>}
              </FormControl>

              <FormControl id="product" isInvalid={errors.product} mb={4}>
                <FormLabel>Product</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter product"
                  {...register('product', { required: 'Product is required' })}
                />
                {errors.product && <span>{errors.product.message}</span>}
              </FormControl>

              <FormControl id="quantity" isInvalid={errors.quantity} mb={4}>
                <FormLabel>Quantity</FormLabel>
                <NumberInput min={1}>
                  <NumberInputField
                    {...register('quantity', { required: 'Quantity is required', valueAsNumber: true })}
                  />
                </NumberInput>
                {errors.quantity && <span>{errors.quantity.message}</span>}
              </FormControl>

              <FormControl id="price" isInvalid={errors.price} mb={4}>
                <FormLabel>Price</FormLabel>
                <NumberInput min={0}>
                  <NumberInputField
                    {...register('price', { required: 'Price is required', valueAsNumber: true })}
                  />
                </NumberInput>
                {errors.price && <span>{errors.price.message}</span>}
              </FormControl>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} type="submit" form="create-order-form">Create</Button>
            <Button variant="ghost" onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateOrderModal;
