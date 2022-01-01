import React, { useState } from "react";
import styled, {keyframes} from "styled-components";
import tw from "twin.macro";
import { HiMenu } from "react-icons/hi";

const animation = keyframes`
  from {
    height: 0;
  }
  to {
    height: max-content;
  }
`

const Wrapper = styled.div`
  height: max-content;
  background-color: #032935;
  ${tw`relative shadow-lg lg:shadow-none py-3  mx-auto fixed inset-0 z-10 container  2xl:max-width[2000px]`}
`;

const NavWrapper = styled.div`
  height: auto;
  max-height: 600px;
  ${tw`flex justify-between my-0 py-1 lg:px-32 px-6 w-full items-center lg:gap-96  2xl:gap[1100px] `}
  /* &.open {
    max-height: auto;
    transition: max-height 400ms ease;
  } */
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
  flex: 2;
  ${tw`hidden lg:flex items-center gap-16`}
`;

const NavsMobile = styled.ul`
  flex-direction: column;
  align-items: start;
  /* animation: ${animation} 1s cubic-bezier(0.6, -0.02, 0.34, 1.07); */
  width: 100%;
  height: 0;
  padding-top: 1em;
  margin-left: 0.8em;
  transition: height 1s ease;
  &.open{
    height: max-content;
  }
`;
const HambugerMenu = styled.button`
  ${tw`text-white outline-none focus:border-none mb-2 focus:outline-none focus:ring-2 ring-blue-300 rounded lg:hidden`}
`;
export const NavLinks = styled.li`
  a {
    ${tw`text-gray-100 text-xl md:text-lg px-4 capitalize lg:lowercase sm:p-2 hover:text-white sm:w-max w-full py-2 lg:inline block rounded`}
    :hover {
      background-color: #118ab2;
    }
  }
`;

export const NavBar = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <Wrapper>
      <NavWrapper className={`${open ? "open" : ""}`}>
        <Brand>
          <a href="/">Alhaji</a>
        </Brand>
        <HambugerMenu onClick={() => setOpen(!open)}>
          <HiMenu className="text-current h-9 w-12 border border-gray-100 rounded" />
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
      </NavWrapper>
      {open && (
        <NavsMobile className={`${open ? "open" : ""}`}>
          <NavLinks className="w-full">
            <a className="w-full" href="/">
              home
            </a>
          </NavLinks>
          <NavLinks className="w-full">
            <a className="w-full" href="/about">
              about
            </a>
          </NavLinks>
          <NavLinks className="w-full">
            <a className="w-full" href="/portfolio">
              portfolio
            </a>
          </NavLinks>
          <NavLinks className="w-full">
            <a className="w-full" href="/contact">
              contact
            </a>
          </NavLinks>
        </NavsMobile>
      )}
    </Wrapper>
  );
};
