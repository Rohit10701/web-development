"use client"
import React, { useState } from 'react';
import ExplorerItem from './ExplorerItem';
import { explorer } from '@/data/explorer/data';
type Props = {};

const Explorer = (props : Props) => {
  const [explorerData, setExplorerData] = useState(explorer);

  const renderExplorer = (items: typeof explorer) => {
    return items.map((item, index) => (
      <ExplorerItem key={index} {...item} />
    ));
  };

  return (
    <div>
      <h2>File Explorer</h2>
      {renderExplorer(explorerData)}
    </div>
  );
};

export default Explorer;