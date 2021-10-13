import React from "react";
import "./columns.css";

const Columns = () => {
  const column = [
    {
      prop: "text-center",
      heading: "Mobile-first",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
      prop: "text-center",
      heading: "Efficient",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
      prop: "text-center",
      heading: "Done Right",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
  ];
  return (
    <div className="column">
      {column.map(({ heading, content, prop }) => {
        return (
          <>
            <div className={prop}>
              <h2>{heading}</h2>
              <p>{content}</p>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Columns;
