import { GetStaticPaths, GetStaticProps } from 'next'
import { getProjectBySlug } from '@/utils/projectUtils'
import { ParsedUrlQuery } from 'querystring'
import PostLender from '@/components/PostLender/PostLender'
import { projectSlugs } from '@/utils/projectUtils'
import { IProjectPost } from '@/types/post'

interface IParams extends ParsedUrlQuery {
  slug: string
}

interface ProjectListPageProps {
  post: IProjectPost
}

const ProjectListPage = ({ post }: ProjectListPageProps) => {
  return <PostLender post={post} />
}

export default ProjectListPage

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as IParams
  const post = await getProjectBySlug(slug)

  return {
    props: { post },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projectSlugs.map((slug) => ({
    params: { slug },
  }))

  return {
    paths,
    fallback: false,
  }
}
