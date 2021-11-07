import Image from 'next/image'
import * as S from './styles'

export type ProjectItemProps = {
  title: string
  img: string
  description: string
  categories: string[]
}
const ProjectItem = ({
  title,
  img,
  description,
  categories
}: ProjectItemProps) => {
  return (
    <S.Wrapper data-cy="game-item">
      <S.ProjectContent>
        <S.ImageBox>
          <Image src={img} alt={title} width={300} height={300} />
        </S.ImageBox>

        <S.Content>
          <S.Title>{title}</S.Title>
          <S.Group>
            {categories.map((tech) => (
              <S.Tag key={tech}>{tech}</S.Tag>
            ))}
          </S.Group>
          <S.Description>{description}</S.Description>
        </S.Content>
      </S.ProjectContent>
    </S.Wrapper>
  )
}

export default ProjectItem
