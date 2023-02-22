import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import cardTmp from '/public/assets/cardTmp.jpg'
import Link from 'next/link'
const ProjectCard = () => {
  return (
    <ProjCardLayout>
      <Link href={'/'}>
        <Image
          src={cardTmp}
          alt="tmp"
          width={280}
          height={170}
          style={{
            borderRadius: '12px 12px 0 0',
          }}
        />
        <ContentBox>
          <BoxHeader>
            <span>Toy Project</span>
            <span>2023-02-01</span>
          </BoxHeader>
          <Title>Blog (Dalog)</Title>
          <Content>나만의 블로그 만들기</Content>
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
