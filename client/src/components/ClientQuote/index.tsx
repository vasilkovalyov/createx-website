import React from 'react'
import Image from 'next/image'
import cn from 'classnames'
import Typography from '../Typography'
import { IClientQuote } from './ClientQuote.type'

function ClientQuote({ image, name, position, text, className }: IClientQuote) {
  return (
    <div className={cn('client-quote', className)}>
      {image ? <Image {...image} width={72} height={72} className="client-quote__image mb-24" /> : null}
      <Typography className="text-gray-800 text-md mb-24">{text}</Typography>
      <Typography className="mb-8 font-bold text-md mb-4">{name}</Typography>
      <Typography className="mb-8 text-gray-700 text-sm">{position}</Typography>
    </div>
  )
}

export default ClientQuote
