/* eslint-disable @typescript-eslint/no-empty-function */
import Router from 'next/router'
import { useEffect, useState } from 'react'
import { RenderType } from '@/constants/pageTypes'
import { getRenderType } from '@/utils/common/getRenderType'

const useLoading = () => {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const routeEventStart = (url: string) => {
      if (getRenderType(url) !== RenderType.STATIC_SITE_GENERATION)
        setIsLoading(true)
    }
    const routeEventEnd = (url: string) => {
      if (getRenderType(url) !== RenderType.STATIC_SITE_GENERATION)
        setIsLoading(false)
    }

    Router.events.on('routeChangeStart', routeEventStart)
    Router.events.on('routeChangeComplete', routeEventEnd)
    Router.events.on('routeChangeError', routeEventEnd)

    return () => {
      Router.events.off('routeChangeStart', routeEventStart)
      Router.events.off('routeChangeComplete', routeEventEnd)
      Router.events.off('routeChangeError', routeEventEnd)
    }
  }, [])

  return { isLoading }
}

export default useLoading
