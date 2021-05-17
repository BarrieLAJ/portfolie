import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const Wrapper = styled.div`
    ${tw`w-9/12 h-44 mx-auto my-2 p-4 rounded-md`}
    &:first-child {
        background-color: #0b2d38;
    }
`

const Title = styled.h3`
${tw`text-gray-100 text-base mx-0 my-3 capitalize font-bold`}`

const Excerpt = styled.p`
${tw`text-gray-100 text-sm`}`

export const BlogItem = () => {
    return (
        <Wrapper>
            <Title>01</Title>
            <Title>Writing better react programs</Title>
            <Excerpt>
                Lorem ipsum dolor sit amet consectetur adipisicing elit...
            </Excerpt>
        </Wrapper>
    )
}
