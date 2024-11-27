import React, { useState } from "react";
import CustomizationPanel from "./components/ChatbotCustomization";
import Chatbot from "./components/Chatbot";
import "./App.css";

const App = () => {
  const [customization, setCustomization] = useState({
    buttonIcon: "💬",
    borderColor: "#000000",
    borderRadius: "10px",
    chatTitleBgColor: "#007BFF",
    botBubbleBgColor: "#f1f1f1",
    botTextColor: "#000000",
    userBubbleBgColor: "#007BFF",
    userTextColor: "#ffffff",
    textFont: "Arial",
  });

  return (
    <div className="app">
      <CustomizationPanel customization={customization} setCustomization={setCustomization} />
      <Chatbot customization={customization} />
    </div>
  );
};

export default App;
