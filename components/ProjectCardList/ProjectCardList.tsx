import React from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'
import styled from 'styled-components'
const ProjectCardList = () => {
  return (
    <ProjectCardListLayout>
      <ProjectCard />
      <ProjectCard />
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
