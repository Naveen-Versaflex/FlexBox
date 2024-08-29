import React, { useState, useEffect, useCallback } from 'react';
import ReactFlow, { MiniMap, Controls, Background, addEdge, useEdgesState, useNodesState } from 'react-flow-renderer';
import CnKafkaConsumerNode from './CnKafkaConsumerNode';
import InjectNode from './InjectNode';
import LogNode from './LogNode';
import DebugNode from './DebugNode';
import FunctionNode from './FunctionNode';
import SwitchNode from './SwitchNode';
import CreateCampaignNode from './CreateCampaignNode';
import LeadsFromCustomerDbNode from './LeadsFromCustomerDbNode';
import InsertLeadsIntoDatabaseNode from './InsertLeadsIntoDatabaseNode';
import UpdateCampaignNode from './UpdateCampaignNode';
import RunCampaignNode from './RunCampaignNode';
import PushNotificationLeadsNode from './PushNotificationLeadsNode';
import DatabaseInsertionNode from './DatabaseInsertionNode';
import SideBox from './SideBox';
import LogSideBox from './LogSideBox';
import io from 'socket.io-client';

const nodeTypes = {
  input: InjectNode,
  output: DebugNode,
  log: LogNode,
  function: FunctionNode,
  switch: SwitchNode,
  cn_kafka_consumer: CnKafkaConsumerNode,
  create_campaign_node: CreateCampaignNode,
  leads_from_customer_db: LeadsFromCustomerDbNode,
  insert_leads_into_database: InsertLeadsIntoDatabaseNode,
  update_campaign: UpdateCampaignNode,
  run_campaign: RunCampaignNode,
  push_notification_leads: PushNotificationLeadsNode,
  database_insertion: DatabaseInsertionNode,
};

const initialNodes = [];
const initialEdges = [];

const Canvas = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState(null);
  const [nodeData, setNodeData] = useState({});
  const [logMessages, setLogMessages] = useState([]);
  const [socket, setSocket] = useState(null);
  const name="naveen1";

  useEffect(() => {
    // Initialize WebSocket connection
    const socket = io('http://localhost:3000');
    setSocket(socket);

    // Handle incoming messages
    socket.on('newMessage', (message) => {
      setLogMessages((prevMessages) => [...prevMessages, message]);
    });

    // Clean up WebSocket connection
    return () => socket.disconnect();
  }, []);

  const handleNodeDoubleClick = (nodeId) => {
    setSelectedNode(nodeId);
  };

  const onDrop = useCallback((event) => {
    event.preventDefault();
    const type = event.dataTransfer.getData('application/reactflow');
    const position = { x: event.clientX - 50, y: event.clientY - 50 };

    const newNode = {
      id: `${type}-${Math.random()}`,
      type: type,
      data: { label: type.charAt(0).toUpperCase() + type.slice(1), onDoubleClick: () => handleNodeDoubleClick(newNode.id) },
      position,
    };

    setNodes((nds) => nds.concat(newNode));
  }, [setNodes]);

  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };

  const onConnect = (params) => setEdges((eds) => addEdge(params, eds));

  const handleClose = () => {
    setSelectedNode(null);  
  };

  const handleDone = (topic, groupId) => {
    setNodeData((prev) => ({
      ...prev,
      [selectedNode]: { topic, groupId }
    }));
    
    // Subscribe to the topic using WebSocket
    if (socket && topic && groupId) {
      socket.emit('joinRoom', { topic, groupId });
    }
  };


  return (
    <div style={{ height: '100vh', display: 'flex' }}>
      <div
        style={{ flex: 1 }}
        onDrop={onDrop}
        onDragOver={onDragOver}
      >
        <ReactFlow
          nodes={nodes.map((node) => ({
            ...node,
            data: {
              ...node.data,
              ...nodeData[node.id],
            },
          }))}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
        >
          <MiniMap />
          <Controls />
          <Background />
        </ReactFlow>
        </div>
      {selectedNode && (
        <SideBox onClose={handleClose} onDone={handleDone} name={name}/>
      )}
      {logMessages.length > 0 && (
        <LogSideBox messages={logMessages} onClose={() => setLogMessages([])} />
      )}
    </div>
  );
};

export default Canvas;
