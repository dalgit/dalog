import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import logo from '/public/assets/logo.svg'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { HEADER_MENUS as menus } from '@/constants/headerMenus'

const MainHeader = () => {
  const router = useRouter()
  const path = router.pathname

  return (
    <Wrapper>
      <Link href="/">
        <Image alt="logo" src={logo} height={30} />
      </Link>
      <List>
        {menus.map((menu) => {
          return (
            <Item isCurrentUrl={path === menu.path} key={menu.id}>
              <Link href={menu.path}>{menu.name}</Link>
            </Item>
          )
        })}
      </List>
    </Wrapper>
  )
}

export default MainHeader

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
`

const Wrapper = styled.nav`
  padding: 0 430px;
  border-bottom: 1px solid #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 63px;
`
const List = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;
`
