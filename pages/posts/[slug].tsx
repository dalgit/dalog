import { GetStaticPaths, GetStaticProps } from 'next'
import { getTechBySlug } from '@/utils/techUtils'
import { ParsedUrlQuery } from 'querystring'
import { IPost } from '@/types/post'
import PostLender from '@/components/PostLender/PostLender'
type PostPageProps = {
  post: IPost
}

interface IParams extends ParsedUrlQuery {
  slug: string
}

const PostPage = ({ post }: PostPageProps) => {
  return <PostLender post={post} />
}

export default PostPage

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as IParams
  const post = await getTechBySlug(slug)

  return {
    props: { post },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { slug: 'tmp' } },
      { params: { slug: 'tmp2' } },
      { params: { slug: 'tmp3' } },
    ],
    fallback: false,
  }
}
