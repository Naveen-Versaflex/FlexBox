import React from 'react';
import { Handle } from 'react-flow-renderer';

const SwitchNode = ({ data }) => {
  return (
    <>
      <div style={{ padding: 10, backgroundColor: '#b9b903' }}>
        {data.label}
        <Handle type="target" position="left" id="input" title="input" />
        <Handle type="source" position="right" id="isTrue" style={{ top: '30%' }} title="isTrue" />
        <Handle type="source" position="right" id="isFalse" style={{ top: '70%' }} title="isFalse" />
      </div>
    </>
  );
};

export default SwitchNode;
