import React, { useState } from 'react';
import { Box, Button, useColorMode, VStack, useDisclosure } from '@chakra-ui/react';
import ActiveOrders from './ActiveOrders';
import SaleOrderForm from './SaleOrderForm';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';

const Dashboard = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box p={4}>
      <VStack>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'} Mode
        </Button>
        <Button onClick={onOpen}>+ Sale Order</Button>
        <ActiveOrders />
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create Sale Order</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <SaleOrderForm onSuccess={onClose} />
            </ModalBody>
          </ModalContent>
        </Modal>
      </VStack>
    </Box>
  );
};

export default Dashboard;
