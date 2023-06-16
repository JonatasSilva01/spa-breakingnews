import React from "react";
import { DFlexBetween, NavbarComponentMain, UnorderedList } from "./Styled.components";

const Navbar = () => {
  return (
    <>
      <NavbarComponentMain>
        <DFlexBetween>
            <div>Logo</div>
            <div>
                <UnorderedList>
                    <li><a href="http://">Home</a></li>
                    <li><a href="http://">Search</a></li>
                    <li><a href="http://">Profile</a></li>
                </UnorderedList>
            </div>
        </DFlexBetween>
      </NavbarComponentMain>
    </>
  );
};

export default Navbar;
