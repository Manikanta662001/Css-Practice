import React from "react";
import "./Layout1.css";
const Layout1 = () => {
  return (
    <div>
      <div className="header-container-1">
        <h1>Header</h1>
      </div>
      <div className="column-container">
        <div className="column column-1">Column 1</div>
        <div className="column column-2">Column 2</div>
        <div className="column column-3">Column 3</div>
      </div>
      <div className="footer-container">
        <h1>Footer</h1>
      </div>
    </div>
  );
};

export default Layout1;
