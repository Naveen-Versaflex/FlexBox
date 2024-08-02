import React from 'react';
import { Handle } from 'react-flow-renderer';

const DatabaseInsertionNode = ({ data }) => {
  return (
    <>
      <div style={{ padding: 10, backgroundColor: '#228B22' }}>
        {data.label}
        <Handle type="source" position="right" id="output" title="output" />
        <Handle type="target" position="left" id="input" title="input" />
      </div>
    </>
  );
};

export default DatabaseInsertionNode;
