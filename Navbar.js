import React, { useState, useEffect } from "react";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/700.css";
import {
  Menu,
  Eye,
  EyeOff,
  Check,
  Calendar,
  Clock,
  Circle,
  CircleCheck,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const Navbar = ({ showCompleted, toggleShowCompleted }) => {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "64px",
        boxShadow: "0 3px 6px rgba(32, 33, 36, 0.16)",
        padding: "0 24px",
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        backgroundColor: "#ffffff",
        zIndex: 1000,
      }}
    >
      <Menu size={24} color="#0a0a0a" />
      {showCompleted ? (
        <EyeOff
          size={24}
          color="#0a0a0a"
          onClick={toggleShowCompleted}
          style={{ cursor: "pointer" }}
        />
      ) : (
        <Eye
          size={24}
          color="#0a0a0a"
          onClick={toggleShowCompleted}
          style={{ cursor: "pointer" }}
        />
      )}
    </nav>
  );
};

export default Navbar;
