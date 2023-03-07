const layoutHeight = {
  header: '63px',
  footer: '90px',
}

const deviceSizes = {
  mobile: '767px',
  tablet: { min: '768px', max: '1023px' },
  laptop: '1024px',
}

const device = {
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `screen and (min-width:${deviceSizes.tablet.min}) and (max-width: ${deviceSizes.tablet.max})`,
  laptop: `screen and (min-width: ${deviceSizes.laptop})`,
}

const theme = {
  layoutHeight,
  device,
}

export default theme
