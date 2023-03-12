import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { BLOG_NAVIGATION_MENUS as menus } from '@/constants/headerMenus'
import Link from 'next/link'
import { getBlogType } from '@/utils/getCurrentPage'
import { BlogType } from '@/utils/getCurrentPage'
const BlogNavigation = () => {
  const { pathname } = useRouter()
  const blogType = getBlogType(pathname)
  const isNotBlogPage = blogType === BlogType.NONE

  if (isNotBlogPage) return

  return (
    <NavigationList>
      {menus.map((menu) => {
        const isCurrentUrl = menu.type === blogType
        return (
          <NavigationItem isCurrentUrl={isCurrentUrl} key={menu.id}>
            <Link href={menu.path}>{menu.name}</Link>
          </NavigationItem>
        )
      })}
    </NavigationList>
  )
}

export default BlogNavigation

const NavigationItem = styled.li<{ isCurrentUrl: boolean }>`
  margin-top: 30px;
  margin-right: 40px;
  margin-bottom: 70px;

  a {
    color: ${({ isCurrentUrl }) => (isCurrentUrl ? '#6c6767' : '#AAAAAA')};
  }
`
const NavigationList = styled.ul`
  font-size: 30px;
  display: flex;
  font-weight: bold;

  @media ${({ theme }) => theme.device.tabletMax} {
    justify-content: center;
  }
`
