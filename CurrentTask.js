import React from "react";
import React, { useState, useEffect } from "react";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/700.css";

const CurrentTask = ({ task }) => {
  if (!task) return null;

  return (
    <div
      style={{
        backgroundColor: "#0a0a0a",
        borderRadius: "12px",
        padding: "12px",
        color: "#fafafa",
        minHeight: "112px",
        marginBottom: "24px",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span
        style={{
          position: "absolute",
          top: "12px",
          left: "12px",
          fontSize: "13px",
          lineHeight: "17px",
          fontWeight: 500,
        }}
      >
        Now
      </span>
      <span
        style={{
          fontSize: "24px",
          lineHeight: "32px",
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        {task.text}
      </span>
      <span
        style={{
          position: "absolute",
          top: "12px",
          right: "12px",
          fontSize: "13px",
          lineHeight: "17px",
          fontWeight: 500,
          fontStyle: "italic",
        }}
      >
        {task.timeSpent}
      </span>
    </div>
  );
};

export default CurrentTask;
