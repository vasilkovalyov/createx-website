import { IBlockServices } from './BlockServices.type'
import { model as modelService } from '../../components/Service/Service.model'

export const model: IBlockServices = {
  items: [
    {
      ...modelService,
    },
    {
      ...modelService,
      id: '2',
      heading: 'Project Development',
    },
    {
      ...modelService,
      id: '3',
      heading: 'Interior Design',
    },
    {
      ...modelService,
      id: '4',
      heading: 'Repairs',
    },
  ],
}
