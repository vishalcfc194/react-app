import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 
import Second from './components/Second';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Second />} />
         </Routes>
      </Router>
    </div>
  );
}

export default App;
