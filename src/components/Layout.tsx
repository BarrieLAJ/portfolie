import React from "react";
import { NavBar } from "./NavBar";
import styled from "styled-components";
import tw from "twin.macro";

const Wrapper = styled.div`
  background-color: #032935;
  ${tw`pb-3 pt-6 relative h-full overflow-y-auto`}
`;

export const Layout = ({ children }) => {
  return (
    <Wrapper>
      <NavBar />
      <div className="absolute top-14">{children}</div>
    </Wrapper>
  );
};
