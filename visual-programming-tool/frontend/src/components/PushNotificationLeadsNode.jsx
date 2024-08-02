import React from 'react';
import { Handle } from 'react-flow-renderer';

const PushNotificationLeadsNode = ({ data }) => {
  return (
    <>
      <div style={{ padding: 10, backgroundColor: '#9400D3' }}>
        {data.label}
        <Handle type="source" position="right" id="output" title="output" />
        <Handle type="target" position="left" id="input" title="input" />
      </div>
    </>
  );
};

export default PushNotificationLeadsNode;
