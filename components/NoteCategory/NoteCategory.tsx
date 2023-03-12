import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { capitalizer } from '@/utils/common/capitalizer'
import arrow from '/public/assets/arrow.svg'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { INoteCategory } from '@/types/post'
import NoteCategoryItem from '../NoteCategoryItem/NoteCategoryItem'

interface NoteCategoryProps {
  category: INoteCategory
}

const NoteCategory = ({ category }: NoteCategoryProps) => {
  const router = useRouter()
  const [isCategoryOpen, setIsCategoryOpen] = useState<boolean>(false)
  const [currentCategory, currentNote] = router.query.slug as [string, string]
  const { name, topics } = category
  const capitalizedName = capitalizer(name)
  const isCurrentCategory = currentCategory === name

  useEffect(() => {
    if (isCurrentCategory) setIsCategoryOpen(true)
  }, [])

  return (
    <>
      <CategoryNameBox onClick={() => setIsCategoryOpen(!isCategoryOpen)}>
        <ImageWrapper isCategoryOpen={isCategoryOpen}>
          <Image src={arrow} width={10} height={10} alt={'arrow'} />
        </ImageWrapper>
        <CategoryName>{capitalizedName}</CategoryName>
      </CategoryNameBox>

      <ul>
        {isCategoryOpen &&
          topics.map((topic) => (
            <NoteCategoryItem
              key={topic.slug}
              topic={topic}
              categoryName={name}
              currentNote={currentNote}
            />
          ))}
      </ul>
    </>
  )
}

export default NoteCategory

const ImageWrapper = styled.div<{ isCategoryOpen: boolean }>`
  transform: ${({ isCategoryOpen }) => isCategoryOpen && 'rotate(90deg)'};
  transition: all ease 0.5s;
`
const CategoryNameBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: fit-content;
  max-width: 200px;
`
const CategoryName = styled.span`
  font-size: 20px;
  font-weight: bolder;
  margin-left: 15px;
  overflow: hidden;
  word-wrap: break-word;
`
