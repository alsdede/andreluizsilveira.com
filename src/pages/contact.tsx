import Menu from 'components/Menu'
import { Container } from 'components/Container'
import Head from 'next/head'
import Image from 'next/image'
import Hero from 'components/Hero'

const hero = {
  title: 'Andre Silveira',
  subtitle: 'Software develper',
  backgroundImage: '/img/andre.jpeg'
}

export default function Contact() {
  return (
    <Container>
      <Menu />
      <Hero
        title={hero.title}
        subtitle={hero.subtitle}
        backgroundImage={hero.backgroundImage}
        floatImage={hero.backgroundImage}
      />
    </Container>
  )
}
