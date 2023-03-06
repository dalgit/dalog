import TechPostCardList from '@/components/TechPostCardList/TechPostCardList'
import { getAllTechs, getAllTags } from '@/utils/techUtils'
import styled from 'styled-components'
import TechTagList from '@/components/TechTagList/TechTagList'
import TechSearchBar from '@/components/TechSearchBar/TechSearchBar'

export default function Home({ posts, tags }: any) {
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
