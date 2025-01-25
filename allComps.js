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

const App = () => {
  const [showCompleted, setShowCompleted] = useState(true);
  const [currentTask, setCurrentTask] = useState(null);

  const toggleShowCompleted = () => {
    setShowCompleted((prev) => !prev);
  };

  const handleStartTask = (taskText) => {
    if (currentTask) {
      currentTask.state = "completed"; // Automatically mark previous task as completed
    }
    setCurrentTask({ text: taskText, timeSpent: "1h 31m" }); // Placeholder time
  };

  const morningChecklist = [
    "Get a cup of coffee",
    "Be grateful",
    "Process inbox",
    "Review & update calendar",
    "Check mailbox",
    "...",
  ];

  const morningTodos = [
    { text: "Weekly meeting @ 9:30", state: "event" },
    { text: "Order birthday balloons", state: "completed" },
    { text: "Work on Apple app", state: "in-progress" },
    { text: "Call the plumber", state: "not-started" },
    { text: "Buy groceries", state: "not-started" },
    { text: "Prepare for presentation", state: "not-started" },
  ];

  return (
    <div
      className="px-6 mx-auto"
      style={{
        fontFamily: "'IBM Plex Sans', sans-serif",
        maxWidth: "390px",
        width: "100%",
        paddingTop: "64px",
        backgroundColor: "#ffffff",
      }}
    >
      <Navbar
        showCompleted={showCompleted}
        toggleShowCompleted={toggleShowCompleted}
      />
      <CurrentWeek />
      {currentTask && <CurrentTask task={currentTask} />}
      <Checklist title="Before Takeoff Checklist" items={morningChecklist} />
      <TodoList
        title="Today – Morning"
        items={morningTodos}
        showCompleted={showCompleted}
        onStartTask={handleStartTask}
      />
    </div>
  );
};

export default App;
