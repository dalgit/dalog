import PostCardList from '@/components/PostCardList/PostCardList'
import { getAllTechs, getAllTags } from '@/utils/techUtils'
import styled from 'styled-components'
import SideBar from '@/components/layout/SideBar'
import { getAllTags as a } from '@/utils/techUtils'

export default function Home({ posts, tags }: any) {
  return (
    <HomeLayout>
      <PostCardList posts={posts} />
      <SideBar tags={tags} />
    </HomeLayout>
  )
}

export async function getStaticProps() {
  const posts = await getAllTechs()
  const tags = await a()
  console.log(tags)
  return {
    props: { posts, tags },
  }
}

const HomeLayout = styled.div`
  display: flex;
`
