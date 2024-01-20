"use client"
import React, { createContext, useContext, useState } from "react";
import Dashboard from "./Dashboard";
import { DashboardContext } from "./DashboardContext";

type Props = {};
type User = {
  name: string;
  email: string;
};
function Home({}: Props) {
//   const [user, setUser] = useState<User>({
//     name: "rohit",
//     email: "rohit@gmail.com",
//   });
  const user = useContext(DashboardContext)
  
  return (
    <div className="min-w-[100%] min-h-[100%] p-5 border-2px border-black">
      <DashboardContext.Provider value={user}>
        <Dashboard />
      </DashboardContext.Provider>
    </div>
  );
}

export default Home;
