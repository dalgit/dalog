import Image from 'next/image'
import styled from 'styled-components'
import useListToggle from '@/hooks/useListToggle'
import { INoteCategories } from '@/types/note'
import NoteCategory from '../NoteCategory/NoteCategory'
import arrow from '/public/assets/right-arrow.png'

interface NoteSideBarProps {
  categories: INoteCategories
}

const NoteSideBar = ({ categories }: NoteSideBarProps) => {
  const { isListOpen, listRef, toggleList } = useListToggle<HTMLUListElement>()

  return (
    <>
      <SideBarOpenButton onClick={toggleList}>
        <Image src={arrow} alt="arrow" width={30} />
      </SideBarOpenButton>
      <NoteSideBarLayout isListOpen={isListOpen} ref={listRef}>
        {categories.map((category) => (
          <NoteCategory key={category.name} category={category} />
        ))}
      </NoteSideBarLayout>
    </>
  )
}

export default NoteSideBar

const NoteSideBarLayout = styled.ul<{ isListOpen: boolean }>`
  border-right: 2px solid #eaeaea;
  max-width: 200px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  position: sticky;
  position: -webkit-sticky;
  height: 700px;
  top: ${({ theme }) => theme.pageBaseSize.headerHeight};
  padding-top: 60px;

  @media ${({ theme }) => theme.device.mobile} {
    padding-left: 25px;
    position: fixed;
    top: 0;
    transition: left 0.3s ease-in-out;
    z-index: 15;
    height: 100%;
    left: 0;
    left: ${({ isListOpen }) => (isListOpen ? '0' : `-200px`)};
    background-color: white;

    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 30px;

    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }
`

const SideBarOpenButton = styled.button`
  background-color: white;
  border: none;
  display: none;

  @media ${({ theme }) => theme.device.mobile} {
    display: block;
    position: fixed;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    left: 0;
  }
`
