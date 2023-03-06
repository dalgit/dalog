import { DefaultSeoProps } from 'next-seo'

const SEO: DefaultSeoProps = {
  titleTemplate: '%s | Dalog',
  description: 'FrontEnd technology and my records',
  defaultTitle: 'FrontEnd Technology Blog',
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/assets/favicon.ico',
    },
  ],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'http://www.dalog.com/',
    site_name: 'Dalog',
    title: '프론트엔드 개발자 블로그',
    images: [{ url: '/assets/icon_logo.png' }],
  },
}

export default SEO
