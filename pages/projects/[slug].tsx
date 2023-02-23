import { GetStaticPaths, GetStaticProps } from 'next'
import { getProjectBySlug } from '@/utils/postUtils'
import { ParsedUrlQuery } from 'querystring'
import PostLender from '@/components/PostLender/PostLender'

interface IParams extends ParsedUrlQuery {
  slug: string
}

const pro = ({ post }: any) => {
  return <PostLender post={post} />
}

export default pro

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as IParams
  const post = await getProjectBySlug(slug)

  return {
    props: { post },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { slug: 'blogggg' } }, { params: { slug: 'haha' } }],
    fallback: false,
  }
}
