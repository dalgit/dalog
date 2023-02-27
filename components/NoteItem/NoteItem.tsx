import React, { useEffect } from 'react'
import Link from 'next/link'
import { useState } from 'react'
import styled from 'styled-components'
import { capitalizer } from '@/utils/common'
import fr from '/public/assets/fr.svg'
import Image from 'next/image'
import { useRouter } from 'next/router'

const NoteItem = ({ note }: any) => {
  const [isOpen, setIsOpen] = useState(false)
  const listName = capitalizer(note.name)
  const router = useRouter()
  const currentQuery = router.query.slug?.[0]
  const currentPath = router.asPath

  useEffect(() => {
    if (currentQuery === note.name) {
      setIsOpen(true)
    }
  }, [])

  return (
    <div>
      <ListTitleBox onClick={() => setIsOpen(!isOpen)}>
        <ImageWrapper isOpen={isOpen}>
          <Image src={fr} width={10} height={10} alt={'fff'} />
        </ImageWrapper>
        <ListTitle>{listName}</ListTitle>
      </ListTitleBox>

      <ul>
        {isOpen &&
          note.value.map((item: any) => {
            return (
              <Item
                isCurrentNote={
                  `/note/${note.name}/${item.slug}` === currentPath
                }
                key={item}
              >
                <Link href={`/note/${note.name}/${item.slug}`}>
                  {item.title}
                </Link>
              </Item>
            )
          })}
      </ul>
    </div>
  )
}

export default NoteItem

const ImageWrapper = styled.div<{ isOpen: boolean }>`
  transform: ${({ isOpen }) => isOpen && 'rotate(90deg)'};
  transition: all ease 0.5s;
`
const ListTitleBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: fit-content;
`
const ListTitle = styled.span`
  font-size: 20px;
  font-weight: bolder;
  margin-left: 15px;
`

const Item = styled.li<{ isCurrentNote: boolean }>`
  margin: 15px 0px 15px 30px;

  a {
    font-size: 16px;
    padding-left: 5px;
    color: ${({ isCurrentNote }) => (isCurrentNote ? '#6028e1' : 'black')};
  }
`
