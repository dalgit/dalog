import TechPostCardList from '@/components/TechPostCardList/TechPostCardList'
import { getAllTechs, getAllTags } from '@/utils/techUtils'
import styled from 'styled-components'
import { ITechPosts } from '@/types/post'
import TechSideBar from '@/components/TechSideBar/TechSideBar'

interface TechPostListPageProps {
  posts: ITechPosts
  tags: { [tag: string]: number }
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
