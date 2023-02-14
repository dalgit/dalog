import cardTmp from '/public/assets/cardTmp.jpg'
import Image from 'next/image'
import styled from 'styled-components'

const PostCard = () => {
  return (
    <PostCardLayout>
      <Image src={cardTmp} width={180} height={150} alt="tmp" />
      <ContentBox>
        <Tag>#임시태그1</Tag>
        <Title>임시 제목입니다.</Title>
        <ContentPreview>임시 내용</ContentPreview>
        <Date>2032.02.15</Date>
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

const Tag = styled.p`
  color: #726ed7;
  font-size: 13px;

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
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
