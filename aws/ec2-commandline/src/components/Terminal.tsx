"use client"
import React, { useState, useEffect } from 'react';

const Terminal = () => {
  const [command, setCommand] = useState('');
  const [terminalOutput, setTerminalOutput] = useState('');
  const [socket, setSocket] = useState(null);

  console.log(command)
  useEffect(() => {
    // Establish WebSocket connection when the component mounts
    const ws = new WebSocket('wss://t7y2w5nfwf.execute-api.eu-north-1.amazonaws.com/production');
    setSocket(ws);

    ws.onmessage = (event) => {
      // Handle incoming WebSocket messages (real-time updates)
      const data = JSON.parse(event.data);
      setTerminalOutput(data.message);
    };

    ws.onopen = () => {
      console.log('WebSocket connection opened');
    };

    ws.onclose = () => {
      console.log('WebSocket connection closed');
    };

    // Close WebSocket connection when the component unmounts
    return () => {
      ws.close();
    };
  }, []);

  const handleExecuteCommand = () => {
    try {
      // Send command to the server via WebSocket
      socket.send(JSON.stringify({ command }));
    } catch (error) {
      console.error('Error sending command:', error);
    }
  };

  return (
    <div className="p-10">
      <input
        type="text"
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        placeholder="Enter command..."
      />
      <button onClick={handleExecuteCommand}>Execute Command</button>
      <div>{terminalOutput}</div>
    </div>
  );
};

export default Terminal;
