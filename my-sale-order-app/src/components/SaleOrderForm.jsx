import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Box, Button, FormLabel, Input, Select } from '@chakra-ui/react';
import { MultiSelect } from 'chakra-multiselect';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const SaleOrderForm = ({ initialValues, onSubmit }) => {
  const { register, handleSubmit, control } = useForm({ defaultValues: initialValues });
  return (
    <Box p={4}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormLabel>Customer</FormLabel>
        <Select {...register('customer_id', { required: true })}>
          {/* Populate with customer options */}
        </Select>
        <FormLabel>Products</FormLabel>
        <Controller
          control={control}
          name="items"
          render={({ field }) => (
            <MultiSelect
              {...field}
              options={[/* Populate with product options */]}
              placeholder="Select products"
            />
          )}
        />
        <FormLabel>Invoice No</FormLabel>
        <Input {...register('invoice_no', { required: true })} />
        <FormLabel>Invoice Date</FormLabel>
        <Controller
          control={control}
          name="invoice_date"
          render={({ field }) => (
            <DatePicker
              selected={field.value}
              onChange={(date) => field.onChange(date)}
              dateFormat="MM/dd/yyyy"
            />
          )}
        />
        <Button mt={4} type="submit">Submit</Button>
      </form>
    </Box>
  );
};
export default SaleOrderForm;