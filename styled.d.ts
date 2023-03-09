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
  }
}
