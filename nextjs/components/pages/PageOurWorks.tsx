import React from 'react'

import { renderByBlockType } from '../../components'

import { Block } from '../../enums/blocks'

export default function PageOurWorks() {
  return (
    <>
      {renderByBlockType(Block.BlockHero)}
      {renderByBlockType(Block.BlockOurWorks)}
      {renderByBlockType(Block.BlockOurClientsTestimonials)}
    </>
  )
}
