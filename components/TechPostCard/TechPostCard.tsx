import Image from 'next/image'
import styled from 'styled-components'
import { ITechPost } from '@/types/post'
import Link from 'next/link'

type PostCardProps = {
  post: ITechPost
}

const TechPostCard = ({ post }: PostCardProps) => {
  const { title, content, tags, createdDate, postSlug, thumbnail } = post
  const thumbnailPath = `/posts/${postSlug}/${thumbnail}`

  return (
    <TechPostCardLayout>
      <Link href={`/tech/${postSlug}`}>
        <Image src={thumbnailPath} width={180} height={150} alt="tmp" />
      </Link>
      <ContentBox>
        <Tags>
          {tags?.map((tag) => (
            <Link href={`/tag/${tag}`} key={tag}>
              #{tag}
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
  height: 150px;
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
  font-size: 20px;
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
  height: 32px;

  p {
    display: inline;
    white-space: normal;
  }
`

const Date = styled.p`
  font-size: 12px;
  color: gray;
`
