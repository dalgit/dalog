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
          #{tag}
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
        <Image src={thumbnailPath} width={600} height={400} alt="thumbnail" />
      </ImageWrapper>
      <PostContent content={content} />
    </article>
  )
}

export default BlogPost

const ImageWrapper = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: center;
`

const PostHeaderInformation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #726ed7;

  a {
    color: #726ed7;
    margin-right: 10px;
  }
`

const PostHeader = styled.div`
  border-bottom: 1px solid #e4e4e4;
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
  color: #b5b5b5;
`
