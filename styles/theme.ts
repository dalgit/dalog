import { DefaultTheme } from 'styled-components'

const pageBaseSize = {
  contentWidth: '110px',
  contentPadding: '0 10px',
  headerHeight: '63px',
  footerHeight: '90px',
  sideBarWIdth: '150px',
}

const deviceSizes = {
  mobile: '767px',
  tablet: '1023px',
  tabletMax: '1023px',
  laptop: '1024px',
}

const colors = {
  _B1B2FF: '#B1B2FF',
  _CDCCFF: '#CDCCFF',
  _8782CD: '#8782CD',
  _878ECD: '#878ECD',
  _CBD9FC: '#CBD9FC',
  gray: '#AAAAAA',
  lightGray: '#f7f7f8;',
  lightBlack: '#6c6767',

  border_light: '#f5f5f5',
  border_normal: '#e4e4e4',

  post_font: '#333',
  post_link: '#0070f3',
}

const device = {
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `screen and (min-width:${deviceSizes.mobile}) and (max-width: ${deviceSizes.tablet})`,
  tabletMax: `screen and (max-width: ${deviceSizes.laptop})`,
  laptop: `screen and (min-width: ${deviceSizes.laptop})`,
}

const theme: DefaultTheme = {
  pageBaseSize,
  device,
  colors,
}

export default theme
