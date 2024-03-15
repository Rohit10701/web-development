"use client";
import React, { useRef, useState } from "react";
import useFindPosition from "./useFindPosition";

type Props = {};

const Modal = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const outsideRef = useRef<HTMLDivElement>(null)

  const {isOutside} = useFindPosition(outsideRef)

  const openModal = () => {
    setIsOpen(!isOpen);
    console.log(!isOpen);
  };

  const handleCloseModal = () =>{
    if(isOutside){
        setIsOpen(!isOpen)
    }
  }
  return (
    <div className="flex h-[100vh] w-[100vw]">
      <div className="w-full">
        <button onClick={openModal}> Open</button>
        {isOpen && (
            <div className="w-full h-full absolute top-0 left-0 bg-gray-100 bg-opacity-80" onClick={handleCloseModal}>
            <div className="flex justify-center items-center ">
              <div ref={outsideRef} className="z-10 opacity-100 absolute top-1/2 left-1/2 translate-x-[-300px] translate-y-[-150px] w-[600px] h-[300px] bg-black justify-center flex items-center text-white">
                <div className="flex flex-col justify-between w-full h-full">
                  Modal
                  <button
                    onClick={openModal}
                    className="bg-red-600 w-[200px] h-[50px]"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
