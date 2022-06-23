import React from 'react'

import { renderByBlockType } from '../../components'

import { Block } from '../../enums/blocks'

export default function PageServices(props) {
  return (
    <>
      {renderByBlockType(Block.BlockHero)}
      {renderByBlockType(Block.BlockServices)}
    </>
  )
}
