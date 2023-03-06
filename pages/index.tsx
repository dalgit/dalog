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
`

const SideBar = styled.div`
  font-size: 14px;
  width: 330px;
`
