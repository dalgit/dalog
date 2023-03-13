import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getAllTags } from '@/utils/techUtils'
import { getPostsByTag } from '@/utils/techUtils'
import { ParsedUrlQuery } from 'querystring'
import styled from 'styled-components'
import TechPostCardList from '@/components/TechPostCardList/TechPostCardList'
import { ITechPosts } from '@/types/tech'
import { getAllTagSlugs } from '@/utils/techUtils'
import TechSideBar from '@/components/TechSideBar/TechSideBar'
import SearchResult from '@/components/SearchResult/SearchResult'
interface IParams extends ParsedUrlQuery {
  slug: string
}

interface TagListPageProps {
  posts: ITechPosts
  tags: { [tag: string]: number }
  slug: string
}

const TagListPage = ({ posts, tags, slug }: TagListPageProps) => {
  const postCount = posts.length

  return (
    <HomeLayout>
      <div>
        <SearchResult keyword={slug} postCount={postCount} />
        <TechPostCardList posts={posts} />
      </div>
      <TechSideBar tags={tags} />
    </HomeLayout>
  )
}

export default TagListPage

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as IParams
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
