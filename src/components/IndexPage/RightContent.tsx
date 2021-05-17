import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { BlogItem } from "./BlogItem";

const Wrapper = styled.div`
  ${tw`relative ml-auto w-96`}
`;

const BlogsWrapper = styled.div`
  ${tw`w-full h-96 m-2 p-3 max-w-lg overflow-hidden`}
`;

const Footer = styled.div`
  ${tw`absolute bottom-0 right-5 flex justify-around items-center space-x-8`}
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
      <BlogsWrapper>
        {Array(1, 2, 3).map((id) => (
          <BlogItem item={id} key={`${id}`} />
        ))}
      </BlogsWrapper>
      <Footer>
        <Scroller>
          <HiChevronUp className='h-6 w-6 text-current' />
        </Scroller>
        <Scroller>
          <HiChevronDown className='h-6 w-6 text-current' />
        </Scroller>
      </Footer>
    </Wrapper>
  );
};
