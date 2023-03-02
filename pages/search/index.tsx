import React from 'react'
import { GetServerSideProps } from 'next'
import styled from 'styled-components'
import PostCardList from '@/components/PostCardList/PostCardList'
import SideBar from '@/components/layout/SideBar'
import { getSearchedPosts } from '@/utils/techUtils'
import { ParsedUrlQuery } from 'querystring'
import { getAllTags } from '@/utils/techUtils'
interface IQuery extends ParsedUrlQuery {
  keyword: string | undefined
}

const Home = ({ posts, tags, keyword }: any) => {
  const postCount = posts.length
  const hasPosts = postCount > 0

  return (
    <HomeLayout>
      <div>
        <ResultText>
          {hasPosts
            ? `'${keyword}'에 대한 결과 : ${postCount}건`
            : `'${keyword}'에 대한 결과가 없습니다.`}
        </ResultText>

        <PostCardList posts={posts} />
      </div>
      <SideBar tags={tags} />
    </HomeLayout>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { keyword } = query as IQuery

  const posts = await getSearchedPosts(keyword)
  const tags = await getAllTags()

  return { props: { posts, tags, keyword } }
}

const HomeLayout = styled.div`
  display: flex;
`

const ResultText = styled.span`
  display: inline-block;
  font-size: 25px;
  font-weight: bolder;
  margin-bottom: 30px;
  background-color: #7e7979;
  color: white;
  padding: 5px;
`
