import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/routes";

function App() {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
