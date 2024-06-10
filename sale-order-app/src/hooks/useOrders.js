import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

const useMockApi = () => {
  const [orders, setOrders] = useState([
    { id: 1, customerName: "John Doe", price: "$100", lastModified: "2024-06-01" },
    { id: 2, customerName: "Jane Smith", price: "$150", lastModified: "2024-06-02" }
  ]);

  const fetchOrders = () => Promise.resolve(orders);

  const createOrder = (newOrder) => {
    const newOrders = [...orders, { id: orders.length + 1, ...newOrder, lastModified: new Date().toISOString() }];
    setOrders(newOrders);
    return Promise.resolve(newOrder);
  };

  return { fetchOrders, createOrder };
};

export const useOrders = (type) => {
  const { fetchOrders, createOrder } = useMockApi();
  const queryClient = useQueryClient();

  const query = useQuery(['activeOrders'], fetchOrders);

  const mutation = useMutation(createOrder, {
    onSuccess: () => {
      queryClient.invalidateQueries(['activeOrders']);
    },
  });

  return { ...query, createOrder: mutation.mutate };
};
