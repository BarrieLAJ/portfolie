import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import {
  Provider,
  Tabs,
  TabPanels,
  TabList,
  Item,
  defaultTheme,
} from "@adobe/react-spectrum";
const Wrapper = styled.div`
  ${tw`
        mx-2 w-full lg:w-9/12
    `}
`;
const Header = styled.h1`
  ${tw`
        text-6xl text-white font-bold my-4
    `}
`;
const Paragraph = styled.div`
  ${tw`
        text-base text-white font-normal tracking-wide leading-relaxed mt-10
    `}
`;
const TabWrapper = styled.div`
  ${tw`text-white`}
`;

const TabListWrapper = styled.div`
  ._spectrum-Tabs--horizontal_0248f {
    border: none !important;
  }
`;

const LeftContent = () => {
  return (
    <Wrapper>
      <Provider
        UNSAFE_className="bg-transparent w-full text-white"
        theme={defaultTheme}
        colorScheme="dark"
      >
        <TabWrapper>
          <Tabs aria-label="History of Ancient Rome" defaultSelectedKey={1}>
            <TabListWrapper>
              <TabList UNSAFE_className="w-full border-none">
                <Item key="about">
                  <span className="text-2xl text-center w-full">About</span>
                </Item>
                <Item key="education">
                  <span className="text-2xl text-center w-full">
                    Education
                  </span>
                </Item>
                <Item key="life">
                  <span className="text-2xl text-center w-full">Life</span>
                </Item>
              </TabList>
            </TabListWrapper>
            <TabPanels>
              <Item key="about">
                <Header>About</Header>
                <Paragraph>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Consectetur adipisci nemo, est nihil enim totam possimus
                  assumenda laudantium molestias consequatur harum accusantium
                  voluptas eius eos! Eos minus inventore pariatur expedita!
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatum corporis id minima distinctio dolorum itaque nihil
                  est cupiditate aperiam libero facilis maiores ullam ipsa
                  fugiat esse nobis, soluta ab porro!
                </Paragraph>
                <Paragraph>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Consectetur adipisci nemo, est nihil enim totam possimus
                  assumenda laudantium molestias consequatur harum accusantium
                  voluptas eius eos! Eos minus inventore pariatur expedita!
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatum corporis id minima distinctio dolorum itaque nihil
                  est cupiditate aperiam libero facilis maiores ullam ipsa
                  fugiat esse nobis, soluta ab porro!
                </Paragraph>
              </Item>
              <Item key="education">
                <Header>Education</Header>
                <Paragraph>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Consectetur adipisci nemo, est nihil enim totam possimus
                  assumenda laudantium molestias consequatur harum accusantium
                  voluptas eius eos! Eos minus inventore pariatur expedita!
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatum corporis id minima distinctio dolorum itaque nihil
                  est cupiditate aperiam libero facilis maiores ullam ipsa
                  fugiat esse nobis, soluta ab porro!
                </Paragraph>
                <Paragraph>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Consectetur adipisci nemo, est nihil enim totam possimus
                  assumenda laudantium molestias consequatur harum accusantium
                  voluptas eius eos! Eos minus inventore pariatur expedita!
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatum corporis id minima distinctio dolorum itaque nihil
                  est cupiditate aperiam libero facilis maiores ullam ipsa
                  fugiat esse nobis, soluta ab porro!
                </Paragraph>
              </Item>
              <Item key="life">
                <Header>Life</Header>
                <Paragraph>
                Alhaji Abubakrr Barrie was born in Freetown, Sierra Leone, in the Fourahbay Community which is close to the Queen Elizabeth Bay(commonly known as Water Key). At a very young age, he was known for his smartness and intelligence in all his endeavours. Alhaji started school when he was only 2years and a month old at the Nanysim kindergarten school. While he was there, he performed so well that he was promoted to primary(class 1) in a record of 2years with a year remaining to the end of the Kindergarten stage.
                </Paragraph>
                <Paragraph>
                At the Yamakai Action for Children Nursery and Preparatory School, he was among the top for best pupils in his class and went on to be a School prefect in class 6(NPSE class) where there was so much competition. Upon taking the National Primary School Examination, he produced the 4th best grade in his school(340) with first person getting 349. That was a 160 from the height grade a candidate can attain(500)
                </Paragraph>
              </Item>
            </TabPanels>
          </Tabs>
        </TabWrapper>
      </Provider>
    </Wrapper>
  );
};

export default LeftContent;
