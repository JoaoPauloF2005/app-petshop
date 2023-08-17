import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Login from "./pages/Login";
import Sidebar from './layout/Sidebar'

const Routes = () => {
   return(
       <BrowserRouter>
            <Route element={<Login />} path="/login" exact />
           <Route component = { Sidebar }  path="/sidebar" exact />


       </BrowserRouter>
   )
}

export default Routes;