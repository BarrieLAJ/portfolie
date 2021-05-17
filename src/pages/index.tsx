import * as React from "react";
import { Layout } from "../components/Layout";
import styled from 'styled-components'
import tw from 'twin.macro'

//styles
import "../styles/global.css";
import { LeftContent } from "../components/IndexPage/LeftContent";
import { RightContent } from "../components/IndexPage/RightContent";


const Wrapper = styled.div`
  ${tw`flex mx-32 max-w-5xl mt-16 gap-56`}
  height: calc(100vh - 25vh);
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
