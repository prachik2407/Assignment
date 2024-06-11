import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Box, Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const createSaleOrder = async (newOrder) => {
  const response = await fetch('/api/sale-orders', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newOrder),
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const SaleOrderForm = ({ defaultValues, onSuccess }) => {
  const { handleSubmit, control, register } = useForm({ defaultValues });
  const queryClient = useQueryClient();

  const mutation = useMutation(createSaleOrder, {
    onSuccess: () => {
      queryClient.invalidateQueries(['activeOrders']);
      if (onSuccess) onSuccess();
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={4}>
          <FormControl id="invoice_no" isRequired>
            <FormLabel>Invoice Number</FormLabel>
            <Input type="text" {...register('invoice_no')} />
          </FormControl>
          <FormControl id="invoice_date" isRequired>
            <FormLabel>Invoice Date</FormLabel>
            <Controller
              name="invoice_date"
              control={control}
              render={({ field }) => <DatePicker {...field} selected={field.value} />}
            />
          </FormControl>
          {/* Add other form controls here */}
          <Button type="submit" colorScheme="teal">
            Submit
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default SaleOrderForm;
