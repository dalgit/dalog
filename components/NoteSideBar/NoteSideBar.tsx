import Image from 'next/image'
import styled from 'styled-components'
import NoteCategory from '../NoteCategory/NoteCategory'
import arrow from '/public/assets/right_arrow_button.png'
import useClickOutside from '@/hooks/useClickOutside'
import useToggle from '@/hooks/useToggle'
import { INoteCategories } from '@/types/note'
interface NoteSideBarProps {
  categories: INoteCategories
}

const NoteSideBar = ({ categories }: NoteSideBarProps) => {
  const { isActive: isSideBarOpen, toggle: toggleSideBar } = useToggle()
  const handleSideBarClose = () => isSideBarOpen && toggleSideBar()
  const sideBarRef = useClickOutside<HTMLUListElement>(handleSideBarClose)

  return (
    <>
      <SideBarOpenButton onClick={toggleSideBar}>
        <Image src={arrow} alt="arrow" width={24} />
      </SideBarOpenButton>
      <NoteSideBarLayout isSideBarOpen={isSideBarOpen} ref={sideBarRef}>
        {categories.map((category) => (
          <NoteCategory
            key={category.name}
            category={category}
            toggleSideBar={toggleSideBar}
          />
        ))}
      </NoteSideBarLayout>
    </>
  )
}

export default NoteSideBar

const NoteSideBarLayout = styled.ul<{ isSideBarOpen: boolean }>`
  border-right: 2px solid #eaeaea;
  max-width: 160px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: sticky;
  position: -webkit-sticky;
  height: 630px;
  top: ${({ theme }) => theme.pageBaseSize.headerHeight};
  padding-top: 48px;

  @media ${({ theme }) => theme.device.mobile} {
    padding-left: 20px;
    position: fixed;
    top: 0;
    transition: left 0.3s ease-in-out;
    z-index: 15;
    height: 100%;
    left: 0;
    left: ${({ isSideBarOpen }) => (isSideBarOpen ? '0' : `-160px`)};
    background-color: white;

    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 24px;

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
