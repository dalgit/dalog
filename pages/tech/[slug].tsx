import { GetStaticPaths, GetStaticProps } from 'next'
import { getTechBySlug } from '@/utils/techUtils'
import { ParsedUrlQuery } from 'querystring'
import BlogPost from '@/components/BlogPost/BlogPost'
import { ITechPost } from '@/types/post'
import { getTechSlugs } from '@/utils/techUtils'
import { NextSeo } from 'next-seo'
import { HOME_URL } from '@/data/meta'

type PostPageProps = {
  post: ITechPost
}

interface IParams extends ParsedUrlQuery {
  slug: string
}

const TechPostDetailPage = ({ post }: PostPageProps) => {
  return (
    <>
      <NextSeo
        title={post.title}
        description={`Post related to ${post.title}`}
        canonical={`${HOME_URL}/tech/${post.postSlug}`}
        openGraph={{
          url: `${HOME_URL}/tech/${post.postSlug}`,
          type: 'article',
          article: { publishedTime: post.createdDate },
          images: [{ url: `/posts/${post.postSlug}/${post.thumbnail}` }],
        }}
      />
      <BlogPost post={post} />
    </>
  )
}

export default TechPostDetailPage

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as IParams
  const post = await getTechBySlug(slug)

  return {
    props: { post },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getTechSlugs()
  const paths = slugs.map((slug) => ({
    params: { slug },
  }))

  return {
    paths: paths,
    fallback: false,
  }
}
