import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getPostsByTag } from '@/utils/postUtils'
import { ParsedUrlQuery } from 'querystring'
import styled from 'styled-components'
import SideBar from '@/components/layout/SideBar'
import PostCardList from '@/components/PostCardList/PostCardList'
interface IParams extends ParsedUrlQuery {
  slug: string
}

const Home = ({ posts }: any) => {
  return (
    <HomeLayout>
      <PostCardList posts={posts} />
      <SideBar />
    </HomeLayout>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as IParams
  const posts = await getPostsByTag(slug)

  return {
    props: { posts },
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
