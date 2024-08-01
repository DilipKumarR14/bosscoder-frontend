/**
 * what is required input and output
 */

import React, { useState, useEffect } from "react";

const UseOnlineStatusHook = () => {
  
    const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  return onlineStatus;
};

export default UseOnlineStatusHook;
