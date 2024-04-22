"use client";
import React, { useState } from "react";
const StepperForm = ({ config }) => {
  const totalPage = config.length;
  const [activePage, setActivePage] = useState(0);
  const [activeChild, setActiveChild] = useState(null);

  const handleChildrenClicked = (e) => {
    handleNext(e, true);
  };
  
  const handleGoto = (index) => {
    setActivePage(index);
    setActiveChild(null);
  };

  const handleNext = (event, isClicked = false) => {
    if (activeChild !== null) {
      const currentParentConfig = config[activePage].children;
      const currentIndex = currentParentConfig.findIndex(
        (child) => child.step === activeChild
      );
      if (currentIndex < currentParentConfig.length - 1) {
        setActiveChild(currentParentConfig[currentIndex + 1].step);
      } else {
        if (activePage < totalPage - 1) {
          setActivePage(activePage + 1);
          setActiveChild(null);
        }
      }
    } else {
      const currentParentConfig = config[activePage].children;
      if (currentParentConfig && currentParentConfig.length > 0 && isClicked) {
        setActiveChild(currentParentConfig[0].step);
      } else {
        if (activePage < totalPage - 1) {
          setActivePage(activePage + 1);
          setActiveChild(null);
        }
      }
    }
  };

  const handleBack = () => {
    if (activeChild !== null) {
      const currentParentConfig = config[activePage].children;
      const currentIndex = currentParentConfig.findIndex(
        (child) => child.step === activeChild
      );
      if (currentIndex > 0) {
        setActiveChild(currentParentConfig[currentIndex - 1].step);
      } else {
        setActiveChild(null);
      }
    } else {
      if (activePage > 0) {
        setActivePage(activePage - 1);
        setActiveChild(null);
      }
    }
  };

  return (
    <>
      <div>
        <div className="flex justify-center items-center">
          {config.map((page, index) => (
            <div
              className={`mx-10 bg-[#f00] hover:cursor-pointer ${
                index === activePage ? "font-bold" : ""
              }`}
              key={index}
              onClick={() => handleGoto(index)}
            >
              {page.step}
            </div>
          ))}
        </div>

        <form>
          {activeChild !== null
            ? config[activePage].children
                .find((child) => child.step === activeChild)
                .component()
            : config[activePage].component({ handleChildrenClicked })}

          <div className="flex">
            <button
              className="rounded-md bg-green-600 flex justify-center items-center"
              onClick={handleBack}
            >
              Back
            </button>
            <button
              className="rounded-md bg-green-600 flex justify-center items-center"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default StepperForm;
