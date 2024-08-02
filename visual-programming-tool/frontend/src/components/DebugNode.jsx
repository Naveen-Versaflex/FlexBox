// frontend/src/components/DebugNode.js
import React from 'react';
import { Handle } from 'react-flow-renderer';

const DebugNode = ({ data }) => {
  <div>
    Debug Data: {data}
  </div>

  return(
    <>
         <div style={{ padding: 10, backgroundColor: '#008000' }}>
            {data.label}
            <Handle type="target" position="left" />
         </div>
    </>
  )
};

export default DebugNode;
