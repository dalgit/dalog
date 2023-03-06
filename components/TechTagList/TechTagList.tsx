import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
interface SideBarProps {
  tags: { [tag: string]: number }
}

const TechTagList = ({ tags }: SideBarProps) => {
  const tagNames = Object.keys(tags)

  return (
    <>
      <BoxTitle>Tags</BoxTitle>
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
    </>
  )
}

export default TechTagList

const BoxTitle = styled.div`
  font-weight: bold;
  margin-bottom: 23px;
`
const List = styled.ul``

const Item = styled.li`
  margin-bottom: 20px;
  margin-left: 10px;
`
