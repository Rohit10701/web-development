"use client"
import React from "react";

const Basic = ({handleChildrenClicked}) => {
  console.log(handleChildrenClicked)
  return (
    <div className="bg-white w-[720px] h-[360px] text-black">
      Basic
      <button onClick={handleChildrenClicked}>Go to Children</button>
    </div>
  );
};

export default Basic;
