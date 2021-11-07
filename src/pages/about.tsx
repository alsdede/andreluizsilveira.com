import Menu from 'components/Menu'
import { Container } from 'components/Container'

import Paragraph from 'components/Paragraph'
import Heading from 'components/Heading'
import Image from 'next/image'
import Stack from 'components/Stack'

import { StackContent } from 'components/Stack/content'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export default function About() {
  const { title, stack, img, img2 } = StackContent
  return (
    <Container>
      <Menu />
      <Heading>About my life 🏝</Heading>

      <Paragraph>
        I was born in Florianópolis and lived in the city for 32 years. I am
        currently living in Porto, Portugal🇵🇹
      </Paragraph>
      <ImageBox>
        {' '}
        <Image src={img} alt={`florianopolis`} layout="fill" />
      </ImageBox>
      <Paragraph>I am currently living in Porto, Portugal🇵🇹</Paragraph>
      <ImageBox>
        {' '}
        <Image src={img2} alt={`florianopolis`} layout="fill" />
      </ImageBox>
      <Heading>Programming Journey</Heading>
      <Paragraph>
        Enthusiastic and professional Software Developer WEB/Mobile with +3
        years experience, working with deadlines and agile methodology,
        following software development best practices like clean code.
      </Paragraph>
      <Stack title={title} stack={stack} />
    </Container>
  )
}

export const ImageBox = styled.div`
  position: relative;
  height: 33rem;
  display: grid;
  margin-bottom: 2rem;

  img {
    position: absolute;
    object-fit: cover;
  }
  ${media.greaterThan('medium')`
      height: 42rem;
      margin-bottom: 6rem;

    `}
`
