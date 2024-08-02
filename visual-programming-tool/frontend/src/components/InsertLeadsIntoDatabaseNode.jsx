import React from 'react';
import { Handle } from 'react-flow-renderer';

const InsertLeadsIntoDatabaseNode = ({ data }) => {
  return (
    <>
      <div style={{ padding: 10, backgroundColor: '#32CD32' }}>
        {data.label}
        <Handle type="source" position="right" id="output" title="output" />
        <Handle type="target" position="left" id="input" title="input" />
      </div>
    </>
  );
};

export default InsertLeadsIntoDatabaseNode;
