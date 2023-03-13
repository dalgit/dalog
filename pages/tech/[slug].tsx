import { GetStaticPaths, GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import BlogPost from '@/components/BlogPost/BlogPost'
import { HOME_URL } from '@/data/meta'
import { IParams } from '@/types/query'
import { ITechPost } from '@/types/tech'
import { getTechBySlug, getTechSlugs } from '@/utils/techUtils'

interface PostPageProps {
  post: ITechPost
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
  const { slug } = params as IParams<string>
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
