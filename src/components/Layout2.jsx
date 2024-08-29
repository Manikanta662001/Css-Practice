import React from "react";
import "./Layout2.css";
const Layout2 = () => {
  return (
    <>
      <ul className="navbar">
        <li>HOME</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
      <div className="header-container">
        <h1>Header</h1>
      </div>
      <div className="content-container">
        <ul className="sidebar-container">
          <li>Content</li>
          <li>Content</li>
          <li>Content</li>
          <li>Content</li>
        </ul>
        <div className="data-container">
          <h1>Heading 1</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            obcaecati tempore, est impedit odio odit ab nemo consequatur debitis
            incidunt iusto ad amet repellat vel, placeat expedita ea culpa
            minus. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Aperiam obcaecati tempore, est impedit odio odit ab nemo consequatur
            debitis incidunt iusto ad amet repellat vel, placeat expedita ea
            culpa minus.Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Aperiam obcaecati tempore, est impedit odio odit ab nemo
            consequatur debitis incidunt iusto ad amet repellat vel, placeat
            expedita ea culpa minus.Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Aperiam obcaecati tempore, est impedit odio odit
            ab nemo consequatur debitis incidunt iusto ad amet repellat vel,
            placeat expedita ea culpa minus.Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Aperiam obcaecati tempore, est impedit
            odio odit ab nemo consequatur debitis incidunt iusto ad amet
            repellat vel, placeat expedita ea culpa minus.Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Aperiam obcaecati tempore, est
            impedit odio odit ab nemo consequatur debitis incidunt iusto ad amet
            repellat vel, placeat expedita ea culpa minus.
          </p>
          <div className="flex-container">
            <div className="second-heading">
              <h3>Heading 2</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque,
                tempore qui, sunt alias porro recusandae quis ex perspiciatis
                doloribus non animi, fuga dolorum maiores quidem beatae soluta
                voluptatum magnam enim?
              </p>
            </div>
            <div>
              <h3>Heading 3</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque,
                tempore qui, sunt alias porro recusandae quis ex perspiciatis
                doloribus non animi, fuga dolorum maiores quidem beatae soluta
                voluptatum magnam enim?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout2;
