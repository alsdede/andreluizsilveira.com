import { useRouter } from 'next/dist/client/router'
import Menu from 'components/Menu'

import { Container } from 'components/Container'

const Index = () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <Container>
      <Menu />
      <h1 style={{ color: 'white' }}>project:{id}</h1>
    </Container>
  )
}

export default Index
