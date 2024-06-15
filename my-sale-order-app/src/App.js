import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import theme from './styles/theme';
import Login from './components/Login';
import ThemeToggle from './components/ThemeToggle';
import SaleOrderTabs from './components/SaleOrderTabs';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <ThemeToggle />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/sale-orders/*" element={<PrivateRoute Component={SaleOrderTabs} />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

const PrivateRoute = ({ Component }) => {
  const isAuthenticated = localStorage.getItem('authenticated');
  return isAuthenticated ? <Component /> : <Navigate to="/login" replace />;
};

export default App;
