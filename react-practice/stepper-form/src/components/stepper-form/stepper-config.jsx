"use client";

import Basic from "./basic";
import Info from "./info";
import Otp from "./otp";
import Patient from "./patinet";
import Submission from "./submission";
import Time from "./time";

export const stepConfig = [
  {
    step: "Basic Page",
    id : 1,
    component: (props) => <Basic {...props} />,
    children: [
      {
        step: "Patient Page",
        id : 1.1,
        component: () => <Patient />,
      },
      {
        step: "Otp Page",
        id : 1.2,
        component: () => <Otp />,
      },
    ],
  },
  {
    step: "Info Page",
    id : 2,
    component: () => <Info />,
  },
  {
    step: "Time page",
    id : 3,
    component: () => <Time />,
  },
  {
    step: "Submission page",
    id : 4,
    component: () => <Submission />,
  },
];