import Menu from 'components/Menu'
import { Container } from 'components/Container'

import Paragraph from 'components/Paragraph'
import Heading from 'components/Heading'

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
