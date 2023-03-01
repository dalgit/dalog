import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getAllTags } from '@/utils/techUtils'
import { getPostsByTag } from '@/utils/techUtils'
import { ParsedUrlQuery } from 'querystring'
import styled from 'styled-components'
import SideBar from '@/components/layout/SideBar'
import PostCardList from '@/components/PostCardList/PostCardList'
interface IParams extends ParsedUrlQuery {
  slug: string
}

const Home = ({ posts, tags }: any) => {
  return (
    <HomeLayout>
      <PostCardList posts={posts} />
      <SideBar tags={tags} />
    </HomeLayout>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as IParams
  const posts = await getPostsByTag(slug)
  const tags = await getAllTags()

  return {
    props: { posts, tags },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { slug: 'a' } },
      { params: { slug: 'b' } },
      { params: { slug: 'c' } },
    ],
    fallback: false,
  }
}

const HomeLayout = styled.div`
  display: flex;
`
