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

const CurrentWeek = () => {
  const weekDays = [
    { day: "Mon", date: 24, isSelected: true },
    { day: "Tue", date: 25 },
    { day: "Wed", date: 26 },
    { day: "Thu", date: 27 },
    { day: "Fri", date: 28 },
    { day: "Sat", date: 29 },
    { day: "Sun", date: 30 },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "24px 0",
      }}
    >
      {weekDays.map((weekday, index) => (
        <div
          key={index}
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: weekday.isSelected ? "#0a0a0a" : "#ffffff",
            fontFamily: "'IBM Plex Sans', sans-serif",
            fontSize: "11px",
            fontWeight: 500,
            lineHeight: "14px",
            color: weekday.isSelected ? "#fafafa" : "#404040", // gray-50 or gray-700
          }}
        >
          <span>{weekday.day}</span>
          <span
            style={{
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "20px",
              color: weekday.isSelected ? "#fafafa" : "#0a0a0a", // gray-50 or gray-950
            }}
          >
            {weekday.date}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CurrentWeek;
