import React, { useState, useEffect, useContext } from 'react'
import { PageProvider } from '../../context/project'

import { renderByBlockType } from '../../components'
import BlockServices from '../../components/theme/plain/BlockServices'

import { Block } from '../../enums/blocks'
import { IImage, ILink, IService } from '../../interfaces/common'
import { IImageField, IItemField } from '../../interfaces/fields'
import { getServices } from '../../libs/cms/queries'
import BlockHero from 'components/theme/plain/BlockHero'
import { IBlockHero } from 'interfaces/blocks'

export default function PageServiceInner(props) {
    const ctx = useContext(PageProvider)

    let image : IImage | null

    if (!ctx?.servicePages.data.length) {
        return <h1>Page is empty</h1>
    }

    const attributes = ctx?.servicePages.data[0].attributes
    
    if (attributes.BlockHero.Image.data) {
        image = {
            Url: attributes.BlockHero.Image.data.attributes.url,
            Alt: attributes.BlockHero.ImageAlt,
        }
    } else {
        image = null
    }

    const blockHeroAttributes = ctx?.servicePages.data[0].attributes.BlockHero

    const blockHeroProps = {
        Image: image,
        Text: blockHeroAttributes.Text,
        Title: blockHeroAttributes.Title,
        Overlay: blockHeroAttributes.Overlay
    } as IBlockHero
    console.log('blockHeroProps', blockHeroProps)
  
    return (
        <>
            <BlockHero {...blockHeroProps} />
        </>
      )
}
