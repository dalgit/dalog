import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import { ITechPost } from '@/types/tech'

type PostCardProps = {
  post: ITechPost
}

const TechPostCard = ({ post }: PostCardProps) => {
  const { title, content, tags, createdDate, postSlug, thumbnail } = post
  const thumbnailPath = `/posts/${postSlug}/${thumbnail}`

  return (
    <TechPostCardLayout>
      <ImageWrapper>
        <Link href={`/tech/${postSlug}`}>
          <Image src={thumbnailPath} fill alt="thumbnail" />
        </Link>
      </ImageWrapper>
      <ContentBox>
        <Tags>
          {tags?.map((tag) => (
            <Link href={`/tech/tag/${tag}`} key={tag}>
              # {tag}
            </Link>
          ))}
        </Tags>
        <Link href={`/tech/${postSlug}`}>
          <Title>{title}</Title>
        </Link>
        <ContentPreview dangerouslySetInnerHTML={{ __html: content }} />
        <Date>{createdDate}</Date>
      </ContentBox>
    </TechPostCardLayout>
  )
}

export default TechPostCard

const TechPostCardLayout = styled.article`
  display: flex;
  height: 170px;

  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
    align-items: center;

    max-width: 650px;
    width: 100%;

    height: auto;
  }
`

const ImageWrapper = styled.div`
  height: 100%;
  position: relative;
  width: 250px;
  margin-right: 20px;

  @media ${({ theme }) => theme.device.mobile} {
    margin-right: 0;
    width: 100%;
    border-radius: 5%;
    aspect-ratio: 1/0.6;
    margin-bottom: 30px;
    overflow: hidden;
  }
`

const ContentBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;

  @media ${({ theme }) => theme.device.laptop} {
    padding: 10px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    & > * {
      margin-bottom: 7px;
    }
  }
`

const Tags = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  a {
    margin-right: 15px;
    color: ${({ theme }) => theme.colors._8782CD};
    font-size: 16px;
    line-height: normal;
  }
`

const Title = styled.p`
  font-size: 25px;
  font-weight: bolder;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  line-height: normal;
`

const ContentPreview = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  font-size: 16px;
  line-height: 1.2;
  height: calc(16px * 2 * 1.2);
  p {
    display: inline;
    white-space: normal;
  }
`

const Date = styled.p`
  font-size: 14px;
  color: gray;
`
