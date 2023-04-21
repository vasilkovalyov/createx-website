import { IBlockFindUs } from './BlockFindUs.type'
import { model as modelSocialList } from '../../components/SocialList/SocialList.model'

export const model: IBlockFindUs = {
  heading: 'Find us at',
  items: modelSocialList.items,
}
