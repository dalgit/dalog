import { DefaultSeo } from 'next-seo'
import { ThemeProvider } from 'styled-components'
import type { AppProps } from 'next/app'
import Layout from '@/components/layout/Layout'
import SEO from '@/seo.config'
import { GlobalStyle } from '@/styles/global-style'
import theme from '@/styles/theme'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <DefaultSeo {...SEO} />
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
