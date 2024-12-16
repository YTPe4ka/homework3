import React, { useState } from "react";
import "../components/style.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="hamburger" onClick={toggleSidebar}>
        ☰
      </button>

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul>
          <li>🏠 Главное</li>
          <li>📺 Подписки</li>
          <li>🕒 История</li>
          <li>⚙️ Настройки</li>
          <li>🚪 Выход</li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
