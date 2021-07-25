import React, { useState } from "react";
import { NavBar, NavLinks } from "./NavBar";
import styled from "styled-components";
import tw from "twin.macro";

const Wrapper = styled.div`
  background-color: #032935;
  ${tw`pb-3 pt-6 relative h-full overflow-y-auto w-full`}
`;
const NavsMobile = styled.ul((props) => ({
  display: props.open ? "flex" : "none",
  flexDirection: "column",
  alignItems: "start",
  width: "100%",
  // position: "fixed",
  paddingTop: "2.4em",
  marginLeft: "1.8em",
  // background: "#032935",
}));
const SecondWrapper = styled.div`
  ${tw`relative top-5 2xl:top-56 container 2xl:max-width[2000px] lg:mx-auto`}
`;

export const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <Wrapper>
      <NavBar setOpen={setOpen} open={open} />
      <NavsMobile open={open}>
        <NavLinks>
          <a href="/">home</a>
        </NavLinks>
        <NavLinks>
          <a href="/about">about</a>
        </NavLinks>
        <NavLinks>
          <a href="/portfolio">portfolio</a>
        </NavLinks>
        <NavLinks>
          <a href="/contact">contact</a>
        </NavLinks>
      </NavsMobile>
      <SecondWrapper>{children}</SecondWrapper>
    </Wrapper>
  );
};
