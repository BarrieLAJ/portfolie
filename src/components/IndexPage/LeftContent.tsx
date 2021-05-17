import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { GrFacebookOption, GrGithub, GrTwitter } from "react-icons/gr";

const Wrapper = styled.div`
  ${tw`w-96 relative`}
`;
const Banner = styled.div`
  padding: 1em;
`;

const BannerName = styled.div`
  ${tw`font-bold text-6xl text-white lowercase tracking-wider mb-0 text-gray-100 leading-normal`}
  .coloured {
    color: #118ab2;
    /* ${tw``} */
  } ;
`;

const BannerAbout = styled.p`
  ${tw`mt-12 py-2 text-sm font-semibold w-10/12 h-28 leading-loose tracking-wide text-gray-100`}
`;
const AboutLink = styled.a`
  ${tw`block mt-1 text-2xl tracking-wider lowercase`}
  color: #118AB2;
`;

const Footer = styled.div`
  ${tw`absolute flex justify-around w-5/6 bottom-0 gap-4 items-center flex-nowrap`}
`;

const Socials = styled.a`
  ${tw`flex-1 block py-2 text-gray-100`}
`;

export const LeftContent = () => {
  return (
    <Wrapper>
      <Banner>
        <BannerName>
          barrie <span className="coloured">abubakarr</span>
        </BannerName>
        <BannerAbout>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
          quibusdam. Dolore, asperiores enim minima iusto eaque
        </BannerAbout>
        <AboutLink href="/about">Know More {">"}</AboutLink>
      </Banner>
      <Footer>
        <Socials target="_black" href="www.twitter.com/@barrie_laj">
          <GrTwitter className="inline text-current h-4 w-4 mb-px" />
          <span className="ml-1">Twitter</span>
        </Socials>
        <Socials target="_black" href="www.github.com/@BarrieLAJ">
          <GrGithub className="inline text-current h-4 w-4 mb-px" />
          <span className="ml-1">Github</span>
        </Socials>
        <Socials target="_black" href="m.facebook.com">
          <GrFacebookOption className="inline text-current h-4 w-4 mb-px" />
          <span className="ml-1">Facebook</span>
        </Socials>
      </Footer>
    </Wrapper>
  );
};
