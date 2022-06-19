import { useContext } from 'react'
import { PageProvider } from '../../context/project'

import { getComponent } from 'components'
import { IBlockOurClientsTestimonials } from '../../interfaces/blocks'
import { Block } from '../../enums/blocks'
import { ITestimonialField } from 'interfaces/fields'
import { ITestimonial } from 'interfaces/common'

export default function BlockOurClientsTestimonialsBlock() {
  const ctx = useContext(PageProvider)
  const blockOurClientsData = ctx?.pages.data[0].attributes.Body.filter((item) => item.BlockType === Block.BlockOurClientsTestimonials)[0]
  if (!blockOurClientsData) return null
  const updatedItems = (items: ITestimonialField[]): ITestimonial[] => {
    return items.map((item) => {
        return {
            ...item,
            Image: {
                Url: item.Image.data.attributes.url,
                Alt: item.ImageAlt
            } 
        }
    })
  }

  const props = {
    BlockType: blockOurClientsData.BlockType,
    Title: blockOurClientsData.Title,
    Items: updatedItems(blockOurClientsData.Items)
  } as unknown as IBlockOurClientsTestimonials
  
  return getComponent<IBlockOurClientsTestimonials>(Block.BlockOurClientsTestimonials, props)
}
