import React from 'react'
import { Topic } from '@/types/post'
import Link from 'next/link'
import styled from 'styled-components'

const NoteCategoryItem = ({
  topic,
  categoryName,
  currentNote,
}: NoteCategoryItem) => {
  const { slug, title } = topic
  const notePath = `/note/${categoryName}/${slug}`
  const isCurrentNote = currentNote === slug

  return (
    <Item isCurrentNote={isCurrentNote} key={slug}>
      <Link href={notePath}>{title}</Link>
    </Item>
  )
}

export default NoteCategoryItem

interface NoteCategoryItem {
  topic: Topic
  categoryName: string
  currentNote: string
}

const Item = styled.li<{ isCurrentNote: boolean }>`
  margin: 15px 0px 15px 30px;

  a {
    font-size: 16px;
    padding-left: 5px;
    color: ${({ isCurrentNote }) => (isCurrentNote ? '#6028e1' : 'black')};
  }
`
