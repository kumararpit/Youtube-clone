import React from 'react'
import "./App.css"
import Navbar from './component/Navbar'
import Sidebar from './component/Sidebar'
import Recommand from './component/Recommand'
function App() {
  return (
    <div className="container">
    <Navbar />
    <div className="clone_body">
    <Sidebar />
    <Recommand />
    </div>
    </div>
  );
}

export default App;
