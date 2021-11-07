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
  backgroundImage: '/img/sky.png',
  floatImage: 'img/andre.jpeg'
}

export default function Contact() {
  return (
    <Container>
      <Menu />
      <section>
        <Heading>Contact</Heading>
        <a
          href="https://www.linkedin.com/in/alsdede/"
          style={{ textDecoration: 'none' }}
        >
          <Paragraph>Linkedin</Paragraph>
        </a>
        <a
          href="https://github.com/alsdede/"
          style={{ textDecoration: 'none' }}
        >
          <Paragraph>Github</Paragraph>
        </a>
        <a
          href="mailto:als.andresilveira@gmail.com"
          style={{ textDecoration: 'none' }}
        >
          <Paragraph>als.andresilveira@gmail.com</Paragraph>
        </a>
      </section>
    </Container>
  )
}
