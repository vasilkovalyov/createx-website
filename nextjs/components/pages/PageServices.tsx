import React, { useState, useEffect } from 'react'

import { renderByBlockType } from '../../components'
import BlockServices from '../../components/theme/plain/BlockServices'

import { Block } from '../../enums/blocks'
import { ILink, IService } from '../../interfaces/common'
import { IItemField } from '../../interfaces/fields'
import { getServices } from '../../libs/cms/queries'

export default function PageServices(props) {
  const [services, setServices] = useState<IService[] | []>([])

  useEffect(() => {
    getServices().then((response) => {
      if (!response.services.data.length) return []
      const services = response.services.data.map((item: IItemField): IService => {
        let link: ILink | null
        if (item.attributes.Link.page.data) {
          link = {
            url: item.attributes.Link.page.data.attributes.Slug,
            text: item.attributes.Link.Name,
          }
        } else {
          link = null
        }

        return {
          Image: {
            Url: item.attributes.Image.data.attributes.url,
            Alt: item.attributes.ImageAlt,
          },
          Title: item.attributes.Title,
          Text: item.attributes.Text,
          Link: link,
        } as IService
      })
      setServices(services)
    })
  }, [])

  return (
    <>
      {renderByBlockType(Block.BlockHero)}
      <BlockServices Items={services} />
    </>
  )
}
