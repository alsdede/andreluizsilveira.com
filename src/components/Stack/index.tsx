import Image from 'next/image'
import Link from 'next/link'
import * as S from './styles'

export type StackProps = {
  id?: number
  title: string

  stack: string[]
}

const Stack = ({ id, title, stack }: StackProps) => {
  console.log(id)
  return (
    <S.Wrapper data-cy="game-item">
      <S.ProjectContent>
        <S.Title>{title}</S.Title>
        <S.Content>
          <S.Group>
            {stack.map((tech) => (
              <S.Tag key={tech}>{tech}</S.Tag>
            ))}
          </S.Group>
        </S.Content>
      </S.ProjectContent>
    </S.Wrapper>
  )
}

export default Stack
