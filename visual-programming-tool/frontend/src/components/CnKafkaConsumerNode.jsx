import React from 'react';
import { Handle } from 'react-flow-renderer';

const CnKafkaConsumerNode = ({ data }) => {
  return (
    <div style={{ padding: 10, backgroundColor: '#2465d6' }} onDoubleClick={data.onDoubleClick}>
      {data.label}
      <Handle type="source" position="right" id="success" style={{ top: '30%' }} title="success" />
      <Handle type="source" position="right" id="error" style={{ top: '70%' }} title="error" />
    </div>
  );
};

export default CnKafkaConsumerNode;
