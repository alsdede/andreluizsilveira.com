import Menu from 'components/Menu'
import { Container } from 'components/Container'
import Hero from 'components/Hero'
import BannerSlider from 'components/BannerSlider'
import Paragraph from 'components/Paragraph'
import BannerMock from 'components/BannerSlider/mock'
import ProjectList from 'components/ProjectList'

const hero = {
  title: 'Andre Silveira',
  subtitle: 'Software develper',
  backgroundImage: '/img/andre.jpeg',
  floatImage: '/img/andre.jpeg'
}

const PROJECTITEM = [
  {
    id: 1,
    title: 'Portifolio',
    img: '/img/laptop.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    categories: ['FRONTEND', 'BACKEND', 'MOBILE']
  },
  {
    id: 2,
    title: 'Portifolio 2',
    img: '/img/laptop.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    categories: ['FRONTEND']
  },
  {
    id: 3,
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
      <BannerSlider items={BannerMock} />

      <ProjectList projects={PROJECTITEM} />
    </Container>
  )
}
