import React from "react";

function CreatedBy() {
  return (
    <marquee
      behavior="scroll"
      direction="left"
      style={{
        marginTop: "100px",
        backgroundColor: "whiteSmoke",
        color: "black",
      }}
    >
      Third React Project Made with 💻 by{" "}
      <a
        style={{
          textDecoration: "underline",
        }}
        href="https://www.github.com/mkhalilhaider"
        target="_blank"
      >
        Muhammad Khalil Haider
      </a>
    </marquee>
  );
}

export default CreatedBy;