import React from 'react';
import './styles/App.scss';
import './styles/tailwind.css';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { MainContent } from './components/MainContent';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
