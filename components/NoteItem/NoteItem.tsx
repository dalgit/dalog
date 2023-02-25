import React from 'react'
import Link from 'next/link'
import { useState } from 'react'

const NoteItem = ({ note }: any) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div onClick={() => setIsOpen(!isOpen)} key={note}>
        {note.name}
      </div>

      {isOpen &&
        note.value.map((item: any) => (
          <Link href={`/note/${note.name}/${item.slug}`} key={item}>
            <div>{item.title}</div>
          </Link>
        ))}
    </>
  )
}

export default NoteItem
