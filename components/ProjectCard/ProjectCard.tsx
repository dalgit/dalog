import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
const ProjectCard = ({ post }: any) => {
  const thumbnailPath = `/posts/${post?.postSlug}/${post?.thumbnail}`
  return (
    <ProjCardLayout>
      <Link href={`/projects/${post?.postSlug}`}>
        <Image
          src={thumbnailPath}
          alt="tmp"
          width={280}
          height={170}
          style={{
            borderRadius: '12px 12px 0 0',
          }}
        />
        <ContentBox>
          <BoxHeader>
            <span>{post?.type}</span>
            <span>{post?.createdDate}</span>
          </BoxHeader>
          <Title>{post?.title}</Title>
          <Content>{post?.description}</Content>
        </ContentBox>
      </Link>
    </ProjCardLayout>
  )
}

export default ProjectCard
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
  width: 280px;
  height: 280px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 12px;
`
