import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getAllTags } from '@/utils/techUtils'
import { getPostsByTag } from '@/utils/techUtils'
import { ParsedUrlQuery } from 'querystring'
import styled from 'styled-components'
import TechPostCardList from '@/components/TechPostCardList/TechPostCardList'
import { ITechPosts } from '@/types/post'
import { getAllTagSlugs } from '@/utils/techUtils'
import TechSearchBar from '@/components/TechSearchBar/TechSearchBar'
import TechTagsList from '@/components/TechTagList/TechTagList'
interface IParams extends ParsedUrlQuery {
  slug: string
}

interface TagListPageProps {
  posts: ITechPosts
  tags: { [tag: string]: number }
}

const TagListPage = ({ posts, tags }: TagListPageProps) => {
  return (
    <HomeLayout>
      <TechPostCardList posts={posts} />
      <SideBar>
        <TechSearchBar />
        <TechTagsList tags={tags} />
      </SideBar>
    </HomeLayout>
  )
}

export default TagListPage

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as IParams
  const posts = await getPostsByTag(slug)
  const tags = await getAllTags()

  return {
    props: { posts, tags },
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
`

const SideBar = styled.div`
  font-size: 14px;
  width: 150px;
`
