import PostCard from '../PostCard/PostCard'
import { IPosts } from '@/types/post'
import styled from 'styled-components'

const PostCardList = ({ posts }: IPosts) => {
  return (
    <PostCardListLayout>
      {posts.map((post) => (
        <PostCard
          key={post.title}
          title={post.title}
          tags={post.tags}
          content={post.content}
          createdDate={post.createdDate}
        />
      ))}
    </PostCardListLayout>
  )
}

export default PostCardList

const PostCardListLayout = styled.section`
  article {
    margin-bottom: 65px;
  }
`
