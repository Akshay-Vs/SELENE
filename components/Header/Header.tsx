import React from "react";
import PreviewCircle from "./PreviewCircle";
import "./style.scss";

const Header = () => {
  return (
    <main className="h-screen w-screen">
      <PreviewCircle />
      <div className="hero">
        <h1>
          Discover
          <br />
          Enchanting
          <br />
          Lighting Solutions
        </h1>
      </div>
    </main>
  );
};

export default Header;