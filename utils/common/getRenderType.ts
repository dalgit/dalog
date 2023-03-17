import { PAGE_RENDER_TYPES } from '@/constants/pageTypes'
import { getFirstPath } from '@/utils/common/getFirstPath'

export const getRenderType = (url: string) => {
  const firstPath = getFirstPath(url)
  return PAGE_RENDER_TYPES[firstPath]
}
