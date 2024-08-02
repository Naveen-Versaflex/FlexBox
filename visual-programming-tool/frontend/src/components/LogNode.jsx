import React, { useState } from 'react';
import { Handle } from 'react-flow-renderer';
import LogSideBox from './LogSideBox';

const LogNode = ({ data }) => {
  const [showSideBox, setShowSideBox] = useState(false);

  const handleDoubleClick = () => {
    setShowSideBox(true);
  };

  const handleClose = () => {
    setShowSideBox(false);
  };

  return (
    <>
      <div onDoubleClick={handleDoubleClick} style={{ padding: 10, backgroundColor: '#D69BD6', position: 'relative' }}>
        {data.label}
        <Handle type="target" position="left" />
      </div>
      {showSideBox && (
        <div style={{ position: 'absolute', top: 0, right: 0, transform: 'translateX(400px)' }}>
          <LogSideBox data={data} onClose={handleClose} />
        </div>
      )}
    </>
  );
};

export default LogNode;
