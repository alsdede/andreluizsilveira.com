import ProjectItem from 'components/ProjectItem'
import { ProjectItemProps } from 'components/ProjectItem'
import * as S from './styles'

type ProjectListProps = {
  projects: ProjectItemProps[]
}

const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>Projects</S.Title>
      </S.Header>
      {projects.map(({ title, description, categories, img }) => (
        <ProjectItem
          key={title}
          title={title}
          img={img}
          description={description}
          categories={categories}
        />
      ))}
    </S.Wrapper>
  )
}
export default ProjectList
