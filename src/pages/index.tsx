import Menu from 'components/Menu'
import { Container } from 'components/Container'
import Hero from 'components/Hero'
import Home from 'templates/Home'
import Paragraph from 'components/Paragraph'

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
export default function Index() {
  return <Home />
}
