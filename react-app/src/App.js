import IssueToken from './components/IssueToken'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<IssueToken/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
