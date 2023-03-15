import styled from 'styled-components'
import TechPostCard from '../TechPostCard/TechPostCard'
import { ITechPosts } from '@/types/tech'

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
  & > * {
    margin-bottom: 52px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
