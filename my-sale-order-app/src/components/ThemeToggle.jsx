import React from 'react';
import { useColorMode, Switch } from '@chakra-ui/react';

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  React.useEffect(() => {
    const savedTheme = localStorage.getItem('chakra-ui-color-mode');
    if (savedTheme) {
      colorMode !== savedTheme && toggleColorMode();
    }
  }, [colorMode, toggleColorMode]);

  const handleToggle = () => {
    toggleColorMode();
    localStorage.setItem('chakra-ui-color-mode', colorMode === 'light' ? 'dark' : 'light');
  };

  return <Switch isChecked={colorMode === 'dark'} onChange={handleToggle} />;
};

export default ThemeToggle;
