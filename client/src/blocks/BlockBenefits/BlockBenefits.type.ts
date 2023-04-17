import { ThemeType } from '../../types/common'
import { IBenefit } from '../../components/Benefit/Benefit.type'

export interface IBlockBenefits {
  heading?: string
  text?: string
  items: IBenefit[]
  className?: string
  theme?: ThemeType
}
