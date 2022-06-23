import React from 'react'

import { renderByBlockType } from '../../components'

import { Block } from '../../enums/blocks'

export default function PageServiceInner() {
  return (
    <>
      {renderByBlockType(Block.BlockHero)}
      {renderByBlockType(Block.BlockPricing)}
      {/* {renderByBlockType(Block.BlockFormDetail)} */}
    </>
  )
}
