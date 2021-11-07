import Menu from 'components/Menu'
import { Container } from 'components/Container'
import Head from 'next/head'
import Image from 'next/image'
import Hero from 'components/Hero'
import Paragraph from 'components/Paragraph'
import Heading from 'components/Heading'

const hero = {
  title: 'Andre Silveira',
  subtitle: 'Software develper',
  backgroundImage: '/img/andre.jpeg'
}

export default function About() {
  return (
    <Container>
      <Menu />
      <Heading>About my life 🏝</Heading>
      <Paragraph>
        I was born in Floriaópolis and lived in the city for 32 years. I am
        currently living in Porto, Portugal🇵🇹
      </Paragraph>
      <Heading>Programming Journey</Heading>
      <Paragraph>
        Enthusiastic and professional Software Developer WEB/Mobile with +3
        years experience, working with deadlines and agile methodology,
        following software development best practices like clean code.
        Experience working with: Front End: HTML, CSS ,JS6, React JS,
        NextJS,Gatsby JS,Angular, Styled-Components, SaSS Back- End: Node JS,
        Tests: Jest, JUnit. Others: Scrum, Git, Docker
      </Paragraph>
    </Container>
  )
}
