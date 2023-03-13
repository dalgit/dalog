import React from 'react'
import ProjectCardList from '@/components/ProjectCardList/ProjectCardList'
import { IProjectGroupByYear } from '@/types/project'
import { getAllProjects, getPostsGroupedByYear } from '@/utils/projectUtils'

const ProjectListPage = ({ postsGroup }: ProjectListPageProps) => {
  return (
    <>
      {postsGroup.map((group) => (
        <ProjectCardList
          year={group.year}
          posts={group.posts}
          key={group.year}
        />
      ))}
    </>
  )
}

export default ProjectListPage

export async function getStaticProps() {
  const postsData = await getAllProjects()
  const postsGroup = getPostsGroupedByYear(postsData)

  return {
    props: { postsGroup },
  }
}

interface ProjectListPageProps {
  postsGroup: IProjectGroupByYear[]
}
