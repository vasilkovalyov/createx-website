import { Block as EnumBlock } from 'enums/blocks'
import { IImage } from 'interfaces/common'
import { FieldAttributes, IImageFieldData, IPageField } from 'interfaces/fields'

export const getBlockData = (page: IPageField, Block: EnumBlock): FieldAttributes<any> | null => {
  if (!page?.pages.data) null

  let bodyData: FieldAttributes<any>[] | null = null

  if (page?.pages.data && page?.pages.data[0].attributes.Body) {
    bodyData = page?.pages.data[0].attributes.Body
  }

  if (!bodyData) return null

  const blockArray = page?.pages.data[0].attributes.Body?.filter((item) => {
    if (item.BlockType === Block) return item
  })

  const data = blockArray?.length ? blockArray[0] : null

  return data
}

export const getImageData = (imageField: IImageFieldData | null, imageAlt: string): IImage | null => {
  if (!imageField) {
    return null
  }

  return {
    Url: imageField.attributes.url,
    Alt: imageAlt,
  }
}
