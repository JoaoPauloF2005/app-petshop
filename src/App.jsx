import React from "react";
import Sidebar from './layout/Sidebar'
import Stepper from "./components/Stepper";
import Login from "./components/Login";


export default function App() {
  return (
    /*<div className="bg-gray-900 flex flex-col gap-10 h-screen items-center justify-center">
      <Stepper />
    </div>*/
    
    /* Login */
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <Login />
      </div>
      <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
        <img src="./src/assets/cachorro.png"></img>
      </div>
    </div>

  )
}