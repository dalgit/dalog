import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { SUB_MENUS as menus } from '@/constants/headerMenus'
import Link from 'next/link'

const SubHeader = () => {
  const router = useRouter()
  const path = router.pathname
  console.log(path)
  return (
    <List>
      {menus.map((menu) => {
        return (
          <Item isCurrentUrl={path === menu.path} key={menu.id}>
            <Link href={menu.path}>{menu.name}</Link>
          </Item>
        )
      })}
    </List>
  )
}

export default SubHeader
const Item = styled.li<{ isCurrentUrl: boolean }>`
  a {
    color: ${({ isCurrentUrl }) => (isCurrentUrl ? '#6028e1' : 'black')};
  }
`
const List = styled.ul`
  font-size: 30px;
  display: flex;
  font-weight: bold;

  li {
    margin-top: 30px;
    margin-right: 40px;
    margin-bottom: 70px;
  }
`
