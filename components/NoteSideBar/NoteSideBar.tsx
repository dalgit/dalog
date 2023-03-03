import React from 'react'
import NoteCategory from '../NoteCategory/NoteCategory'
import styled from 'styled-components'
import { INoteCategories } from '@/types/post'

interface NoteSideBarProps {
  categories: INoteCategories
}

const NoteSideBar = ({ categories }: NoteSideBarProps) => {
  return (
    <NoteSideBarLayout>
      {categories.map((category) => (
        <NoteCategory key={category.name} category={category} />
      ))}
    </NoteSideBarLayout>
  )
}

export default NoteSideBar

const NoteSideBarLayout = styled.ul`
  border-right: 2px solid #eaeaea;
  width: 200px;

  > div {
    margin-bottom: 20px;
  }
`
