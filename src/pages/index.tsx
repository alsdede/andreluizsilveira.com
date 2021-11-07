import Menu from 'components/Menu'
import { Container } from 'components/Container'
import Head from 'next/head'
import Image from 'next/image'
import Hero from 'components/Hero'
import ProjectItem from 'components/ProjectItem'
import ProjectList from 'components/ProjectList'

const hero = {
  title: 'Andre Silveira',
  subtitle: 'Software develper',
  backgroundImage: '/img/andre.jpeg',
  floatImage: '/img/andre.jpeg'
}

const PROJECTITEM = [
  {
    title: 'Portifolio',
    img: '/img/laptop.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    categories: ['FRONTEND', 'BACKEND', 'MOBILE']
  },
  {
    title: 'Portifolio 2',
    img: '/img/laptop.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    categories: ['FRONTEND']
  },
  {
    title: 'Portifolio 3',
    img: '/img/laptop.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    categories: ['BACKEND', 'MOBILE']
  }
]
export default function Home() {
  return (
    <Container>
      <Menu />
      <Hero
        title={hero.title}
        subtitle={hero.subtitle}
        backgroundImage={hero.backgroundImage}
        floatImage={hero.floatImage}
      />
      <ProjectList projects={PROJECTITEM} />
    </Container>
  )
}
