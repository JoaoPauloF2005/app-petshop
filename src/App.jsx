import React from "react";
import Sidebar from './layout/Sidebar'
import Stepper from "./components/Stepper";


export default function App() {
  return (
    <div className="bg-gray-900 flex flex-col gap-10 h-screen items-center justify-center">
    <Stepper />
  </div>
  )
}