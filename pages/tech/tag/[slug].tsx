import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import styled from 'styled-components'
import SearchResult from '@/components/SearchResult/SearchResult'
import TechPostCardList from '@/components/TechPostCardList/TechPostCardList'
import TechSideBar from '@/components/TechSideBar/TechSideBar'
import { IParams } from '@/types/query'
import { ITechPosts, ITags } from '@/types/tech'
import { getPostsByTag, getAllTags, getAllTagSlugs } from '@/utils/techUtils'

interface TagListPageProps {
  posts: ITechPosts
  tags: ITags
  slug: string
}

const TagListPage = ({ posts, tags, slug }: TagListPageProps) => {
  const postCount = posts.length

  return (
    <HomeLayout>
      <Wrapper>
        <SearchResult keyword={slug} postCount={postCount} />
        <TechPostCardList posts={posts} />
      </Wrapper>
      <TechSideBar tags={tags} />
    </HomeLayout>
  )
}

export default TagListPage

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as IParams<string>
  const posts = await getPostsByTag(slug)
  const tags = await getAllTags()

  return {
    props: { posts, tags, slug },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getAllTagSlugs()

  const paths = slugs.map((slug) => ({
    params: { slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

const HomeLayout = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${({ theme }) => theme.device.tabletMax} {
    flex-direction: column-reverse;
  }
`

const Wrapper = styled.div`
  overflow: hidden;
`
