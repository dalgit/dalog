import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { useRouter } from 'next/router'

interface SideBarProps {
  tags: { [tag: string]: number }
}

const TechTagList = ({ tags }: SideBarProps) => {
  const tagNames = Object.keys(tags)
  const router = useRouter()

  return (
    <TechTagListLayout>
      <BoxTitle>TAG</BoxTitle>
      <List>
        {tagNames.map((tagName) => {
          const tagCount = tags[tagName]
          const isCurrentTag = router.asPath === `/tech/tag/${tagName}`

          return (
            <Item key={tagName} isCurrentTag={isCurrentTag}>
              <Link href={`/tech/tag/${tagName}`}>
                {tagName} ({tagCount})
              </Link>
            </Item>
          )
        })}
      </List>
    </TechTagListLayout>
  )
}

export default TechTagList

const TechTagListLayout = styled.div`
  @media ${({ theme }) => theme.device.tabletMax} {
    display: flex;
    align-items: center;
    font-size: 18px;

    white-space: nowrap;
    overflow-x: scroll;
    margin-bottom: 60px;

    ::-webkit-scrollbar {
      height: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background: #b89ef6;
      border-radius: 2px;
    }
    ::-webkit-scrollbar-track {
      background: none;
    }
  }
`
const BoxTitle = styled.div`
  font-weight: bold;
  margin-bottom: 23px;
  font-size: 25px;
  color: #5f31d8;

  @media ${({ theme }) => theme.device.tabletMax} {
    color: black;
  }
`
const List = styled.ul`
  @media ${({ theme }) => theme.device.tabletMax} {
    display: flex;
    width: 100%;
  }
`

const Item = styled.li<{ isCurrentTag: boolean }>`
  margin-bottom: 20px;
  margin-left: 10px;
  font-weight: 300;
  width: fit-content;
  border-radius: 10px;
  padding: 5px;
  background-color: ${({ isCurrentTag }) =>
    isCurrentTag ? '#C8B7F2' : '#f7f7f8;'};

  a {
    font-size: 16px;
    color: ${({ isCurrentTag }) => (isCurrentTag ? 'white' : 'gray;')};
  }
`
