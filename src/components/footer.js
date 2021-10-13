import React from "react";
import "./footer.css";

const Footer = () => {
  const links = [
    {
      prop: "links",
      heading: "Getting Around",
      prop_2: "second-link",
      nav: ["Home", "About", "Contact", "Sitemap"],
    },

    {
      prop: "links",
      heading: "Other Things",
      prop_2: "second-link",
      nav: ["Home", "About", "Contact", "Sitemap"],
    },

    {
      prop: "links",
      heading: "More",
      prop_2: "second-link",
      nav: ["Home", "About", "Contact", "Sitemap"],
    },
  ];

  return (
    <footer>
      <h2>Just scratching the surface</h2>
      <div class="footer-flex">
        <div class="footer-one">
          <h3>About our company</h3>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </span>
        </div>
        <div class="footer-two">
          {links.map(({ prop, heading, prop_2, nav }) => {
            return (
              <div className={prop}>
                <h5>{heading}</h5>
                {nav.map((sub_heading) => {
                  return (
                    <a className={prop_2} href="#">
                      {sub_heading}
                    </a>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
