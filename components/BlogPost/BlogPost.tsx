import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import PostContent from '../PostContent/PostContent'
import { IProjectPost } from '@/types/project'
import { ITechPost } from '@/types/tech'
import { getIsProject, getIsTech } from '@/utils/getPostType'

type BlogPostProps = {
  post: IProjectPost | ITechPost
}

const BlogPost = ({ post }: BlogPostProps) => {
  const { title, createdDate, thumbnail, content, postSlug } = post

  const thumbnailPath = `/posts/${postSlug}/${thumbnail}`

  const isProject = getIsProject(post)
  const isTech = getIsTech(post)

  const techTags = isTech && (
    <>
      {post.tags.map((tag) => (
        <Link href="/" key={tag}>
          # {tag}
        </Link>
      ))}
    </>
  )

  const projectDescription = isProject && (
    <span>
      {post.description}-{post.type}
    </span>
  )

  return (
    <article>
      <PostHeader>
        <h1>{title}</h1>
        <PostHeaderInformation>
          <div>
            {techTags}
            {projectDescription}
          </div>
          <Date>{createdDate}</Date>
        </PostHeaderInformation>
      </PostHeader>
      <ImageWrapper>
        <Image src={thumbnailPath} fill alt="thumbnail" />
      </ImageWrapper>
      <PostContent content={content} />
    </article>
  )
}

export default BlogPost

const ImageWrapper = styled.div`
  position: relative;
  max-width: 70%;
  aspect-ratio: 1/0.6;
  margin: 1.5rem auto;
`

const PostHeaderInformation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 19px;
  color: ${({ theme }) => theme.colors._8782CD};

  a {
    color: inherit;
    font-size: inherit;
    margin-right: 20px;
  }
`

const PostHeader = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border_normal};
  padding-bottom: 25px;

  h1 {
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 20px;
    line-height: 130%;
  }
`

const Date = styled.time`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray};
`
