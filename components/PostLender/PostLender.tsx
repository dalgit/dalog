import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

import { IPost } from '@/types/post'

type PostLenderProps = {
  post: IPost
}

const PostLender = ({ post }: PostLenderProps) => {
  const {
    title,
    createdDate,
    tags,
    content,
    postSlug,
    thumbnail,
    description,
  } = post

  const thumbnailPath = `/posts/${postSlug}/${thumbnail}`
  return (
    <article>
      <HeadBox>
        <h1>{title}</h1>
        <HeadSubBox>
          <div>
            {tags ? (
              tags.map((tag) => (
                <Link href={'/'} key={tag}>
                  #{tag}
                </Link>
              ))
            ) : (
              <h3>{description}</h3>
            )}
          </div>
          <Date>{createdDate}</Date>
        </HeadSubBox>
      </HeadBox>
      <ImageWrap>
        <Image src={thumbnailPath} alt="thumbnail" width={600} height={400} />
      </ImageWrap>
      <ContentBox dangerouslySetInnerHTML={{ __html: content }}></ContentBox>
    </article>
  )
}

export default PostLender

const ImageWrap = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: center;
`
const ContentBox = styled.div`
  white-space: pre-Wrap;
  margin: 40px 0px;

  * {
    all: revert;
  }
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
