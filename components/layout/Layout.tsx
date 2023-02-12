import React from 'react'
import MainHeader from './MainHeader'
import { ReactNode } from 'react'

type LayoutProps = { children: ReactNode }

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <MainHeader />
      {children}
    </>
  )
}

export default Layout
