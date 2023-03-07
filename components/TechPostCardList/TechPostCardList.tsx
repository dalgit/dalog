import TechPostCard from '../TechPostCard/TechPostCard'
import styled from 'styled-components'
import { ITechPosts } from '@/types/post'

interface TechPostCardListPros {
  posts: ITechPosts
}

const TechPostCardList = ({ posts }: TechPostCardListPros) => {
  return (
    <TechPostCardListLayout>
      {posts.map((post) => (
        <TechPostCard key={post.postSlug} post={post} />
      ))}
    </TechPostCardListLayout>
  )
}

export default TechPostCardList

const TechPostCardListLayout = styled.section`
  min-width: 0;
  article {
    margin-bottom: 65px;
  }
`