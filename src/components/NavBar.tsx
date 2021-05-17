import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Wrapper = styled.div`
  height: calc(100vh - 90vh);
  ${tw`flex mx-auto justify-between px-32 fixed inset-0 z-10 w-full items-center gap-96`}
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
  ${tw`flex items-center gap-16`}
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
