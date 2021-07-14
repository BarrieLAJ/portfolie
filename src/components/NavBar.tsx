import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import {HiMenu } from "react-icons/hi"

const Wrapper = styled.div`
  height: calc(100vh - 90vh);
  ${tw`flex mx-auto justify-between lg:px-32 px-6 fixed inset-0 z-10 w-full items-center lg:gap-96 container 2xl:max-width[2000px] 2xl:gap[1100px]`}
`;

const Brand = styled.div`
  a {
    color: #118ab2;
    font-family: "Roboto", sans-serif;
    flex: 1;
    ${tw`text-2xl font-extrabold w-auto h-10 pt-1`}
  }
`;

const Navs = styled.ul`
  /*justify-content: space-evenly;*/
  /* align-content: baseline; */
  flex: 2;
  ${tw`hidden lg:flex items-center gap-16`}
`;
const HambugerMenu = styled.button`
  ${tw`text-white outline-none focus:border-none focus:outline-none focus:ring-2 ring-blue-300 rounded lg:hidden`}
`;
const NavLinks = styled.li`
  a {
    ${tw`text-gray-100 text-lg p-2 hover:text-white`}
    :hover {
      background-color: #118ab2;
    }
  }
`;

export const NavBar = () => {
  return (
    <Wrapper>
      <Brand>
        <a href="/">Alhaji</a>
      </Brand>
      <HambugerMenu>
      <HiMenu className="text-current h-8 w-8" />
      </HambugerMenu>
      <Navs>
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
      </Navs>
    </Wrapper>
  );
};
