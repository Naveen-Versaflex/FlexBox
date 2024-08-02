import React from 'react';
import Sidebar from './Sidebar';
import Canvas from './Canvas';
import './App.css';

const App = () => {
  const handleNodeDragStart = (event, type) => {
    event.dataTransfer.setData('application/reactflow', type);
    event.dataTransfer.effectAllowed = 'move';
  };

  const handleDeploy = async () => {
    try {
      // This is where you would send deployment data to your backend if needed
      alert('Deployed successfully');
    } catch (error) {
      console.error('Deployment error:', error);
    }
  };

  return (
    <div className="app">
      <Sidebar onNodeDragStart={handleNodeDragStart} />
      <div className="editor">
        <div className="header">
          <h1>Flex Box</h1>
          <button className="deploy-button" onClick={handleDeploy}>
            Deploy
          </button>
        </div>
        <Canvas />
      </div>
    </div>
  );
};

export default App;
