import React from 'react';
import { Tab, Tabs, TabList, TabPanel, TabPanels } from '@chakra-ui/react';
import ActiveSaleOrders from '../pages/ActiveSaleOrders'; 
import CompletedSaleOrders from '../pages/CompletedSaleOrders';

const SaleOrderTabs = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Active Sale Orders</Tab>
        <Tab>Completed Sale Orders</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <ActiveSaleOrders />
        </TabPanel>
        <TabPanel>
          <CompletedSaleOrders />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default SaleOrderTabs;
