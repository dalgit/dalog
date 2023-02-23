import React from 'react'
import ProjectCardList from '@/components/ProjectCardList/ProjectCardList'
import { getAllProjects } from '@/utils/postUtils'

const index = ({ posts }: any) => {
  console.log(posts)
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
