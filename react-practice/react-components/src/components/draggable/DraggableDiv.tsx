"use client"
import useDraggable from "@/hooks/useDraggable";
import React from "react";

const DraggableDiv = () => {
  const { position, dragging } = useDraggable();

  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: dragging ? "lightblue" : "lightgreen",
        position: "absolute",
        top: position.y + "px",
        left: position.x + "px",
        cursor: dragging ? "grabbing" : "grab",
      }}
    >
      Drag me!
    </div>
  );
};

export default DraggableDiv;
