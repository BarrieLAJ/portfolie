import * as React from "react";
import { Layout } from "../components/Layout";
import styled from "styled-components";
import tw from "twin.macro";
import LeftContent from "../components/AboutPage/LeftContent";

const Wrapper = styled.div`
  ${tw`
  mt-12 lg:mx-28 lg:flex justify-between
 `}
`;

const AboutPage = () => {
  return (
    <div className="h-screen">
      <Layout>
        <Wrapper>
          <LeftContent />
        </Wrapper>
      </Layout>
    </div>
  );
};

export default AboutPage;
