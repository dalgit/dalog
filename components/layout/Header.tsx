import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import logo from '/public/assets/icon_logo.png'
import hamburger from '/public/assets/hamburger.png'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { MAIN_MENUS as menus } from '@/constants/headerMenus'
import { getPageType } from '@/utils/common/getPageType'
import useListToggle from '@/hooks/useListToggle'

const Header = () => {
  const { pathname } = useRouter()
  const pageType = getPageType(pathname)
  const { isListOpen, listRef, toggleList } = useListToggle()

  return (
    <HeaderLayout isListOpen={isListOpen}>
      <HeaderInner ref={listRef}>
        <Link href="/">
          <Image alt="logo" src={logo} height={30} />
        </Link>
        <List isListOpen={isListOpen}>
          {menus.map((menu) => {
            const isCurrentUrl = menu.type === pageType
            return (
              <Item isCurrentUrl={isCurrentUrl} key={menu.id}>
                <Link href={menu.path} onClick={toggleList}>
                  {menu.name}
                </Link>
              </Item>
            )
          })}
        </List>
        <HamburgerButton onClick={toggleList}>
          <Image alt="logo" src={hamburger} height={30} />
        </HamburgerButton>
      </HeaderInner>
    </HeaderLayout>
  )
}

export default Header

const HamburgerButton = styled.button`
  background-color: white;
  border: none;
  z-index: 15;
  display: none;

  @media ${({ theme }) => theme.device.mobile} {
    display: block;
  }
`

const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1100px;
  padding: 0 10px;

  @media ${({ theme }) => theme.device.tabletMax} {
    position: relative;
  }
`

const HeaderLayout = styled.nav<{ isListOpen: boolean }>`
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: 1.5px solid #f5f5f5;
  background-color: white;
  height: ${({ theme }) => theme.pageBaseSize.headerHeight};
  z-index: 10;
`

const List = styled.ul<{ isListOpen: boolean }>`
  display: flex;
  align-items: center;
  height: 100%;

  @media ${({ theme }) => theme.device.mobile} {
    position: absolute;

    height: 200px;
    width: 100%;
    flex-direction: column;
    left: 0;
    transition: top 0.3s ease-in-out;
    top: ${({ isListOpen }) => (isListOpen ? '0' : `-200px`)};
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
