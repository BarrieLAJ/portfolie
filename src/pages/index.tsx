import * as React from "react";
import { Layout } from "../components/Layout";
import styled from 'styled-components'
import tw from 'twin.macro'

//styles
import "../styles/global.css";
import { LeftContent } from "../components/IndexPage/LeftContent";
import { RightContent } from "../components/IndexPage/RightContent";


const Wrapper = styled.div`
  ${tw`lg:flex lg:mx-28 mt-16 lg:height[calc(100vh - 25vh)] xl:gap-28 sm:gap-56`}
`




// markup
const IndexPage = () => {
  return (
    <div className="h-screen">
      <Layout>
        <Wrapper>
          <LeftContent />
          <RightContent />
        </Wrapper>
      </Layout>
    </div>
  );
};

export default IndexPage;
