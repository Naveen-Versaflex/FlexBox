// frontend/src/components/InjectNode.js
import React from 'react';
import axios from 'axios';
import { Handle } from 'react-flow-renderer';

const InjectNode = (data) => {
  const handleClick = () => {
    axios.post('http://localhost:3001/inject', { data: 'test data' })
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <div style={{ padding: 10, backgroundColor: '#0598C9' }}>
          {data.label}
          <Handle type="source" position="right" />
          <button onClick={handleClick}>Inject Data</button>
      </div>
    </div>
  );
};

export default InjectNode;
