"use client"

import React, { useEffect, useRef, useState } from "react";

type Position = {
  x: number; y: number ;
};

const useDraggable = () => {
  const [position, setPosition] = useState<Position>({
    x: 0, y: 0 
  });
  const [dragging, setDragging] = useState<boolean>(false);
  const mousePositionRef = useRef<Position>({ x: 0, y: 0 });

  useEffect(() => {
    //   Handler functions
    const handleMouseDown = (e: MouseEvent) => {
      mousePositionRef.current = {
        x: e.clientX,
        y: e.clientY,
      };

      setDragging(true);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (dragging) {
        const deltaX = e.clientX - mousePositionRef.current.x;
        const deltaY = e.clientY - mousePositionRef.current.y;

        setPosition((prevPosition) => ({
            x: prevPosition.x + deltaX,
            y: prevPosition.y + deltaY,
        }));
        // Update the mouse position ref on mouse move
        mousePositionRef.current = {
          x: e.clientX,
          y: e.clientY,
        };
      }
    };

    const handleMouseUp = () => {
      setDragging(false);
    };

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging]);

  return {position, dragging};
};

export default useDraggable;
