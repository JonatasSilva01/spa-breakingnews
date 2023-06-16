import React from "react";
import { FooterComponent, FooterFlexComponent } from "./Styled.components";

const Footer = () => {
  return (
    <FooterComponent>
      <FooterFlexComponent>
        <h3>Ola mundo!</h3>
        <a href="http://">linkedin</a>
      </FooterFlexComponent>
    </FooterComponent>
  );
};

export default Footer;
