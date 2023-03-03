import React, { useEffect } from 'react'
import Link from 'next/link'
import { useState } from 'react'
import styled from 'styled-components'
import { capitalizer } from '@/utils/common'
import fr from '/public/assets/fr.svg'
import Image from 'next/image'
import { useRouter } from 'next/router'

const NoteItem = ({ category }: any) => {
  const { folder, noteList } = category
  const [isOpen, setIsOpen] = useState(false)
  const listName = capitalizer(folder)
  const router = useRouter()
  const currentQuery = router.query.slug?.[0]
  const currentPath = router.asPath

  useEffect(() => {
    if (currentQuery === folder) {
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
          noteList.map((note: any) => {
            const { slug, title } = note
            return (
              <Item
                isCurrentNote={`/note/${folder}/${slug}` === currentPath}
                key={slug}
              >
                <Link href={`/note/${folder}/${slug}`}>{title}</Link>
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
