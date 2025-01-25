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

const TodoListItem = ({
  item,
  state,
  onStateChange,
  showCompleted,
  onStartTask,
}) => {
  const [timeSpent, setTimeSpent] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    let timer;
    if (state === "in-progress") {
      setTimerActive(true);
      timer = setInterval(() => {
        setTimeSpent((prev) => prev + 1);
      }, 1000);
    } else {
      setTimerActive(false);
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [state]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  const renderIcon = () => {
    switch (state) {
      case "not-started":
        return <Circle size={24} color="#d4d4d4" strokeWidth={2} />; // gray-300
      case "in-progress":
        return <Clock size={24} color="#fafafa" />; // gray-50
      case "completed":
        return (
          <div
            style={{
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              backgroundColor: "#262626", // gray-800
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Check size={16} color="#fafafa" /> {/* gray-50 */}
          </div>
        );
      case "event":
        return <Calendar size={24} color="#d4d4d4" />; // gray-300
      default:
        return null;
    }
  };

  const handleClick = () => {
    if (state === "not-started") {
      onStateChange("in-progress");
      onStartTask(item);
    } else if (state === "in-progress") {
      onStateChange("completed");
    } else if (state === "completed") {
      onStateChange("not-started");
    }
  };

  if (!showCompleted && state === "completed") {
    return null; // Hide completed tasks if `showCompleted` is false
  }

  const itemStyles = {
    display: "flex",
    alignItems: "center",
    height: "64px",
    padding: "0 16px",
    borderRadius: "8px",
    marginBottom: "8px",
    fontSize: "17px",
    lineHeight: "22px",
    fontWeight: 400,
    cursor: "pointer",
  };

  const dynamicStyles = {
    backgroundColor: state === "in-progress" ? "#262626" : "#f5f5f5", // gray-800 or gray-100
    color:
      state === "completed"
        ? "#a3a3a3"
        : state === "in-progress"
        ? "#fafafa"
        : "#171717", // gray-400, gray-50, or gray-900
  };

  return (
    <li style={{ ...itemStyles, ...dynamicStyles }} onClick={handleClick}>
      <div style={{ marginRight: "12px" }}>{renderIcon()}</div>
      <div>
        <span
          style={{
            textDecoration: state === "completed" ? "line-through" : "none",
            textDecorationColor: "#a3a3a3", // gray-400
          }}
        >
          {item}
        </span>
        {(state === "in-progress" || state === "completed") && (
          <div
            style={{
              fontStyle: "italic",
              fontSize: "14px",
              lineHeight: "18px",
              color: state === "completed" ? "#a3a3a3" : "#fafafa", // gray-400 or gray-50
              marginTop: "2px", // Reduced margin for better spacing
            }}
          >
            {formatTime(timeSpent)}
          </div>
        )}
      </div>
    </li>
  );
};

const TodoList = ({ title, items, showCompleted, onStartTask }) => {
  const [todoStates, setTodoStates] = useState(items.map((item) => item.state));

  const handleStateChange = (index, newState) => {
    const updatedStates = [...todoStates];
    updatedStates[index] = newState;
    setTodoStates(updatedStates);
  };

  return (
    <div style={{ marginBottom: "24px" }}>
      <h2
        style={{
          fontSize: "24px",
          lineHeight: "32px",
          fontWeight: 700,
          color: "#0a0a0a", // gray-950
          marginBottom: "16px",
        }}
      >
        {title}
      </h2>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {items.map((item, index) => (
          <TodoListItem
            key={index}
            item={item.text}
            state={todoStates[index]}
            onStateChange={(newState) => handleStateChange(index, newState)}
            showCompleted={showCompleted}
            onStartTask={onStartTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
