import React from "react";

const ErrorPage = (props) => {
  return (
    <div>
      Something went wrong!!!
      {props.error.response.status}
      {props.error.response.statusText}
    </div>
  );
};

export default ErrorPage;
