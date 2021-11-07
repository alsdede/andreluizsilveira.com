import { useRouter } from 'next/dist/client/router'
import Menu from 'components/Menu'
import * as S from './styles'
import { Container } from 'components/Container'

const Index = () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <Container>
      <Menu />
      <S.Title>project:{id}</S.Title>
    </Container>
  )
}

export default Index
