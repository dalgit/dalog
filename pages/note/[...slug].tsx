import styled from 'styled-components'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import {
  getNoteSlugs,
  getNoteCategories,
  getNoteBySlug,
} from '@/utils/noteUtils'
import { INote, INoteCategories } from '@/types/post'
import NoteSideBar from '@/components/NoteSideBar/NoteSideBar'

interface IParams extends ParsedUrlQuery {
  slug: [string, string]
}

interface NotePageProps {
  categories: INoteCategories
  note: INote
}

const NotePage = ({ categories, note }: NotePageProps) => {
  return (
    <NotePageLayout>
      <NoteSideBar categories={categories} />
      <ContentBox>
        <h1>{note.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: note.content }}></div>
      </ContentBox>
    </NotePageLayout>
  )
}

export default NotePage

const ContentBox = styled.div`
  padding-left: 20px;

  h1 {
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 20px;
    line-height: 130%;
  }
`

const NotePageLayout = styled.div`
  display: flex;
  margin-bottom: 100px;
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
