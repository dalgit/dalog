import React from 'react'
import MainHeader from './MainHeader'
import { ReactNode } from 'react'
import Footer from './Footer'
import styled from 'styled-components'
import SubHeader from './SubHeader'
type LayoutProps = { children: ReactNode }

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <BaseLayout>
        <MainHeader />
        <SubHeader />
        {children}
      </BaseLayout>
      <Footer />
    </>
  )
}

export default Layout

const BaseLayout = styled.div`
  padding: 0 300px;
  margin-top: ${({ theme }) => theme.layoutHeight.header};
  min-height: ${({ theme }) =>
    `calc(100vh - ${theme.layoutHeight.header} - ${theme.layoutHeight.footer})`};
`
