import styled from 'styled-components'
import TechPostCard from '../TechPostCard/TechPostCard'
import { ITechPosts } from '@/types/tech'

interface TechPostCardListPros {
  posts: ITechPosts
}

const TechPostCardList = ({ posts }: TechPostCardListPros) => {
  const sortedPosts = posts.sort(
    (a, b) =>
      new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime(),
  )

  return (
    <TechPostCardListLayout>
      {sortedPosts.map((post) => (
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
