import {
  IImage,
  IBenefit,
  IContactInformation,
  IService,
  IProjectCategories,
  IProjectDescription,
  INewsCategories,
  INewsPost,
  IHistory,
  IPerson,
  IPosition,
  ISocialLink,
} from './common'
import { Block } from '../enums/blocks'
import { ColorTheme, Identificator } from '../types/common'
import { IList, ILink, IProject, ITestimonial } from './common'
import { IBreadcrumbs } from './common'
import { IPageMetaPagination } from './fields'

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

export interface IBlockProjectStatistics {
  BlockType: Block
  Items?: IBenefit[] | []
}

export interface IBlockConstructiveDecisions {
  Overlay?: boolean
  BlockType: Block
  Title: string
  RichText: string
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

export interface IBlockTestimonial extends ITestimonial {
  BlockType: Block
}

export interface IBlockOurHistory {
  BlockType: Block
  Title: string
  Items: IHistory[] | []
}

export interface IBlockImageGallery {
  BlockType: Block
  Items: IImage[] | []
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
  Title2?: string
  Socials: ISocialLink[]
}

export interface IBlockFormDetail {
  BlockType: Block
  Image: IImage | null
}

export interface IBlockService {
  Items: IService[]
}

export interface IBlockProjectSteps {
  BlockType: Block
  Title
  Items: {
    id: Identificator
    Title: string
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
  Overlay?: boolean
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

export interface IBlockOurProjects {
  BlockType: Block
  Categories: IProjectCategories[] | []
  Items: IProject[] | []
}

export interface IBlockPreviewServices {
  BlockType: Block
  Title: string
  Text: string
  Items: IService[] | []
}

export interface IBlockProjectDescription {
  BlockType: Block
  Title: string
  RichText: string
  Items: IProjectDescription[] | []
}

export interface IMeta {
  pagination: IPageMetaPagination
}

export interface IBlockNews {
  BlockType: Block
  Title: string
  Categories: INewsCategories[]
  Items: INewsPost[]
  meta: IMeta
}

export interface IBlockOurTeam {
  BlockType: Block
  Title: string
  Text: string
  Items: IPerson[] | []
}

export interface IBlockPostHero {
  BlockType?: Block
  Title: string
  Category?: string | null
  Date?: string | null
}

export interface IBlockAvailablePositions {
  BlockType: Block
  Items: IPosition[]
  Aside?: {
    Title: string
    Text: string
    Subscribe: boolean
    SendCV: boolean
  }
}
