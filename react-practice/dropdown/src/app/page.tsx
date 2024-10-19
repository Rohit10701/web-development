"use client";
import { useEffect, useRef, useState } from "react";

interface DropdownProps {
  content: React.ReactNode;
}

export default function Dropdowns() {



  return (
    <>
    <div style={{display: "flex", justifyContent: "center", gap: "200px"}}>

      <Dropdown  content="Dropdown Content 1" />
      <Dropdown content="Dropdown Content 2" />
    </div>
    </>
  );
}

function Dropdown({content}: DropdownProps) {
  const [open, setOpen] = useState(false)
  const nodeRef = useRef(null);


  
  useEffect(() => {
    const handleClose = (e: MouseEvent) => {
      if (nodeRef.current && !nodeRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
  
    document.addEventListener("mousedown", handleClose);
  
    return () => {
      document.removeEventListener("mousedown", handleClose);
    };
  }, []);
  
  return (
    <div className="dropdown" ref={nodeRef} style={{position: "relative"}}>
      <button className="dropdown-button" onClick={()=>setOpen(!open)}>
        Click
      </button>
      {open && (
        <div style={{position: "absolute", left:"0px", top: "0px", marginTop:"30px"}} className="dropdown-content dropdown-body">
          {content}
        </div>
      )}
    </div>
  );
}
