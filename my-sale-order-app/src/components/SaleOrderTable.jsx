import React from 'react';
import { Table, Tbody, Td, Th, Thead, Tr, IconButton } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';

const SaleOrderTable = ({ orders, onEdit }) => {
  if (!orders) {
    return <div>Loading...</div>;
  }

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Invoice No</Th>
          <Th>Customer</Th>
          <Th>Date</Th>
          <Th>Status</Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        {orders.map((order) => (
          <Tr key={order.id}>
            <Td>{order.invoice_no}</Td>
            <Td>{order.customer_id}</Td>
            <Td>{order.invoice_date}</Td>
            <Td>{order.paid ? 'Completed' : 'Active'}</Td>
            <Td>
              <IconButton
                icon={<EditIcon />}
                onClick={() => onEdit(order)}
              />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default SaleOrderTable;