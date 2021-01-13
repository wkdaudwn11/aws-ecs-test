import React, { useState } from "react";
import axios from "axios";

const Button = () => {
  const [data, setData] = useState(0);
  const [responseData, setResponseData] = useState(null);

  const handleClick = () => {
    let url = "http://localhost:4000/api/test";

    if (process.env.REACT_APP_STAGE !== "local") {
      // url = ""
    }

    const requestData = {
      data: data + 1,
    };
    axios
      .post(url, requestData)
      .then((res) => {
        setData(data + 1);
        setResponseData(res.data);
      })
      .catch((err) => {
        console.log(err);
        setResponseData(null);
      });
  };

  return (
    <>
      <button
        style={{
          cursor: "pointer",
          padding: "10px 20px",
          fontSize: "20px",
          fontWeight: "bold",
        }}
        onClick={handleClick}
      >
        Click: {data}
      </button>
      {responseData && (
        <>
          <br />
          <h3>Response</h3>
          ok: {String(responseData.ok)}
          <br />
          data: {String(responseData.data)}
        </>
      )}
    </>
  );
};

export default Button;
