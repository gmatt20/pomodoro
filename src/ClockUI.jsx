import React, { useState, useEffect} from "react";
import Time from "./Time.jsx";

export default function ClockUI(){

  return(
    <div className="grid grid-cols-1 border-2 border-white p-4">
          <div className="m-4">
            <h1 className="text-3xl"><Time></Time></h1>
          </div>
    </div>
  );
}
