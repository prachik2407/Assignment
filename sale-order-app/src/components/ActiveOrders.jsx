import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Box, Table, Thead, Tbody, Tr, Th, Td, Spinner, Alert, AlertIcon } from '@chakra-ui/react';
import CreateOrderModal from './CreateOrderModal';

const fetchOrders = async () => {
  const response = await fetch('/api/active-orders.json');
  return response.json();
};

const ActiveOrders = () => {
  const { data, error, isLoading } = useQuery(['activeOrders'], fetchOrders);

  if (isLoading) return <Spinner size="xl" />;
  if (error) return <Alert status="error"><AlertIcon />Failed to load orders</Alert>;

  return (
    <Box p={5}>
      <CreateOrderModal />
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Customer Name</Th>
            <Th>Price</Th>
            <Th>Last Modified</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map(order => (
            <Tr key={order.id}>
              <Td>{order.id}</Td>
              <Td>{order.customerName}</Td>
              <Td>{order.price}</Td>
              <Td>{order.lastModified}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default ActiveOrders;
