import React from "react";
import "./hardpart.css";

const Hardpart = () => {
  const blocks = [
    {
      prop: "blocks",
      heading: "Break It down",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      prop: "blocks",
      heading: "Work Your Way Up",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      prop: "blocks",
      heading: "You Can Do It",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
  ];
  return (
    <div className="container">
      <div className="part-one">
        <h3>It doesn't have to be so hard</h3>
        <p className="para-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam
        </p>
        <img
          src="https://kevin-last-challenge.netlify.app/the-image.jpg"
          width="80%"
          height="auto"
        />
        <p className="para-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, rem
          ipsa velit aliquam consequuntur accusamus, dolorum ullam, incidunt
          fugiat quo ex maiores odit exercitationem distinctio autem tenetur
          soluta? Esse, maiores.
        </p>
      </div>
      <div className="part-two">
        {blocks.map(({ prop, heading, content }) => {
          return (
            <div className={prop}>
              <h4>{heading}</h4>
              <p>{content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hardpart;
