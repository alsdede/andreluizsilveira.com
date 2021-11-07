import * as S from './styles'

type ParagraphProps = {
  children: React.ReactNode
}

const Paragraph = ({ children }: ParagraphProps) => {
  return <S.Wrapper>{children}</S.Wrapper>
}

export default Paragraph
