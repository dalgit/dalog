import React from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'
import styled from 'styled-components'
const ProjectCardList = ({ posts }: any) => {
  return (
    <ProjectCardListLayout>
      {posts.map((post: any) => (
        <ProjectCard key={post.slug} post={post} />
      ))}
    </ProjectCardListLayout>
  )
}

export default ProjectCardList

const ProjectCardListLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 30px;
  justify-items: center;

  margin-bottom: 50px;
`
