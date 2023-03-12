import React from 'react'
import Header from './Header'
import { ReactNode } from 'react'
import Footer from './Footer'
import styled from 'styled-components'
import BlogNavigation from './BlogNavigation'

type LayoutProps = { children: ReactNode }

const Layout = ({ children }: LayoutProps) => {
  return (
    <BaseLayout>
      <Header />
      <ContentWrapper>
        <BlogNavigation />
        {children}
      </ContentWrapper>
      <Footer />
    </BaseLayout>
  )
}

export default Layout

const BaseLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ContentWrapper = styled.div`
  padding: 0 10px 50px 0;
  margin-top: ${({ theme }) => theme.pageBaseSize.headerHeight};
  min-height: ${({ theme }) =>
    `calc(100vh - ${theme.pageBaseSize.headerHeight} - ${theme.pageBaseSize.footerHeight})`};
  width: 1100px;
  max-width: 100%;
`
