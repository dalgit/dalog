import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { IProjectPost } from '@/types/project'

interface ProjectCardProps {
  post: IProjectPost
}

const ProjectCard = ({ post }: ProjectCardProps) => {
  const { postSlug, thumbnail, type, createdDate, title, description } = post
  const thumbnailPath = `/posts/${postSlug}/${thumbnail}`
  const postUrl = `/projects/${postSlug}`

  return (
    <ProjCardLayout>
      <Link href={postUrl}>
        <ImageWrapper>
          <Image
            src={thumbnailPath}
            alt="thumbnail"
            fill
            style={{
              borderRadius: '12px 12px 0 0',
            }}
          />
        </ImageWrapper>
        <ContentBox>
          <BoxHeader>
            <span>{type}</span>
            <span>{createdDate}</span>
          </BoxHeader>
          <Title>{title}</Title>
          <Content>{description}</Content>
        </ContentBox>
      </Link>
    </ProjCardLayout>
  )
}

export default ProjectCard
const ImageWrapper = styled.div`
  aspect-ratio: 1/0.6;
  position: relative;
`
const ContentBox = styled.div`
  padding: 15px;
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const BoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: gray;
`

const Content = styled.div`
  font-size: 14px;
`
const Title = styled.div`
  font-weight: bold;
  font-size: 18px;
`
const ProjCardLayout = styled.div`
  max-width: 280px;
  width: 100%;
  aspect-ratio: 1/1;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 12px;
`
