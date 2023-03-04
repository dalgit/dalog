import React from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'
import styled from 'styled-components'
import { IProjectPost, IProjectPosts } from '@/types/post'

const ProjectCardList = ({ posts }: ProjectCardListProps) => {
  return (
    <ProjectCardListLayout>
      {posts.map((post: IProjectPost) => (
        <ProjectCard key={post.postSlug} post={post} />
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
interface ProjectCardListProps {
  posts: IProjectPosts
}
