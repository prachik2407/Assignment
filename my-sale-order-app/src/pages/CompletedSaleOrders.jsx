
import React, { useState } from 'react';
import { useSaleOrders} from '../services/api';
import SaleOrderTable from '../components/SaleOrderTable';
import { Modal, ModalOverlay} from '@chakra-ui/react';

const CompletedSaleOrders = () => {
  const { data: orders, isLoading } = useSaleOrders();

  const [isOpen, setIsOpen] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(null);

  return (
    <div>
      {isLoading ? <div>Loading...</div> : <SaleOrderTable orders={orders} onEdit={setCurrentOrder} />}
      <Modal isOpen={isOpen || Boolean(currentOrder)} onClose={() => { setIsOpen(false); setCurrentOrder(null); }}>
        <ModalOverlay />
      </Modal>
    </div>
  );
};

export default CompletedSaleOrders;