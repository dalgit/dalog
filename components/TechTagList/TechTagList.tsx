import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
interface SideBarProps {
  tags: { [tag: string]: number }
}

const TechTagList = ({ tags }: SideBarProps) => {
  const tagNames = Object.keys(tags)

  return (
    <TechTagListLayout>
      <BoxTitle>TAG</BoxTitle>
      <List>
        {tagNames.map((tagName) => {
          const tagCount = tags[tagName]
          return (
            <Item key={tagName}>
              <Link href={`/tag/${tagName}`}>
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

const Item = styled.li`
  margin-bottom: 20px;
  margin-left: 10px;
  font-weight: 300;
  width: fit-content;
  border: 1px solid #fafafa;
  border-radius: 10px;
  padding: 5px;
  background-color: #f7f7f8;

  a {
    font-size: 14px;
    color: gray;
  }
`
