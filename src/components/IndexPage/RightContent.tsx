import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { BlogItem } from "./BlogItem";

const Wrapper = styled.div`
  ${tw`relative ml-auto lg:w-96 mt-6 lg:mt-0 2xl:w-5/12`}
`;
const SuperBlogsWrapper = styled.div`
${tw`overflow-x-auto lg:overflow-x-auto 2xl:w-full`}
`
const BlogsWrapper = styled.div`
  ${tw`lg:w-full min-w-max lg:h-96 2xl:height[900px] m-2 p-3 lg:max-w-lg overflow-x-scroll lg:overflow-hidden flex flex-nowrap lg:flex-col`}
`;

const Footer = styled.div`
  ${tw`absolute bottom-0 right-5 hidden lg:flex justify-around items-center space-x-8`}
`;
const Scroller = styled.button`
  ${tw`text-gray-100 text-lg focus:outline-none rounded-full p-2 m-2`}
  background-color: #153944;
  &:hover {
    background-color: #118ab2;
  }
`;

export const RightContent = () => {
  return (
    <Wrapper>
      <h2 className="lg:hidden text-white text-2xl ml-4">Writings</h2>
      <SuperBlogsWrapper>
        <BlogsWrapper>
          {Array(1, 2, 3).map((id) => (
            <BlogItem item={id} key={`${id}`} />
          ))}
        </BlogsWrapper>
      </SuperBlogsWrapper>
      <Footer>
        <Scroller>
          <HiChevronUp className='h-20 w-20 text-current' />
        </Scroller>
        <Scroller>
          <HiChevronDown className='h-20 w-20 text-current' />
        </Scroller>
      </Footer>
    </Wrapper>
  );
};
