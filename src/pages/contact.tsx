import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Layout } from "../components/Layout";

const Wrapper = styled.div`
    ${tw`
    mt-12 lg:mx-28 lg:flex justify-between
    `}
`;

const ContactPage = () => {
  return (
    <div className="h-screen">
      <Layout>
        <Wrapper>
          
        </Wrapper>
      </Layout>
    </div>
  );
};

export default ContactPage;
