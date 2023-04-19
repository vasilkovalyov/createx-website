import { IBlockProjectsCarousel } from './BlockProjectsCarousel.type'

import { model as productPreviewModel } from '../../components/ProductPreview/ProductPreview.model'

export const model: IBlockProjectsCarousel = {
  heading: 'Browse our selected projects and learn more about our work',
  items: [
    {
      ...productPreviewModel,
    },
    {
      ...productPreviewModel,
      id: '2',
    },
    {
      ...productPreviewModel,
      id: '3',
    },
    {
      ...productPreviewModel,
      id: '4',
    },
    {
      ...productPreviewModel,
      id: '5',
    },
  ],
}
