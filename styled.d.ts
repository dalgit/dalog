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
      _B1B2FF: string
      _CDCCFF: string
      _8782CD: string
      _878ECD: string
      _CBD9FC: string

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
