import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  
import HomePage from './pages/HomePage';
import CommentPage from './pages/CommentPage';

function App() {
  return (
    <Router>
      <div>
        <Routes>  
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;