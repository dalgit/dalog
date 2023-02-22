import PostCardList from '@/components/PostCardList/PostCardList'
import { IPosts } from '@/types/post'
import { getAllPosts } from '@/utils/postUtils'
import styled from 'styled-components'
import SideBar from '@/components/layout/SideBar'

export default function Home({ posts }: IPosts) {
  return (
    <HomeLayout>
      <PostCardList posts={posts} />
      <SideBar />
    </HomeLayout>
  )
}

export async function getStaticProps() {
  const postsData = await getAllPosts()
  return {
    props: {
      posts: postsData,
    },
  }
}

const HomeLayout = styled.div`
  display: flex;
`
