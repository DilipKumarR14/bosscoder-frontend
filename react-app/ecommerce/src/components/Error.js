import React from "react";
import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      Oops Some ERROR !!
      <h1>{err.data}</h1>
      <h1>{err.error.message}</h1>
    </div>
  );
};



export default Error;
