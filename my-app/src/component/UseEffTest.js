import React from "react";
import { useEffect } from "react";
import UseOnlineStatusHook from "./UseOnlineStatusHook";
function UseEffTest() {
  //   useEffect(() => {
  //     console.log("inside effe");
  //   }, []);

  //   console.log("outside effect");

  const onlineStatus = UseOnlineStatusHook();

  return <div>Online Status : {onlineStatus ? "YOU ARE ONLINE" : "YOU ARE OFFLINE"}</div>;
}

export default UseEffTest;

//1. no dependency value is not passed then useEffect would be called as many times components renders
//2. empty dependency value - useEffect will be called only once
//3. non empty dependency array - useEffect would be called as many times as mentioned components re-renders or updates
