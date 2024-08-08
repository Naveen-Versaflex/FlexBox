import React from 'react';

const LogSideBox = ({ messages, onClose }) => {
  return (
    <div style={{ width: '300px', backgroundColor: '#333', padding: '20px', borderLeft: '1px solid #ccc', position: 'fixed', top: 0, right: 0, height: '40vh', zIndex: 1000 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={onClose}>Close</button>
      </div>
      <div style={{ marginTop: '20px' }}>
        <div>
          <label style={{ color: 'white' }}>Message Data:</label>
          <textarea value={messages.join('\n')} readOnly style={{ width: '100%', height: '30vh' }} />
        </div>
      </div>
    </div>
  );
};

export default LogSideBox;
