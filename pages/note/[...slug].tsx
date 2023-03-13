import { ParsedUrlQuery } from 'querystring'
import { GetStaticPaths, GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import styled from 'styled-components'
import NoteSideBar from '@/components/NoteSideBar/NoteSideBar'
import PostContent from '@/components/PostContent/PostContent'
import { HOME_URL } from '@/data/meta'
import { INote, INoteCategories } from '@/types/post'
import {
  getNoteSlugs,
  getNoteCategories,
  getNoteBySlug,
} from '@/utils/noteUtils'

interface IParams extends ParsedUrlQuery {
  slug: [string, string]
}

interface NotePageProps {
  categories: INoteCategories
  note: INote
}

const NotePage = ({ categories, note }: NotePageProps) => {
  return (
    <>
      <NextSeo
        title={note.title}
        description={`Records related to ${note.title}`}
        canonical={`${HOME_URL}/${note.postSlug[0]}/${note.postSlug[1]}`}
        openGraph={{
          url: `${HOME_URL}/${note.postSlug[0]}/${note.postSlug[1]}`,
          type: 'article',
          article: { publishedTime: note.createdDate },
        }}
      />
      <NotePageLayout>
        <NoteSideBar categories={categories} />
        <ContentBox>
          <Title>{note.title}</Title>
          <PostContent content={note.content} />
        </ContentBox>
      </NotePageLayout>
    </>
  )
}

export default NotePage

const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 20px;
  line-height: 130%;
`

const ContentBox = styled.div`
  padding-left: 20px;
`

const NotePageLayout = styled.div`
  display: flex;
  /* margin-bottom: 100px; */
  /* min-height: 100%; */
  height: 100%;
`

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as IParams

  const categories = getNoteCategories()
  const note = await getNoteBySlug(slug)

  return {
    props: { categories, note },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const noteSlugs = getNoteSlugs()
  const paths = noteSlugs.map((slug) => ({
    params: { slug },
  }))

  return {
    paths,
    fallback: false,
  }
}
