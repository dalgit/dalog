import arrow from '/public/assets/small_arrow_icon.svg'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import NoteCategoryItem from '../NoteCategoryItem/NoteCategoryItem'
import { INoteCategory, INoteSlug } from '@/types/note'
import { capitalizer } from '@/utils/common/capitalizer'
import { useState, useEffect } from 'react'
import useToggle from '@/hooks/useToggle'

interface NoteCategoryProps {
  category: INoteCategory
  toggleSideBar: () => void
}

const NoteCategory = ({ category, toggleSideBar }: NoteCategoryProps) => {
  const { asPath, query } = useRouter()
  const [currentCategoryName] = query.slug as INoteSlug
  const { name: categoryName, topics } = category

  const { isActive: isCategoryOpen, toggle } = useToggle()

  const isCurrentCategory = currentCategoryName === categoryName
  const getIsCurrentTopic = (path: string) => asPath === path

  const toggleList = () => setIsCategoryOpen(!isCategoryOpen)

  useEffect(() => {
    setIsCategoryOpen(isCurrentCategory)
  }, [isCurrentCategory])

  return (
    <>
      <CategoryNameBox onClick={toggle}>
        <ImageWrapper isCategoryOpen={isCategoryOpen}>
          <Image src={arrow} width={8} height={8} alt="arrow" />
        </ImageWrapper>
        <CategoryName>{capitalizer(categoryName)}</CategoryName>
      </CategoryNameBox>

      {isCategoryOpen && (
        <ul>
          {topics.map((topic) => (
            <NoteCategoryItem
              key={topic.slug}
              topic={topic}
              categoryName={categoryName}
              toggleSideBar={toggleSideBar}
              getIsCurrentTopic={getIsCurrentTopic}
            />
          ))}
        </ul>
      )}
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
  max-width: 160px;
`
const CategoryName = styled.span`
  font-size: 16px;
  font-weight: bolder;
  margin-left: 12px;
  overflow: hidden;
  word-wrap: break-word;
`
