import { IImage, IBenefit, IContactInformation, IService, IWorkCategories } from './common'
import { Block } from '../enums/blocks'
import { ColorTheme, Identificator } from '../types/common'
import { IList, ILink, IProject, ITestimonial } from './common'
import { IBreadcrumbs } from './common'

export interface IBlockHero {
  Image: IImage
  Title?: string
  Text?: string
  Overlay?: boolean
  BreadCrumbs?: IBreadcrumbs | null
}

export interface IBlockBenefits {
  BlockType: Block
  Title: string
  Text?: string
  Theme?: ColorTheme
  Items: IBenefit[]
}

export interface IBlockConstructiveDecisions {
  Overlay?: boolean
  BlockType: Block
  Title: string
  List: IList
  Image?: IImage
  Reverse?: boolean
}

export interface IBlockProps {
  BlockType: Block
}

export interface IRegistryItem {
  BlockType: Block
  component: unknown
}

export interface IBlockIntroCarousel {
  BlockType: Block
  Title: string
  Text?: string
  Link?: ILink | null
  Items: IImage[]
}

export interface IBlockLatestProjects {
  BlockType: Block
  Title: string
  Items: IProject[]
  Text?: string
  Link?: ILink
}

export interface IBlockOurClientsTestimonials {
  BlockType: Block
  Title: string
  Image: IImage | null
  Items: ITestimonial[]
}

export interface IHistory {
  id: Identificator
  Image: IImage
  Text: string
  Date: string
}

export interface IBlockOurHistory {
  BlockType: Block
  Title: string
  Items: IHistory[]
}

export interface IBlockImageGallery {
  BlockType: Block
  Items: IImage[]
}

interface IOurOffice extends IContactInformation {
  id: Identificator
  Title: string
}

export interface IBlockOurOffices {
  BlockType: Block
  Title: string
  Text: string
  Items: IOurOffice[]
}

export interface IBlockFormDetail {
  BlockType: Block
  Image: IImage | null
}

export interface IBlockService {
  Items: IService[]
}

export interface IBlockWorkSteps {
  BlockType: Block
  Title
  Items: {
    id: Identificator
    WorkStepTitle: string
    Text: string
    ShowNumber: boolean
  }[]
}

interface IPriceCol {
  id: Identificator
  PriceCost: string
  PricePlan: string
}

interface IPriceRow {
  id: Identificator
  Title: string
  Plan1: string
  Text1: string | null
  Available1: boolean | null
  Plan2: string | null
  Text2: string | null | null
  Available2: boolean | null
  Plan3: string | null
  Text3: string | null | null
  Available3: boolean | null
}

export interface IBlockPricing {
  BlockType: Block
  Title: string
  Text?: string
  PriceCol: IPriceCol[]
  PriceRow: IPriceRow[]
}

export interface IBlockServiceDescription {
  BlockType: Block
  Title: string
  Image?: IImage
  Items?: {
    id: Identificator
    Title: string
    Text: string
  }[]
}

export interface IBlockOurWorks {
  Categories: IWorkCategories[]
  Items: IProject[]
}

export interface IBlockPreviewServices {
  BlockType: Block
  Title: string
  Text: string
  Items: IService[] | []
}
