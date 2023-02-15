import PostCard from '../PostCard/PostCard'
import { useState, useEffect } from 'react'
import { IPosts } from '@/types/post'
import styled from 'styled-components'
const PostCardList = () => {
  const [posts, setPosts] = useState<IPosts>([])

  useEffect(() => {
    fetch('http://localhost:3000/data/post.json')
      .then((res) => res.json())
      .then((res) => setPosts(res))
  }, [])

  return (
    <PostCardListLayout>
      {posts.map((post) => (
        <PostCard
          title={post.title}
          tags={post.tags}
          content={post.content}
          createdDate={post.createdDate}
          key={post.id}
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
