import TechPostCardList from '@/components/TechPostCardList/TechPostCardList'
import { getAllTechs, getAllTags } from '@/utils/techUtils'
import styled from 'styled-components'
import TechTagList from '@/components/TechTagList/TechTagList'
import TechSearchBar from '@/components/TechSearchBar/TechSearchBar'
import { ITechPosts } from '@/types/post'

interface TechPostListPageProps {
  posts: ITechPosts
  tags: { [tag: string]: number }
}

const TechPostListPage = ({ posts, tags }: TechPostListPageProps) => {
  return (
    <HomeLayout>
      <TechPostCardList posts={posts} />
      <SideBar>
        <TechSearchBar />
        <TechTagList tags={tags} />
      </SideBar>
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
  max-width: 100%;

  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column-reverse;
  }

  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: column-reverse;
  }
`

const SideBar = styled.div`
  font-size: 14px;
  min-width: 150px;
  max-width: 150px;

  margin-left: 30px;

  @media ${({ theme }) => theme.device.tabletMax} {
    max-width: 100%;
    margin-left: 0;
  }
`
