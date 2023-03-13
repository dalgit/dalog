import { ParsedUrlQuery } from 'querystring'
import { GetStaticPaths, GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import BlogPost from '@/components/BlogPost/BlogPost'
import { HOME_URL } from '@/data/meta'
import { IProjectPost } from '@/types/project'
import { getProjectBySlug } from '@/utils/projectUtils'
import { projectSlugs } from '@/utils/projectUtils'
interface IParams extends ParsedUrlQuery {
  slug: string
}

interface ProjectListPageProps {
  post: IProjectPost
}

const ProjectListPage = ({ post }: ProjectListPageProps) => {
  return (
    <>
      <NextSeo
        title={post.title}
        description={post.description}
        canonical={`${HOME_URL}/projects/${post.postSlug}`}
        openGraph={{
          url: `${HOME_URL}/${post.postSlug}`,
          type: 'article',
          article: { publishedTime: post.createdDate },
          images: [{ url: `/posts/${post.postSlug}/${post.thumbnail}` }],
        }}
      />
      <BlogPost post={post} />
    </>
  )
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
