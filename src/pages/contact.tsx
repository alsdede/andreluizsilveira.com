import Menu from 'components/Menu'
import { Container } from 'components/Container'
import Head from 'next/head'
import Image from 'next/image'
import Hero from 'components/Hero'

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
        <Hero
          title={hero.title}
          subtitle={hero.subtitle}
          backgroundImage={hero.backgroundImage}
          floatImage={hero.backgroundImage}
        />
      </section>
      <section>
        <Hero
          title={hero.title}
          subtitle={hero.subtitle}
          backgroundImage={hero.backgroundImage}
          floatImage={hero.backgroundImage}
        />
      </section>
    </Container>
  )
}
