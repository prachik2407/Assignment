import React from 'react';
import { useForm } from 'react-hook-form';

const OrderForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="orderName" ref={register({ required: true })} />
      {errors.orderName && <span>This field is required</span>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default OrderForm;
