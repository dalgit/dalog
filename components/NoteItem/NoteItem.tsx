import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import styled from 'styled-components'
import { capitalizer } from '@/utils/common'

const NoteItem = ({ note }: any) => {
  const [isOpen, setIsOpen] = useState(false)
  const listName = capitalizer(note.name)

  return (
    <>
      <ListTitle onClick={() => setIsOpen(!isOpen)} key={note}>
        {listName}
      </ListTitle>

      {isOpen &&
        note.value.map((item: any) => (
          <Link href={`/note/${note.name}/${item.slug}`} key={item}>
            <ItemTitle>{item.title}</ItemTitle>
          </Link>
        ))}
    </>
  )
}

export default NoteItem

const ListTitle = styled.div`
  font-size: 20px;
  font-weight: bolder;
`

const ItemTitle = styled.div`
  font-size: 16px;
`
