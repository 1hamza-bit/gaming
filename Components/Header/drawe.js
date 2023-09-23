// components/Sidebar.js

import { useState } from 'react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="toggle-btn" onClick={toggleSidebar}>
          Toggle Sidebar
        </button>
      </div>
      <div
        className={`backdrop ${isOpen ? 'open' : ''}`}
        onClick={toggleSidebar}
      ></div>
    </>
  );
}
