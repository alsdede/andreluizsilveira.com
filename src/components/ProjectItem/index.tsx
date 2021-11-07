import Image from 'next/image'
import Link from 'next/link'
import * as S from './styles'

export type ProjectItemProps = {
  id: number
  title: string
  img: string
  description: string
  categories: string[]
}
const ProjectItem = ({
  id,
  title,
  img,
  description,
  categories
}: ProjectItemProps) => {
  console.log(id)
  return (
    <S.Wrapper data-cy="game-item">
      <Link href={`/projects/${id}`} passHref>
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
      </Link>
    </S.Wrapper>
  )
}

export default ProjectItem
