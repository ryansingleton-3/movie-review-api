import logo from './logo.svg';
import './App.css';
import Feed from './components/Feed';
import { useEffect } from 'react';

const ENDPOINT = "https://6366c718f5f549f052cc8126.mockapi.io/"

function App() {
  
  useEffect(() => {
    fetch(`${ENPOINT}movies`)
  })

  return (
    <div className="App">
      <Feed />
    </div>
  );
}

export default App;
