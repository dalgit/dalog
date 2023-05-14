import styled from 'styled-components'
import ProjectCard from '../ProjectCard/ProjectCard'
import { IProjectPost, IProjectPosts } from '@/types/project'

interface ProjectCardListProps {
  year: number
  posts: IProjectPosts
}

const ProjectCardList = ({ year, posts }: ProjectCardListProps) => {
  const sortedPosts = posts.sort(
    (a, b) =>
      new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime(),
  )

  return (
    <>
      <Year>{year}</Year>
      <ProjectCardListLayout>
        {sortedPosts.map((post: IProjectPost) => (
          <ProjectCard key={post.postSlug} post={post} />
        ))}
      </ProjectCardListLayout>
    </>
  )
}

export default ProjectCardList

const ProjectCardListLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
  grid-gap: 55px;
  justify-items: center;
  margin: 24px 0 48px 0;
`

const Year = styled.p`
  font-size: 24px;
  font-weight: bolder;
  color: ${({ theme }) => theme.colors._B1B2FF};
`
