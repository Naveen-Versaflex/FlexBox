import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBug, faFileAlt, faCode, faExchangeAlt,faCircleNotch,faPlus,faDatabase,faPlay,faBell } from '@fortawesome/free-solid-svg-icons';
import './App.css';

const Sidebar = ({ onNodeDragStart }) => {
  const [showBasicNodes, setShowBasicNodes] = useState(true);
  const [showOperations, setShowOperations] = useState(true);

  const toggleBasicNodes = () => {
    setShowBasicNodes(!showBasicNodes);
  };

  const toggleOperations = () => {
    setShowOperations(!showOperations);
  };

  return (
    <div className="sidebar">
      <div className="dropdown">
        <div className="dropdown-header" onClick={toggleBasicNodes}>
          Basic Nodes
        </div>
        {showBasicNodes && (
          <div className="dropdown-content">
            <div 
              className="node1" 
              draggable 
              onDragStart={(e) => onNodeDragStart(e, 'input')}
            >
              <div className="icon-container">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
              <div className="text-container">
                Inject
              </div>
            </div>
            <div 
              className="node2" 
              draggable 
              onDragStart={(e) => onNodeDragStart(e, 'output')}
            >
              <div className="icon-container">
                <FontAwesomeIcon icon={faBug} />
              </div>
              <div className="text-container">
                Debug
              </div>
            </div>
            <div 
              className="node3" 
              draggable 
              onDragStart={(e) => onNodeDragStart(e, 'log')}
            >
              <div className="icon-container">
                <FontAwesomeIcon icon={faFileAlt} />
              </div>
              <div className="text-container">
                Log
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="dropdown">
        <div className="dropdown-header" onClick={toggleOperations}>
          Operations
        </div>
        {showOperations && (
          <div className="dropdown-content">
            <div 
              className="node4" 
              draggable 
              onDragStart={(e) => onNodeDragStart(e, 'function')}
            >
              <div className="icon-container">
                <FontAwesomeIcon icon={faCode} />
              </div>
              <div className="text-container">
                Function
              </div>
            </div>
            <div 
              className="node5" 
              draggable 
              onDragStart={(e) => onNodeDragStart(e, 'switch')}
            >
              <div className="icon-container">
                <FontAwesomeIcon icon={faExchangeAlt} />
              </div>
              <div className="text-container">
                Switch
              </div>
            </div>
            <div 
              className="node6" 
              draggable 
              onDragStart={(e) => onNodeDragStart(e, 'cn_kafka_consumer')}
            >
              <div className="icon-container">
                <FontAwesomeIcon icon={faCircleNotch} />
              </div>
              <div className="text-container">
                Cn Kafka Consumer
              </div>
            </div>
            <div 
              className="node7" 
              draggable 
              onDragStart={(e) => onNodeDragStart(e, 'create_campaign_node')}
            >
              <div className="icon-container">
                <FontAwesomeIcon icon={faPlus} />
              </div>
              <div className="text-container">
              Create Campaign Node
              </div>
            </div>
            <div className="node8" draggable onDragStart={(e) => onNodeDragStart(e, 'leads_from_customer_db')}>
              <div className="icon-container">
                <FontAwesomeIcon icon={faDatabase} />
              </div>
              <div className="text-container">Leads from Customer DB</div>
            </div>
            <div className="node9" draggable onDragStart={(e) => onNodeDragStart(e, 'insert_leads_into_database')}>
              <div className="icon-container">
                <FontAwesomeIcon icon={faDatabase} />
              </div>
              <div className="text-container">Insert Leads into Database</div>
            </div>
            <div className="node10" draggable onDragStart={(e) => onNodeDragStart(e, 'update_campaign')}>
              <div className="icon-container">
                <FontAwesomeIcon icon={faPlay} />
              </div>
              <div className="text-container">Update Campaign</div>
            </div>
            <div className="node11" draggable onDragStart={(e) => onNodeDragStart(e, 'run_campaign')}>
              <div className="icon-container">
                <FontAwesomeIcon icon={faPlay} />
              </div>
              <div className="text-container">Run Campaign</div>
            </div>
            <div className="node12" draggable onDragStart={(e) => onNodeDragStart(e, 'push_notification_leads')}>
              <div className="icon-container">
                <FontAwesomeIcon icon={faBell} />
              </div>
              <div className="text-container">Push Notification Leads</div>
            </div>
            <div className="node13" draggable onDragStart={(e) => onNodeDragStart(e, 'database_insertion')}>
              <div className="icon-container">
                <FontAwesomeIcon icon={faDatabase} />
              </div>
              <div className="text-container">Database Insertion</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
