import { GetStaticPaths, GetStaticProps } from 'next'
import postUtil from '@/utils/postUtil'
import { ParsedUrlQuery } from 'querystring'
import { IPost } from '@/types/post'
import styled from 'styled-components'
import Link from 'next/link'
type PostPageProps = {
  post: IPost
}

const PostPage = ({ post }: PostPageProps) => {
  const { title, createdDate, tags, content } = post

  console.log(content)
  return (
    <article>
      <HeadBox>
        <h1>{title}</h1>
        <HeadSubBox>
          <div>
            {tags.map((tag) => (
              <Link href={'/'} key={tag}>
                #{tag}
              </Link>
            ))}
          </div>
          <Date>{createdDate}</Date>
        </HeadSubBox>
      </HeadBox>

      <ContentBox>{content}</ContentBox>
    </article>
  )
}

export default PostPage

const ContentBox = styled.div`
  white-space: pre-Wrap;
  margin: 40px 0px;
`

const HeadSubBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const HeadBox = styled.div`
  border-bottom: 1px solid #e4e4e4;
  padding-bottom: 25px;

  h1 {
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 20px;
    line-height: 130%;
  }

  a {
    font-size: 16px;
    color: #726ed7;
    margin-right: 10px;
  }
`

const Date = styled.span`
  font-size: 14px;
  color: #b5b5b5;
`

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as IParams
  const post = postUtil.getPostBySlug(slug)

  console.log('fsdfadsfadsfa', post)
  return {
    props: { post },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { slug: 'tmp' } }],
    fallback: true,
  }
}

interface IParams extends ParsedUrlQuery {
  slug: string
}
