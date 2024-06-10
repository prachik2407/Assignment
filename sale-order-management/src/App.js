import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Box } from '@chakra-ui/react'; // Import Chakra UI components
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Box className="App"> {/* Use Chakra UI Box component */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </Box>
  );
}

export default App;
