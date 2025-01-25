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

const ChecklistItem = ({ item, isChecked, onToggle }) => {
  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "48px",
        padding: "0 16px",
        backgroundColor: "#f5f5f5", // gray-100
        borderRadius: "8px",
        marginBottom: "8px",
        fontSize: "17px",
        lineHeight: "22px",
        fontWeight: 400,
        color: isChecked ? "#a3a3a3" : "#171717", // gray-400 or gray-900
        textDecoration: isChecked ? "line-through" : "none",
        textDecorationColor: isChecked ? "#a3a3a3" : "transparent", // gray-400 for line-through
        cursor: "pointer",
      }}
      onClick={onToggle}
    >
      <div
        style={{
          width: "16px",
          height: "16px",
          borderRadius: "2px",
          border: `2px solid ${isChecked ? "#262626" : "#e5e5e5"}`, // gray-800 or gray-200
          backgroundColor: isChecked ? "#262626" : "#ffffff", // gray-800 or white
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginRight: "12px",
        }}
      >
        {isChecked && <Check size={12} color="#fafafa" />} {/* gray-50 */}
      </div>
      <span>{item}</span>
    </li>
  );
};

const Checklist = ({ title, items }) => {
  const [checkedItems, setCheckedItems] = useState(
    Array(items.length).fill(false)
  );
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleItem = (index) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = !updatedCheckedItems[index];
    setCheckedItems(updatedCheckedItems);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div style={{ marginBottom: "24px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
          marginBottom: "16px",
        }}
        onClick={toggleCollapse}
      >
        <h2
          style={{
            fontSize: "24px",
            lineHeight: "32px",
            fontWeight: 700,
            color: "#0a0a0a", // gray-950
            margin: 0,
          }}
        >
          {title}
        </h2>
        {isCollapsed ? (
          <ChevronDown
            size={28}
            color="#0a0a0a"
            style={{ verticalAlign: "middle" }}
          />
        ) : (
          <ChevronUp
            size={28}
            color="#0a0a0a"
            style={{ verticalAlign: "middle" }}
          />
        )}
      </div>
      <div
        style={{
          maxHeight: isCollapsed ? 0 : "500px",
          overflow: "hidden",
          transition: "max-height 0.2s ease-in-out", // Snappier transition
        }}
      >
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {items.map((item, index) => (
            <ChecklistItem
              key={index}
              item={item}
              isChecked={checkedItems[index]}
              onToggle={() => toggleItem(index)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Checklist;
