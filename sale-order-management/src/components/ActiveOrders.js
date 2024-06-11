import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Box, Spinner, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

const fetchActiveOrders = async () => {
  const response = await fetch('/api/active-orders'); // Adjust the API endpoint as needed
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const ActiveOrders = () => {
  const { data, error, isLoading } = useQuery(['activeOrders'], fetchActiveOrders);

  if (isLoading) return <Spinner />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Box>
      <Table>
        <Thead>
          <Tr>
            <Th>Order ID</Th>
            <Th>Customer Name</Th>
            <Th>Date</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map(order => (
            <Tr key={order.id}>
              <Td>{order.id}</Td>
              <Td>{order.customerName}</Td>
              <Td>{order.date}</Td>
              <Td>{order.status}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default ActiveOrders;
