import React, { useState } from 'react';

const SideBox = ({ onClose, onDone }) => {
  const [topic, setTopic] = useState('');
  const [groupId, setGroupId] = useState('');

  const handleDone = () => {
    onDone(topic, groupId);
  };

  return (
    <div style={{ width: '300px', backgroundColor: '#333', padding: '20px', borderLeft: '1px solid #ccc' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={onClose}>Close</button>
        <button onClick={handleDone}>Done</button>
      </div>
      <div style={{ marginTop: '20px' }}>
        <div>
          <label style={{ color: 'white' }}>Topic:</label>
          <input type="text" value={topic} onChange={(e) => setTopic(e.target.value)} />
        </div>
        <div>
          <label style={{ color: 'white' }}>Group ID:</label>
          <input type="text" value={groupId} onChange={(e) => setGroupId(e.target.value)} />
        </div>
      </div>
    </div>
  );
};

export default SideBox;
