"use client"
import React, { useState } from 'react';
import { FaFolder } from "react-icons/fa";
import { IoFolderOpenSharp } from "react-icons/io5";
import { FaFile } from "react-icons/fa6";
type Props = {
  name: string;
  isFolder: boolean;
  children?: Props[];
};

const ExplorerItem = ({ name, isFolder, children } : Props) => {
  console.log(name, isFolder, children)
  const [isExpanded, setIsExpanded] = useState(false);

  const handleItemClick = (event : any  ) => {
    event.stopPropagation()
    if (isFolder) {
      setIsExpanded(!isExpanded);
    }
  };
  console.log(isExpanded)

  return (
    <div style={{ marginLeft: isFolder ? '10px' : '20px', cursor: 'pointer' }} onClick={(event)=>handleItemClick(event)}>
      {isFolder ? (isExpanded ? <IoFolderOpenSharp /> : <FaFolder />) : <FaFile />} {name}
      {isExpanded && children && children.map((child, index) => (
        <ExplorerItem key={index} {...child}/>
      ))}
    </div>
  );
};

export default ExplorerItem;
