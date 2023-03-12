import React from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'
import styled from 'styled-components'
import { IProjectPost, IProjectPosts } from '@/types/post'

interface ProjectCardListProps {
  year: number
  posts: IProjectPosts
}

const ProjectCardList = ({ year, posts }: ProjectCardListProps) => {
  return (
    <>
      <Year>{year}</Year>
      <ProjectCardListLayout>
        {posts.map((post: IProjectPost) => (
          <ProjectCard key={post.postSlug} post={post} />
        ))}
      </ProjectCardListLayout>
    </>
  )
}

export default ProjectCardList

const ProjectCardListLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 70px;
  justify-items: center;
  margin: 30px 0 60px 0;
`

const Year = styled.p`
  font-size: 30px;
  font-weight: bolder;
  color: #bca5f0;
`
