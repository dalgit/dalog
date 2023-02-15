import PostCardList from '@/components/PostCardList/PostCardList'
import postUtil from '@/utils/postUtil'
import { IPosts } from '@/types/post'

export default function Home({ posts }: IPosts) {
  return (
    <>
      <PostCardList posts={posts} />
    </>
  )
}

export async function getStaticProps() {
  const postsData = postUtil.getAllPosts()

  return {
    props: {
      posts: postsData,
    },
  }
}
