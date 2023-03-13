import styled from 'styled-components'
import TechPostCardList from '@/components/TechPostCardList/TechPostCardList'
import TechSideBar from '@/components/TechSideBar/TechSideBar'
import { ITechPosts, ITags } from '@/types/tech'
import { getAllTechs, getAllTags } from '@/utils/techUtils'

interface TechPostListPageProps {
  posts: ITechPosts
  tags: ITags
}

const TechPostListPage = ({ posts, tags }: TechPostListPageProps) => {
  return (
    <HomeLayout>
      <TechPostCardList posts={posts} />
      <TechSideBar tags={tags} />
    </HomeLayout>
  )
}

export default TechPostListPage

export async function getStaticProps() {
  const posts = await getAllTechs()
  const tags = await getAllTags()

  return {
    props: { posts, tags },
  }
}

const HomeLayout = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${({ theme }) => theme.device.tabletMax} {
    flex-direction: column-reverse;
  }
`
