import React from "react";

const ChatbotCustomization = ({ customization, setCustomization }) => {
  const handleChange = (key, value) => {
    setCustomization({ ...customization, [key]: value });
  };

  return (
    <div className="panel">
      <h3>Customize Your ChatBot </h3>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          {/* <tr>
            <th style={{ textAlign: "left", padding: "8px" }}>Property</th>
            <th style={{ textAlign: "left", padding: "8px" }}>Value</th>
          </tr> */}
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>
              Button Icon:
            </td>
            <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>
              <input
                type="text"
                value={customization.buttonIcon}
                onChange={(e) => handleChange("buttonIcon", e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>
              Border Color:
            </td>
            <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>
              <input
                type="color"
                value={customization.borderColor}
                onChange={(e) => handleChange("borderColor", e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>
              Border Radius:
            </td>
            <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>
              <input
                type="text"
                value={customization.borderRadius}
                onChange={(e) => handleChange("borderRadius", e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>
              Chat Title Background:
            </td>
            <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>
              <input
                type="color"
                value={customization.chatTitleBgColor}
                onChange={(e) =>
                  handleChange("chatTitleBgColor", e.target.value)
                }
              />
            </td>
          </tr>
          <tr>
            <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>
              Bot Bubble Background:
            </td>
            <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>
              <input
                type="color"
                value={customization.botBubbleBgColor}
                onChange={(e) =>
                  handleChange("botBubbleBgColor", e.target.value)
                }
              />
            </td>
          </tr>
          <tr>
            <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>
              Bot Text Color:
            </td>
            <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>
              <input
                type="color"
                value={customization.botTextColor}
                onChange={(e) => handleChange("botTextColor", e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>
              User Bubble Background:
            </td>
            <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>
              <input
                type="color"
                value={customization.userBubbleBgColor}
                onChange={(e) =>
                  handleChange("userBubbleBgColor", e.target.value)
                }
              />
            </td>
          </tr>
          <tr>
            <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>
              User Text Color:
            </td>
            <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>
              <input
                type="color"
                value={customization.userTextColor}
                onChange={(e) => handleChange("userTextColor", e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>
              Text Font:
            </td>
            <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>
              <select
                name="fontFamily"
                value={customization.textFont}
                onChange={(e) => handleChange("textFont", e.target.value)}
              >
                <option value="Arial">Arial</option>
                <option value="Courier New">Courier New</option>
                <option value="Georgia">Georgia</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Verdana">Verdana</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ChatbotCustomization;
