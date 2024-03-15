"use client"
import React, { ChangeEvent, useRef, useState } from "react";

type Props = {};

const Form = (props: Props) => {
  const [otp, setOtp] = useState<string[]>([]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>(
    Array.from({ length: 4 }, () => null)
  );

  const handleInput = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const newOtp = [...otp];
    const inputValue = e.target.value;

    newOtp[index] = inputValue[inputValue.length - 1];
    setOtp(newOtp);
    console.log(newOtp);

    const nextIndex = index + 1;
    if (nextIndex < 4 && inputValue.length === 1) {
      inputRefs.current[nextIndex]?.focus();
    }
  };

  const handleDelete = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    const newOtp = [...otp];
    const isBackspace = e.key === "Backspace";
    console.log(e.key, isBackspace);

    if (isBackspace) {
      newOtp[index] = '';
      let nextIndex = index - 1;
      if (nextIndex >= 0) {
        inputRefs.current[nextIndex]?.focus();
      }
      console.log(newOtp)
      setOtp(newOtp)
    } else {
      // Handle other key events if needed
    }
  };

  return (
    <div className="w-[100vw] h-[100vh]">
      <div className="w-full flex h-full justify-center items-center">
        <div className="flex gap-x-3">
          {[0, 1, 2, 3].map((index) => (
            <div key={index}>
              <input
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                value={otp[index]}
                className="w-[48px] h-[48px] border-2 border-black rounded-md pl-3"
                onChange={(e) => handleInput(e, index)}
                onKeyDown={(e) => handleDelete(e, index)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Form;
