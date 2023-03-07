import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import logo from '/public/assets/icon_logo.png'
import hamburger from '/public/assets/hamburger.png'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { MAIN_MENUS as menus } from '@/constants/headerMenus'
import { useState, useEffect, useRef } from 'react'
const MainHeader = () => {
  const router = useRouter()
  const path = router.pathname
  const listRef = useRef<HTMLDivElement>(null)
  const [isMenuListOpen, setIsMenuListOpen] = useState<boolean>(false)

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (listRef.current && !listRef.current.contains(e.target as Node)) {
        setIsMenuListOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [listRef, setIsMenuListOpen])

  return (
    <MainHeaderLayout isMenuListOpen={isMenuListOpen}>
      <MainHeaderInner ref={listRef}>
        <Link href="/">
          <Image alt="logo" src={logo} height={30} />
        </Link>
        <List isMenuListOpen={isMenuListOpen}>
          {menus.map((menu) => {
            return (
              <Item isCurrentUrl={path === menu.path} key={menu.id}>
                <Link href={menu.path}>{menu.name}</Link>
              </Item>
            )
          })}
        </List>
        <HamburgerButton onClick={() => setIsMenuListOpen(!isMenuListOpen)}>
          <Image alt="logo" src={hamburger} height={30} />
        </HamburgerButton>
      </MainHeaderInner>
    </MainHeaderLayout>
  )
}

export default MainHeader

const HamburgerButton = styled.button`
  background-color: white;
  border: none;
  z-index: 10;
  @media ${({ theme }) => theme.device.laptop} {
    display: none;
  }
`

const MainHeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 900px;

  @media ${({ theme }) => theme.device.mobile} {
    padding: 0 20px;
    position: relative;
  }
`

const MainHeaderLayout = styled.nav<{ isMenuListOpen: boolean }>`
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: 1.5px solid #f5f5f5;
  background-color: white;
  height: ${({ theme }) => theme.layoutHeight.header};
`

const List = styled.ul<{ isMenuListOpen: boolean }>`
  display: flex;
  align-items: center;
  height: 100%;
  position: absolute;

  @media ${({ theme }) => theme.device.mobile} {
    height: 200px;
    width: 100%;
    flex-direction: column;
    left: 0;
    transition: top 0.3s ease-in-out;
    top: ${({ isMenuListOpen }) => (isMenuListOpen ? '0' : `-200px`)};
    background-color: rgba(128, 128, 128, 0.8);
  }
`

const Item = styled.div<{ isCurrentUrl: boolean }>`
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 26px;
  border-bottom: ${({ isCurrentUrl }) => isCurrentUrl && '4px solid #6028e1'};

  a {
    color: ${({ isCurrentUrl }) => (isCurrentUrl ? '#6028e1' : 'black')};
  }

  &:not(:last-child) {
    margin-right: 60px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    border-bottom: none;
    a {
      color: white;
    }
    &:not(:last-child) {
      margin-right: 0;
    }
  }
`
