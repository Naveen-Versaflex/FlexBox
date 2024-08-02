import React from 'react';
import { Handle } from 'react-flow-renderer';

const FunctionNode = ({ data }) => {
  return (
    <>
      <div style={{ padding: 10, backgroundColor: '#f7ca88' }}>
        {data.label}
        <Handle type="target" position="left" id="input" title="input" />
        <Handle type="source" position="right" id="output" title="output" />
      </div>
    </>
  );
};

export default FunctionNode;
