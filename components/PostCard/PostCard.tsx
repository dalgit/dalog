import cardTmp from '/public/assets/cardTmp.jpg'
import Image from 'next/image'
import styled from 'styled-components'
import { IPost } from '@/types/post'
import Link from 'next/link'

const PostCard = ({ title, content, tags, createdDate, postSlug }: IPost) => {
  return (
    <PostCardLayout>
      <Link as={`/posts/${postSlug}`} href="/posts/[slug]">
        <Image src={cardTmp} width={180} height={150} alt="tmp" />
      </Link>
      <ContentBox>
        <Tags>
          {tags.map((tag) => (
            <Link href="/" key={tag}>
              #{tag}
            </Link>
          ))}
        </Tags>
        <Link as={`/posts/${postSlug}`} href="/posts/[slug]">
          <Title>{title}</Title>
        </Link>
        <ContentPreview>{content}</ContentPreview>
        <Date>{createdDate}</Date>
      </ContentBox>
    </PostCardLayout>
  )
}

export default PostCard

const PostCardLayout = styled.article`
  display: flex;
`

const ContentBox = styled.div`
  padding: 10px 10px 10px 30px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  justify-content: space-between;
`

const Tags = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  a {
    margin-right: 10px;
    line-height: normal;
    color: #726ed7;
    font-size: 13px;
  }
`

const Title = styled.p`
  font-size: 30px;
  font-weight: bolder;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

const ContentPreview = styled.p`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  font-size: 16px;
  height: 32px;
`

const Date = styled.p`
  font-size: 12px;
  color: gray;
`
