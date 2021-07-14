import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { GrFacebookOption, GrGithub, GrTwitter } from "react-icons/gr";

const Wrapper = styled.div`
  ${tw`lg:w-96 w-full relative 2xl:w-5/12`}
`;
const Banner = styled.div`
  padding: 1em;
`;

const BannerName = styled.div`
  ${tw`font-bold text-6xl 2xl:font-size[10rem] text-white lowercase tracking-wider mb-0 text-gray-100 leading-normal`}
  .coloured {
    color: #118ab2;
    /* ${tw``} */
  } ;
`;

const BannerAbout = styled.p`
  ${tw`mt-12 py-2 text-sm 2xl:text-4xl 2xl:leading-relaxed 2xl:w-full font-semibold lg:w-10/12 w-full h-28 2xl:h-72 leading-loose tracking-wide text-gray-100`}
  .coloured {
      color: #118AB2;
      ${tw`font-bold`}
  }
`;
const AboutLink = styled.a`
  ${tw`mt-1 text-2xl 2xl:text-5xl tracking-wider lowercase`}
  color: #118AB2;
`;

const Footer = styled.div`
  ${tw`absolute hidden lg:flex justify-around w-5/6 2xl:w-10/12 2xl:justify-evenly bottom-0 gap-4 items-center flex-nowrap`}
`;

const Socials = styled.a`
  ${tw`flex-1 block py-2 text-gray-100 2xl:text-3xl`}
`;

export const LeftContent = () => {
  return (
    <Wrapper>
      <Banner>
        <BannerName>
          barrie <span className="coloured">abubakarr</span>
        </BannerName>
        <BannerAbout>
          Hi there, I am a <span className="coloured">Junior Frontend Developer</span> from Sierra Leone. I build reach <span className="coloured">User Experiences (UI)</span> with <span className="coloured">React</span>.
        </BannerAbout>
        <AboutLink href="/about">Know More {">"}</AboutLink>
      </Banner>
      <Footer>
        <Socials target="_black" href="https://www.twitter.com/@barrie_laj">
          <GrTwitter className="inline text-current h-4 w-4 2xl:h-24 2xl:w-24 mb-px" />
          <span className="ml-1 2xl:hidden">Twitter</span>
        </Socials>
        <Socials target="_black" href="https://www.github.com/BarrieLAJ">
          <GrGithub className="inline text-current h-4 w-4 2xl:h-24 2xl:w-24 mb-px" />
          <span className="ml-1 2xl:hidden">Github</span>
        </Socials>
        <Socials target="_black" href="https://www.facebook.com/alhajiab.barrie/">
          <GrFacebookOption className="inline text-current h-4 w-4 2xl:h-24 2xl:w-24 mb-px" />
          <span className="ml-1 2xl:hidden">Facebook</span>
        </Socials>
      </Footer>
    </Wrapper>
  );
};
