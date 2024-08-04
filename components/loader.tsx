import { Typography } from "@mui/material";
import React from "react";

export const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p
        style={{
          position: "relative",
          margin: "2rem auto 0",
          textAlign: "center",
          fontFamily: "Amatic SC",
          fontSize: "1.5rem",
          color: "#333",
          opacity: "0.75",
          animation: "pulse 2.5s linear infinite",
        }}
      >
        Cooking up ideas..
      </p>
      <div id="cooking">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div id="area">
          <div id="sides">
            <div id="pan"></div>
            <div id="handle"></div>
          </div>
          <div id="pancake">
            <div id="pastry"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
