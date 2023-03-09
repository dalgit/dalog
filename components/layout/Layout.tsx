import React from 'react'
import MainHeader from './MainHeader'
import { ReactNode } from 'react'
import Footer from './Footer'
import styled from 'styled-components'
import SubHeader from './SubHeader'

type LayoutProps = { children: ReactNode }

const Layout = ({ children }: LayoutProps) => {
  return (
    <BaseLayout>
      <ContentWrapper>
        <MainHeader />
        <SubHeader />
        {children}
      </ContentWrapper>
      <Footer />
    </BaseLayout>
  )
}

export default Layout

const ContentWrapper = styled.div`
  padding: 0 10px;
  margin-top: ${({ theme }) => theme.pageBaseSize.headerHeight};
  min-height: ${({ theme }) =>
    `calc(100vh - ${theme.pageBaseSize.headerHeight} - ${theme.pageBaseSize.footerHeight})`};

  width: 1100px;
  max-width: 100%;
`
const BaseLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
