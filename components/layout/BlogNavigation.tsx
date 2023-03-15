import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { BLOG_NAVIGATION_MENUS as menus } from '@/constants/headerMenus'
import { BlogType } from '@/constants/pageTypes'
import { getBlogType } from '@/utils/common/getBlogType'

const BlogNavigation = () => {
  const { pathname } = useRouter()
  const blogType = getBlogType(pathname)
  const isNotBlogPage = blogType === BlogType.NONE

  if (isNotBlogPage) return null

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
  margin-top: 24px;
  margin-right: 32px;
  margin-bottom: 56px;

  a {
    color: ${({ isCurrentUrl, theme }) =>
      isCurrentUrl ? theme.colors.lightBlack : theme.colors.gray};
  }
`
const NavigationList = styled.ul`
  font-size: 24px;
  display: flex;
  font-weight: bold;

  @media ${({ theme }) => theme.device.tabletMax} {
    justify-content: center;
  }
`
