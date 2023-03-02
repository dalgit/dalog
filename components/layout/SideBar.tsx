import React from 'react'
import styled from 'styled-components'
import icon_search from '/public/assets/icon_search.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'

const SideBar = ({ tags }: { tags: { [key: string]: number } }) => {
  const tagNames = Object.keys(tags)
  const router = useRouter()

  const [searchKeword, setSearchKeword] = useState('')

  const search = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!searchKeword) {
      router.push({ pathname: '/' })
    } else {
      router.push({ pathname: '/search', query: { keyword: searchKeword } })
    }
  }

  return (
    <SideBarLayout>
      <Form onSubmit={search}>
        <Button type="submit">
          <Image src={icon_search} width={20} alt="icon_search" />
        </Button>
        <Input
          type="text"
          onChange={(e) => setSearchKeword(e.target.value)}
          placeholder="Search for keword"
        />
      </Form>
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

const Button = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
`
const Form = styled.form`
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
