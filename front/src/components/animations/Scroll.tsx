import React from "react";

// Define keyframes in a separate style element
const keyframesStyle = `
  @keyframes rotate {
    from { transform: rotate(360deg); }
  }
`;

const Scroll = () => {
  return (
    <div style={{ margin: 0 }}>
      <style>{keyframesStyle}</style>
      <div
        id="circle"
        style={{
          position: "relative",
          width: "100%",
          paddingBottom: "100%",
          overflow: "hidden",
        }}
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="300px"
          height="300px"
          viewBox="0 0 300 300"
          enableBackground="new 0 0 300 300"
          xmlSpace="preserve"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "540px",
            animation: "rotate 5s infinite linear reverse",
          }}
        >
          <defs>
            <path
              id="circlePath"
              d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0"
            />
          </defs>
          <g>
            <use xlinkHref="#circlePath" fill="none" />
            <text
              fill="#000"
              style={{
                fontFamily: "'Helvetica Neue', Arial",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              <textPath xlinkHref="#circlePath">
                Scroll down to find out more! Scroll down to find out more!
              </textPath>
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Scroll;
