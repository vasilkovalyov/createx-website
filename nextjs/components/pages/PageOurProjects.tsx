import React from 'react'

import { renderByBlockType } from '..'

import { Block } from '../../enums/blocks'

export default function PageOurProjects() {
  return (
    <>
      {renderByBlockType(Block.BlockHero)}
      {renderByBlockType(Block.BlockOurProjects)}
      {renderByBlockType(Block.BlockOurClientsTestimonials)}
    </>
  )
}
