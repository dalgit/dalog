import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    pageBaseSize: {
      contentWidth: string
      contentPadding: string
      headerHeight: string
      footerHeight: string
    }
    device: {
      mobile: string
      tablet: string
      tabletMax: string
      laptop: string
    }
    colors: {
      primary: string
      secondary: string
      tertiary: string
      quaternary: string

      gray: string
      lightGray: string
      lightBlack: string

      border_light: string
      border_normal: string

      post_font: string
      post_link: string
    }
  }
}
