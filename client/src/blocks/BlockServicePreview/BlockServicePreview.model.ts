import { IBlockServicePreview } from './BlockServicePreview.type'
import { model as modelServicePreview } from '../../components/ServicePreview/ServicePreview.model'

export const model: IBlockServicePreview = {
  heading: 'Our core values',
  text: 'Our mission is to set the highest standards for construction sphere.',
  items: [
    {
      ...modelServicePreview,
      id: '1',
      heading: 'Construction',
    },
    {
      ...modelServicePreview,
      id: '2',
      heading: 'Project Development',
    },
    {
      ...modelServicePreview,
      id: '3',
    },
    {
      ...modelServicePreview,
      id: '4',
      heading: 'Repairs',
    },
  ],
}
