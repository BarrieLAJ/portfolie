import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const Wrapper = styled.div`
    ${tw`w-9/12 h-44 mx-auto my-2 p-4 2xl:height[1000px] rounded-md hover:cursor-pointer`}
    &:first-child {
        background-color: #071a21;
    }
    &:hover {
        background-color: #071a21;
    }
`

const Title = styled.h3`
${tw`text-gray-100 text-base 2xl:text-4xl mx-0 my-3 capitalize font-bold`}`

const Excerpt = styled.p`
${tw`text-gray-100 text-sm 2xl:text-4xl 2xl:w-5/6 2xl:tracking-wide 2xl:leading-relaxed`}`

export const BlogItem = ({item}:{item: any}) => {
    return (
        <Wrapper>
            <Title>0{item}</Title>
            <Title>Writing better react programs</Title>
            <Excerpt>
                Lorem ipsum dolor sit amet consectetur adipisicing elit...
            </Excerpt>
        </Wrapper>
    )
}
