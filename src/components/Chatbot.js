import React from "react";

const Chatbot = ({ customization }) => {
  const {
    buttonIcon,
    borderColor,
    borderRadius,
    chatTitleBgColor,
    botBubbleBgColor,
    botTextColor,
    userBubbleBgColor,
    userTextColor,
    textFont,
  } = customization;

  return (
    <div
      className="chat-bot"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "300px", 
        height: "500px",
        border: `2px solid ${borderColor}`,
        borderRadius: borderRadius,
        backgroundColor: "#fff", 
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", 
        overflow: "hidden", 
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        className="chat-title"
        style={{
          backgroundColor: chatTitleBgColor,
          fontFamily: textFont,
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ marginRight: "10px" }}>{buttonIcon}</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ color: "white"}}>ChatBot</span>
          <p style={{ margin: 0 , color: "white"}}>Demo boot</p>
        </div>
      </div>

      <div
        className="chat-area"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "10px",
          overflowY: "auto",
          flex: 1, 
        }}
      >
        
        <div
          className="user-bubble"
          style={{
            backgroundColor: userBubbleBgColor,
            color: userTextColor,
            fontFamily: textFont,
            
          }}
        >
          I have a query.
        </div>

        <div
  style={{
    display: "flex",
    alignItems: "center", 
    marginBottom: "10px", 
  }}
>
 
  <span style={{ marginRight: "10px" }}>{buttonIcon}</span>

 
  <div
    className="bot-bubble"
    style={{
      backgroundColor: botBubbleBgColor,
      color: botTextColor,
      fontFamily: textFont,
    }}
  >
    Hello, how can I help you?
  </div>
</div>

      </div>

      <div
        style={{
          position: "relative",
          width: "100%",
          boxShadow: "0px -4px 6px rgba(0, 0, 0, 0.2)",
        }}
      >
        <input
          type="text"
          placeholder="Ask us Anything..."
          style={{
            width: "100%",
            padding: "10px 40px 10px 10px",
            fontFamily: textFont,
            fontSize: "14px",
            boxSizing: "border-box",
          }}
        />
        <button
          style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            padding: "5px 10px",
            backgroundColor: chatTitleBgColor,
            color: "white",
            fontFamily: textFont,
            fontSize: "12px",
            border: "none",
            borderRadius: "50%",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
