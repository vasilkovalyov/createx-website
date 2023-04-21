import { BlockEnum } from '../utils/blockEnums'
export interface IRegistryItem {
  BlockType: BlockEnum
  component: React.FunctionComponent | object
}
