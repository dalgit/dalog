import React from 'react'
import ProjectCardList from '@/components/ProjectCardList/ProjectCardList'
import { getAllProjects } from '@/utils/projectUtils'
import { IProjectPost } from '@/types/post'

const ProjectListPage = ({ posts }: ProjectListPageProps) => {
  return <ProjectCardList posts={posts} />
}

export default ProjectListPage

export async function getStaticProps() {
  const postsData = await getAllProjects()
  return {
    props: {
      posts: postsData,
    },
  }
}

interface ProjectListPageProps {
  posts: IProjectPost[]
}
