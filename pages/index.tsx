import PostCardList from '@/components/PostCardList/PostCardList'
import { IPosts } from '@/types/post'
import { getAllPosts } from '@/utils/postUtil'

export default function Home({ posts }: IPosts) {
  return (
    <>
      <PostCardList posts={posts} />
    </>
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
