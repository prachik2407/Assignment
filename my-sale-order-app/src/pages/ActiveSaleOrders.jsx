import React, { useState } from 'react';
import { useSaleOrders, useCreateSaleOrder, useUpdateSaleOrder } from '../services/api';
import SaleOrderTable from '../components/SaleOrderTable';
import SaleOrderForm from '../components/SaleOrderForm';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Button } from '@chakra-ui/react';

const ActiveSaleOrders = () => {
  const { data: orders, isLoading } = useSaleOrders();
  const { mutate: createSaleOrder } = useCreateSaleOrder();
  const { mutate: updateSaleOrder } = useUpdateSaleOrder();

  const [isOpen, setIsOpen] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(null);

  const handleCreate = (data) => {
    createSaleOrder(data);
    setIsOpen(false);
  };

  const handleEdit = (data) => {
    updateSaleOrder(data);
    setCurrentOrder(null);
  };

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>+ Sale Order</Button>
      {isLoading ? <div>Loading...</div> : <SaleOrderTable orders={orders} onEdit={setCurrentOrder} />}
      <Modal isOpen={isOpen || Boolean(currentOrder)} onClose={() => { setIsOpen(false); setCurrentOrder(null); }}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{currentOrder ? 'Edit Sale Order' : 'Create Sale Order'}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SaleOrderForm initialValues={currentOrder || {}} onSubmit={currentOrder ? handleEdit : handleCreate} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ActiveSaleOrders;