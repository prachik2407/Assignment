import { useQuery, useMutation } from '@tanstack/react-query';
const fetchSaleOrders = async () => {
  return [
    {
      id: 1,
      invoice_no: 'INV-001',
      customer_id: 1,
      invoice_date: '2024-06-01',
      paid: false,
    },
    // Add more sale orders here
  ];
};
export const useSaleOrders = () => {
  return useQuery({
    queryKey: ['saleOrders'],
    queryFn: fetchSaleOrders,
  });
};
export const useCreateSaleOrder = () => {
  return useMutation({
    mutationFn: (newOrder) => {
      console.log('Creating new order:', newOrder);
      // Mock API call
    },
  });
};
export const useUpdateSaleOrder = () => {
  return useMutation({
    mutationFn: (updatedOrder) => {
      console.log('Updating order:', updatedOrder);
      // Mock API call
    },
  });
};
