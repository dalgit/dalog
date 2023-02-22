import PostCard from '../PostCard/PostCard'
import { IPosts } from '@/types/post'
import styled from 'styled-components'

const PostCardList = ({ posts }: IPosts) => {
  return (
    <PostCardListLayout>
      {posts.map((post) => (
        <PostCard key={post.postSlug} post={post} />
      ))}
    </PostCardListLayout>
  )
}

export default PostCardList

const PostCardListLayout = styled.section`
  min-width: 0;
  article {
    margin-bottom: 65px;
  }
`
