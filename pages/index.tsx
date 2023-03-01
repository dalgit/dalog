import PostCardList from '@/components/PostCardList/PostCardList'
import { IPosts } from '@/types/post'
import { getAllPosts, getAllTags } from '@/utils/postUtils'
import styled from 'styled-components'
import SideBar from '@/components/layout/SideBar'

export default function Home({ posts, tags }: any) {
  return (
    <HomeLayout>
      <PostCardList posts={posts} />
      <SideBar tags={tags} />
    </HomeLayout>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts()
  const tags = await getAllTags()

  return {
    props: { posts, tags },
  }
}

const HomeLayout = styled.div`
  display: flex;
`
