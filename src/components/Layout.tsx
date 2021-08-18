import React, { useState } from "react";
import { NavBar, NavLinks } from "./NavBar";
import styled from "styled-components";
import tw from "twin.macro";

const Wrapper = styled.div`
  background-color: #032935;
  ${tw`pb-3 pt-6 relative h-full overflow-y-auto w-full`}
`;

const SecondWrapper = styled.div`
  ${tw`relative top-5 2xl:top-56 container 2xl:max-width[2000px] lg:mx-auto`}
`;

export const Layout = ({ children }) => {
  return (
    <Wrapper>
      <NavBar />
      
      <SecondWrapper>{children}</SecondWrapper>
    </Wrapper>
  );
};
