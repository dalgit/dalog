import React from 'react'
import styled from 'styled-components'
import NoteItem from '@/components/NoteItem/NoteItem'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { notes } from '@/utils/noteUtils'
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
      <div dangerouslySetInnerHTML={{ __html: note.content }}></div>
    </IndexLayout>
  )
}

export default index

const Tmp = styled.ul`
  border-right: 1px solid gray;
  width: 200px;

  div {
    font-size: 20px;
  }
`

const IndexLayout = styled.div`
  display: flex;
`

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as IParams
  const notess = notes
  const note = await getNoteBySlug(slug)
  return {
    props: { notess, note },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { slug: ['react', '1'] } },
      { params: { slug: ['rere', '1'] } },
      { params: { slug: ['rere', '2'] } },
    ],
    fallback: false,
  }
}
