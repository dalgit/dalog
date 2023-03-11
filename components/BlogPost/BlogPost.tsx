import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { getIsProject, getIsTech } from '@/utils/getPostType'
import { IProjectPost, ITechPost } from '@/types/post'
import PostContent from '../PostContent/PostContent'

type BlogPostProps = {
  post: IProjectPost | ITechPost
}

const BlogPost = ({ post }: BlogPostProps) => {
  const { title, createdDate, thumbnail, content, postSlug } = post

  const thumbnailPath = `/posts/${postSlug}/${thumbnail}`

  const isProject = getIsProject(post)
  const isTech = getIsTech(post)

  return (
    <article>
      <HeadBox>
        <h1>{title}</h1>
        <HeadSubBox>
          <div>
            {isTech &&
              post.tags.map((tag) => (
                <Link href={'/'} key={tag}>
                  #{tag}
                </Link>
              ))}
            {isProject && (
              <h3>
                {post.description}-{post.type}
              </h3>
            )}
          </div>
          <Date>{createdDate}</Date>
        </HeadSubBox>
      </HeadBox>
      <ImageWrap>
        <Image src={thumbnailPath} alt="thumbnail" width={600} height={400} />
      </ImageWrap>
      <PostContent content={content} />
    </article>
  )
}

export default BlogPost

const ImageWrap = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: center;
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
