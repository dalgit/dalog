import { GlobalStyle } from '@/styles/global-style'
import type { AppProps } from 'next/app'
import Layout from '@/components/layout/Layout'
import { ThemeProvider } from 'styled-components'
import theme from '@/styles/theme'
import { DefaultSeo } from 'next-seo'
import SEO from '@/seo.config'
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
