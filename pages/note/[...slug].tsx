import React from 'react'
import styled from 'styled-components'
import NoteItem from '@/components/NoteItem/NoteItem'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { getAllNoteSlugs, getNoteCategories } from '@/utils/noteUtils'
import { getNoteBySlug } from '@/utils/noteUtils'

interface IParams extends ParsedUrlQuery {
  slug: string[]
}

const index = ({ notess, note }: any) => {
  return (
    <IndexLayout>
      <Tmp>
        {notess.map((note: any, idx: number) => (
          <NoteItem key={idx} note={note} />
        ))}
      </Tmp>
      <ContentBox>
        <ContentTitle>{note.title}</ContentTitle>
        <Content dangerouslySetInnerHTML={{ __html: note.content }}></Content>
      </ContentBox>
    </IndexLayout>
  )
}

export default index
const ContentBox = styled.div`
  padding-left: 20px;

  h1 {
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 20px;
    line-height: 130%;
  }
`

const ContentTitle = styled.h1``
const Content = styled.div``
const Tmp = styled.ul`
  border-right: 2px solid #eaeaea;
  width: 200px;

  > div {
    margin-bottom: 20px;
  }
`

const IndexLayout = styled.div`
  display: flex;
  margin-bottom: 100px;
`

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as IParams

  const notess = getNoteCategories()
  const note = await getNoteBySlug(slug)
  return {
    props: { notess, note },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const noteSlugs = getAllNoteSlugs()
  return {
    paths: noteSlugs.map((noteSlug: any) => ({
      params: {
        slug: noteSlug,
      },
    })),

    fallback: false,
  }
}
