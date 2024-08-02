import React from 'react';
import { Handle } from 'react-flow-renderer';

const CreateCampaignNode = ({ data }) => {
  return (
    <>
      <div style={{ padding: 10, backgroundColor: '#d62477' }}>
        {data.label}
        <Handle type="target" position="left" id="input" title="input" />
        <Handle type="source" position="right" style={{ top: '30%' }} />
        <Handle type="source" position="right" style={{ top: '70%' }} />
      </div>
    </>
  );
};

export default CreateCampaignNode;