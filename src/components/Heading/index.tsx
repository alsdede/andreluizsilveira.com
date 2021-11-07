import * as S from './styles'

type HeadingProps = {
  children: React.ReactNode
}

const Heading = ({ children }: HeadingProps) => {
  return <S.Wrapper>{children}</S.Wrapper>
}

export default Heading
