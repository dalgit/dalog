import cardTmp from '/public/assets/cardTmp.jpg'
import Image from 'next/image'
import styled from 'styled-components'
import { IPost } from '@/types/post'

const PostCard = ({ title, content, tags, createdDate }: IPost) => {
  return (
    <PostCardLayout>
      <Image src={cardTmp} width={180} height={150} alt="tmp" />
      <ContentBox>
        <Tags>
          {tags.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </Tags>
        <Title>{title}</Title>
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
  color: #726ed7;
  font-size: 13px;

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  span {
    margin-right: 10px;
    line-height: normal;
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
