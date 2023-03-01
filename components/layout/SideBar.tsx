import React from 'react'
import styled from 'styled-components'
import icon_search from '/public/assets/icon_search.svg'
import Image from 'next/image'
import Link from 'next/link'
const SideBar = ({ tags }: { tags: { [key: string]: number } }) => {
  const tagNames = Object.keys(tags)

  return (
    <SideBarLayout>
      <Wrap>
        <Image src={icon_search} width={20} alt="icon_search" />
        <Input placeholder="Search for keword" />
      </Wrap>
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
    </SideBarLayout>
  )
}

export default SideBar
const Wrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`
const Input = styled.input`
  border: none;
  font-size: 15px;
  width: 100%;
  ::placeholder {
    color: #b5b5b5;
    font-weight: lighter;
  }

  :focus {
    outline: none;
  }
`
const BoxTitle = styled.div`
  font-weight: bold;
  margin-bottom: 23px;
`
const List = styled.ul``

const Item = styled.li`
  margin-bottom: 20px;
  margin-left: 10px;
`
const SideBarLayout = styled.div`
  font-size: 14px;
  width: 330px;
`
