import React from 'react'
import ProjectCardList from '@/components/ProjectCardList/ProjectCardList'
import { getAllProjects } from '@/utils/projectUtils'

const index = ({ posts }: any) => {
  return <ProjectCardList posts={posts} />
}

export default index

export async function getStaticProps() {
  const postsData = await getAllProjects()
  return {
    props: {
      posts: postsData,
    },
  }
}
